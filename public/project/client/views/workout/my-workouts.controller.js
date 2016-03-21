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
                });
        };

        // make other workout active.
        $scope.makeActive = function(index){
            currentWorkout = $scope.loggedUserWorkouts[index];
            WorkoutService.updateActiveWorkoutById(currentWorkout._id,$scope.loggedUserWorkouts,$rootScope.loggedUser._id,
                function(response){
                    $scope.loggedUserWorkouts = response;
                });
        };

        $scope.showActive = function (workout){
            var count = 0;
            for(var i = 0;i<workout.userDetails.length;i++) {
                if(workout.userDetails[i].userId == $rootScope.loggedUser._id){
                    if (workout.userDetails[i].active === 1) {
                        count++;
                    }
                }
            }
            return !(count>=1);
        };


        // make workout public.
        $scope.makeWorkoutPublic = function(index){
            currentWorkout = $scope.loggedUserWorkouts[index];
            WorkoutService.makeWorkoutPublicById(currentWorkout._id,$scope.loggedUserWorkouts,
                function(response){
                    $scope.loggedUserWorkouts = response;

                });

        }


    }

})();

//changes required for new userdetails.
// 1) userworkouts details findAllWorkoutForUser
// 2) deleteWorkoutById
// 3) updateActiveWorkoutById