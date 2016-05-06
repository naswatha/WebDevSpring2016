/**
 * Created by Naveen on 3/11/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("CreateWorkoutController", CreateWorkoutController);

    function CreateWorkoutController($scope,$rootScope, $location,WorkoutService,UserService,WgerApiService) {

        UserService
            .getCurrentUser()
            .then(function (res) {
                $rootScope.loggedUser = res.data;
                $scope.user = $rootScope.loggedUser;

                if($rootScope.loggedUser == null || !$rootScope.loggedUser){
                    $scope.loginFlag = true;
                    $scope.displaySuccessFlag = true;
                }

            });

        $scope.allExerciseData = $rootScope.exerciseList;
        //[
        //    {
        //        'eId': '89',
        //        'name': "Barbell Bench Press"},
        //    {
        //        'eId': '91',
        //        'name': "Crunches"},
        //    {
        //        'eId': '48',
        //        'name': "Leg Extension"}];

        $scope.sunExerciseData = {};
        $scope.monExerciseData = {};
        $scope.tueExerciseData = {};
        $scope.wedExerciseData = {};
        $scope.thurExerciseData = {};
        $scope.friExerciseData = {};
        $scope.satExerciseData = {};
        $scope.weekArray = [];
        $scope.workoutPlan = {};
        $scope.displaySuccessFlag = false;
        $scope.numberOfWeeks = 0;

        $scope.exerciseCache = [];

        $scope.addTable = function(weekNum){
            $scope.addTableFlag = false;
            if(weekNum >= 1){
                $scope.addTableFlag = true;
                $scope.numberOfWeeks = weekNum;

                for (var i = 1; i <= weekNum; i++) {
                    var weekData = {
                        "weekNum": i,
                        "Sunday":{"dayCompleted":false, "sunExerDet": []},
                        "Monday":{"dayCompleted":false, "monExerDet": []},
                        "Tuesday":{"dayCompleted":false, "tueExerDet": []},
                        "Wednesday":{"dayCompleted":false, "wedExerDet": []},
                        "Thursday":{"dayCompleted":false, "thurExerDet": []},
                        "Friday":{"dayCompleted":false, "friExerDet": []},
                        "Saturday":{"dayCompleted":false, "satExerDet": []}};
                    $scope.weekArray.push(weekData);
                }
            }
        };

        $scope.addExercise = function(index, day) {

            $scope.showFlag = true;
            var exerciseDetails = {};
            var repTargetArr = [];
            if($scope[day].rep1 != null) {
                repTargetArr.push($scope[day].rep1);
            }
            if($scope[day].rep2 != null) {
                repTargetArr.push($scope[day].rep2);
            }
            if($scope[day].rep3 != null) {
                repTargetArr.push($scope[day].rep3);
            }
            if($scope[day].rep4 != null) {
                repTargetArr.push($scope[day].rep4);
            }
            //exerciseDetails.exer.name = $scope[day].name;
            //exerciseDetails.exer.eId = $scope[day].id;
            exerciseDetails.exer = $scope[day].name;
            exerciseDetails.repsTarget = repTargetArr;
            exerciseDetails.repsAchieved = [];
            //console.log(exerciseDetails);
            for(var i = 0; i <= index; i++){
                if($scope.weekArray[i].weekNum == index){

                    if(day == "sunExerciseData") {
                        $scope.weekArray[i].Sunday.sunExerDet.push(exerciseDetails);
                        break;
                    }
                    if(day == "monExerciseData") {
                        $scope.weekArray[i].Monday.monExerDet.push(exerciseDetails);
                        break;
                    }
                    if(day == "tueExerciseData") {
                        $scope.weekArray[i].Tuesday.tueExerDet.push(exerciseDetails);
                        break;
                    }
                    if(day == "wedExerciseData") {
                        $scope.weekArray[i].Wednesday.wedExerDet.push(exerciseDetails);
                        break;
                    }
                    if(day == "thurExerciseData") {
                        $scope.weekArray[i].Thursday.thurExerDet.push(exerciseDetails);
                        break;
                    }
                    if(day == "friExerciseData") {
                        $scope.weekArray[i].Friday.friExerDet.push(exerciseDetails);
                        break;
                    }
                    if(day == "satExerciseData") {
                        $scope.weekArray[i].Saturday.satExerDet.push(exerciseDetails);
                        break;
                    }
                }
            }
            //console.log($scope.weekArray);
        };

        $scope.create = function(){

            console.log($scope.workoutPlan);
            console.log($scope.weekArray);
            var newWorkout = {};
            newWorkout.name = $scope.workoutPlan.name;
            newWorkout.description = $scope.workoutPlan.description;
            newWorkout.public = false;
            newWorkout.active = false;
            newWorkout.username = $rootScope.loggedUser.username;
            newWorkout.numWeeks = $scope.numberOfWeeks;
            newWorkout.weeks = $scope.weekArray;
            console.log(newWorkout);
            WorkoutService.createWorkout(newWorkout).then(
                function (response){
                    if(response){
                        $scope.createdWorkout = response.data;
                        $scope.displaySuccessFlag = true;
                    }
                });
        };


        $scope.imageObjects = [];
        $scope.exerciseImageURL = [];


        // display selected exercise details.
        $scope.showExerciseDetails = function(exercise){
            var exerciseId = exercise.id;
            //console.log(exercise.id);
            //console.log(exerciseId);

            $scope.exerciseImageURL = [];
            WgerApiService.findExerciseByID ( exerciseId,
                function (exerciseDetails){
                    //console.log(exerciseDetails);
                    $scope.exerciseDetails = exerciseDetails;
                    WgerApiService.getAllEquipments(
                        function (equipments){
                            var requiredEquipments = [];
                            for(var j=0;j<exerciseDetails.equipment.length;j++){
                                for(var i=0;i<equipments.results.length;i++){
                                    if(exerciseDetails.equipment[j] == equipments.results[i].id){
                                        requiredEquipments.push(equipments.results[j].name);
                                    }
                                }
                            }
                            $scope.displayEquipments = requiredEquipments;
                        });


                    WgerApiService.getAllMuscles(
                        function (muscles){
                            var primaryMuscles =[];
                            var secondaryMuscles =[];

                            for(var l=0;l<exerciseDetails.muscles.length;l++){
                                for(var m=0;m<muscles.results.length;m++){
                                    if(exerciseDetails.muscles[l] == muscles.results[m].id){
                                        primaryMuscles.push(muscles.results[l].name);
                                    }
                                }
                            }
                            $scope.displayMuscles = primaryMuscles;

                            for(var j=0;j<exerciseDetails.muscles_secondary.length;j++){
                                for(var i=0;i<muscles.results.length;i++){
                                    if(exerciseDetails.muscles_secondary[j] == muscles.results[i].id){
                                        secondaryMuscles.push(muscles.results[j].name);
                                    }
                                }
                            }
                            $scope.displaySecondaryMuscles = secondaryMuscles;
                        });

                    var description = $scope.exerciseDetails.description;
                    description = description.replace(/<\/p>/gm, "");
                    description = description.replace(/<p>/gm,"");
                    $scope.exerciseDetails.description = description;
                    console.log($scope.imageObjects);

                    for(var i =0; i < $scope.imageObjects.length; i++){
                        if($scope.exerciseDetails.id == $scope.imageObjects[i].exercise){
                            $scope.exerciseImageURL.push($scope.imageObjects[i].image);
                        }
                    }
                });

        };


    }

})();