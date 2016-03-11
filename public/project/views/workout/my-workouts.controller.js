/**
 * Created by Naveen on 3/10/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("MyWorkoutController", MyWorkoutController);

    function MyWorkoutController($scope,$rootScope, $location,WorkoutService) {

        $scope.loggedUserWorkouts = [];

        // display all the workout for the logged user.
        if($rootScope.loggedUser){

            WorkoutService.findAllWorkoutForUser($rootScope.loggedUser._id,
                function(response){
                    $scope.loggedUserWorkouts = response;
                });
        }

        $scope.selectedWorkoutIndex = null;
        var currentWorkout = {};

        // delete workout which user selects
        $scope.deleteWorkout = function(index){
            currentWorkout = $scope.loggedUserWorkouts[index];
            WorkoutService.deleteWorkoutById(currentWorkout._id,$rootScope.loggedUser._id,
                function(response){
                    $scope.loggedUserWorkouts.splice(index,1);
                    //console.log(response);
                });
        };

        // make other workout active.
        $scope.makeActive = function(index){
            currentWorkout = $scope.loggedUserWorkouts[index];
            WorkoutService.updateActiveWorkoutById(currentWorkout._id,$scope.loggedUserWorkouts,
                function(response){
                    $scope.loggedUserWorkouts = response;
                    //console.log(response);
                });
        };


        // make workout public.
        $scope.makeWorkoutPublic = function(index){
            currentWorkout = $scope.loggedUserWorkouts[index];
            WorkoutService.makeWorkoutPublicById(currentWorkout._id,$scope.loggedUserWorkouts,
                function(response){
                    $scope.loggedUserWorkouts = response;
                    //console.log(response);
                });

        }


    }

})();