/**
 * Created by Naveen on 3/11/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("CreateWorkoutController", CreateWorkoutController);

    function CreateWorkoutController($scope,$rootScope, $location,WorkoutService,WgerApiService) {

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

        //WgerApiService.cacheExercises(
        //    function(response){
        //        for(var i = 0; i < response.results.length; i++){
        //            $scope.exerciseCache.push(response.results[i]);
        //        }
        //        console.log($scope.exerciseCache);
        //    });

        $scope.addTable = function(weekNum){
            //$scope.weekArray = 0;
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

            console.log(day);
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
            exerciseDetails.eName = $scope[day].name;
            //exerciseDetails.dayCompleted = false;
            exerciseDetails.repsTarget = repTargetArr;
            exerciseDetails.repsAchieved = [];
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
        };

        $scope.create = function(){

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


    }

})();