/**
 * Created by Naveen on 3/11/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("CreateWorkoutController", CreateWorkoutController);

    function CreateWorkoutController($scope,$rootScope, $location,WorkoutService) {

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


        $scope.addTable = function(weekNum){
            //$scope.weekArray = 0;
            $scope.addTableFlag = false;
            if(weekNum >= 1){
                $scope.addTableFlag = true;

                for (var i = 1; i <= weekNum; i++) {
                    var weekData = {
                        "weekNum": i,
                        "Sunday":[],
                        "Monday":[],
                        "Tuesday":[],
                        "Wednesday":[],
                        "Thursday":[],
                        "Friday":[],
                        "Saturday":[]};
                    $scope.weekArray.push(weekData);
                }
            }
        };

        $scope.addSunday = function(index){

            $scope.showFlag = true;
            var exerciseDetails = {};
            var repArr = [];
            if($scope.sunExerciseData.rep1 != null) {
                repArr.push($scope.sunExerciseData.rep1);
            }
            if($scope.sunExerciseData.rep2 != null) {
                repArr.push($scope.sunExerciseData.rep2);
            }
            if($scope.sunExerciseData.rep3 != null) {
                repArr.push($scope.sunExerciseData.rep3);
            }
            if($scope.sunExerciseData.rep4 != null) {
                repArr.push($scope.sunExerciseData.rep4);
            }
            exerciseDetails.eName = $scope.sunExerciseData.name;
            exerciseDetails.reps = repArr;
            for(var i = 0; i <= index; i++){
                if($scope.weekArray[i].weekNum == index){
                    $scope.weekArray[i].Sunday.push(exerciseDetails);
                    break;
                }
            }
           // console.log($scope.weekArray);
        };

        $scope.addMonday = function(index){

            var exerciseDetails = {};
            var repArr = [];
            if($scope.monExerciseData.rep1 != null) {
                repArr.push($scope.monExerciseData.rep1);
            }
            if($scope.monExerciseData.rep2 != null) {
                repArr.push($scope.monExerciseData.rep2);
            }
            if($scope.monExerciseData.rep3 != null) {
                repArr.push($scope.monExerciseData.rep3);
            }
            if($scope.monExerciseData.rep4 != null) {
                repArr.push($scope.monExerciseData.rep4);
            }
            exerciseDetails.eName = $scope.monExerciseData.name;
            exerciseDetails.reps = repArr;
            for(var i = 0; i <= index; i++){
                if($scope.weekArray[i].weekNum == index){
                    $scope.weekArray[i].Monday.push(exerciseDetails);
                    break;
                }
            }
            //console.log($scope.weekArray);
        };

        $scope.addTuesday = function(index){

            var exerciseDetails = {};
            var repArr = [];
            if($scope.tueExerciseData.rep1 != null) {
                repArr.push($scope.tueExerciseData.rep1);
            }
            if($scope.tueExerciseData.rep2 != null) {
                repArr.push($scope.tueExerciseData.rep2);
            }
            if($scope.tueExerciseData.rep3 != null) {
                repArr.push($scope.tueExerciseData.rep3);
            }
            if($scope.tueExerciseData.rep4 != null) {
                repArr.push($scope.tueExerciseData.rep4);
            }
            exerciseDetails.eName = $scope.tueExerciseData.name;
            exerciseDetails.reps = repArr;
            for(var i = 0; i <= index; i++){
                if($scope.weekArray[i].weekNum == index){
                    $scope.weekArray[i].Tuesday.push(exerciseDetails);
                    break;
                }
            }
            //console.log($scope.weekArray);
        };

        $scope.addWednesday = function(index){

            var exerciseDetails = {};
            var repArr = [];
            if($scope.wedExerciseData.rep1 != null) {
                repArr.push($scope.wedExerciseData.rep1);
            }
            if($scope.wedExerciseData.rep2 != null) {
                repArr.push($scope.wedExerciseData.rep2);
            }
            if($scope.wedExerciseData.rep3 != null) {
                repArr.push($scope.wedExerciseData.rep3);
            }
            if($scope.wedExerciseData.rep4 != null) {
                repArr.push($scope.wedExerciseData.rep4);
            }
            exerciseDetails.eName = $scope.wedExerciseData.name;
            exerciseDetails.reps = repArr;
            for(var i = 0; i <= index; i++){
                if($scope.weekArray[i].weekNum == index){
                    $scope.weekArray[i].Wednesday.push(exerciseDetails);
                    break;
                }
            }
            //console.log($scope.weekArray);
        };

        $scope.addThursday = function(index){

            var exerciseDetails = {};
            var repArr = [];
            if($scope.thurExerciseData.rep1 != null) {
                repArr.push($scope.thurExerciseData.rep1);
            }
            if($scope.thurExerciseData.rep2 != null) {
                repArr.push($scope.thurExerciseData.rep2);
            }
            if($scope.thurExerciseData.rep3 != null) {
                repArr.push($scope.thurExerciseData.rep3);
            }
            if($scope.thurExerciseData.rep4 != null) {
                repArr.push($scope.thurExerciseData.rep4);
            }
            exerciseDetails.eName = $scope.thurExerciseData.name;
            exerciseDetails.reps = repArr;
            for(var i = 0; i <= index; i++){
                if($scope.weekArray[i].weekNum == index){
                    $scope.weekArray[i].Thursday.push(exerciseDetails);
                    break;
                }
            }
            //console.log($scope.weekArray);
        };

        $scope.addFriday = function(index){

            var exerciseDetails = {};
            var repArr = [];
            if($scope.friExerciseData.rep1 != null) {
                repArr.push($scope.friExerciseData.rep1);
            }
            if($scope.friExerciseData.rep2 != null) {
                repArr.push($scope.friExerciseData.rep2);
            }
            if($scope.friExerciseData.rep3 != null) {
                repArr.push($scope.friExerciseData.rep3);
            }
            if($scope.friExerciseData.rep4 != null) {
                repArr.push($scope.friExerciseData.rep4);
            }
            exerciseDetails.eName = $scope.friExerciseData.name;
            exerciseDetails.reps = repArr;
            for(var i = 0; i <= index; i++){
                if($scope.weekArray[i].weekNum == index){
                    $scope.weekArray[i].Friday.push(exerciseDetails);
                    break;
                }
            }
            //console.log($scope.weekArray);
        };

        $scope.addSaturday = function(index){

            var exerciseDetails = {};
            var repArr = [];
            if($scope.satExerciseData.rep1 != null) {
                repArr.push($scope.satExerciseData.rep1);
            }
            if($scope.satExerciseData.rep2 != null) {
                repArr.push($scope.satExerciseData.rep2);
            }
            if($scope.satExerciseData.rep3 != null) {
                repArr.push($scope.satExerciseData.rep3);
            }
            if($scope.satExerciseData.rep4 != null) {
                repArr.push($scope.satExerciseData.rep4);
            }
            exerciseDetails.eName = $scope.satExerciseData.name;
            exerciseDetails.reps = repArr;
            for(var i = 0; i <= index; i++){
                if($scope.weekArray[i].weekNum == index){
                    $scope.weekArray[i].Saturday.push(exerciseDetails);
                    break;
                }
            }
            //console.log($scope.weekArray);
        };



        $scope.create = function(){

            var userDet = [];
            var currentUser = {};
            currentUser.userId = $rootScope.loggedUser._id;
            currentUser.active = 0;
            userDet.push(currentUser);
            var newWorkout = {};
            newWorkout.weeks = $scope.weekArray;
            newWorkout.startdate = $scope.workoutPlan.startDate;
            newWorkout.name = $scope.workoutPlan.name;
            newWorkout.description = $scope.workoutPlan.description;
            newWorkout.public = 0;
            newWorkout.userDetails = userDet;
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