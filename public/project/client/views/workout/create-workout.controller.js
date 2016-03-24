/**
 * Created by Naveen on 3/11/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("CreateWorkoutController", CreateWorkoutController);

    function CreateWorkoutController($scope, $location) {

        $scope.sunExerciseData = {};
        $scope.monExerciseData = {};
        $scope.weekArray = [];


        $scope.addTable = function(weekNum){
            //$scope.weekArray = 0;
            $scope.addTableFlag = true;
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
            //console.log($scope.weekArray);
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

        console.log($scope.weekArray);

        $scope.createWorkout = function(){

            WorkoutService.createNewWorkout($scope.weekArray,
                function callback(){

                });
        };
    }

})();