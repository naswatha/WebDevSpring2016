/**
 * Created by Naveen on 3/10/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("PublicWorkoutController", PublicWorkoutController);

    function PublicWorkoutController($scope, $location, $rootScope, WorkoutService) {

        $scope.loggedUserWorkouts = [];
        $scope.publicWorkouts = [];
        $scope.loggedUserId = $rootScope.loggedUser._id;


            WorkoutService.findAllPublicWorkouts(
                function(response){
                    $scope.publicWorkouts = response;
                });



        $scope.selectedWorkoutIndex = null;
        var currentWorkout = {};

        // add public workout to logged user workout
        $scope.addWorkout = function(index){
            currentWorkout = $scope.publicWorkouts[index];
            WorkoutService.addWorkoutToMyList(currentWorkout._id,$rootScope.loggedUser._id,$scope.publicWorkouts,
                function(response){
                    $scope.publicWorkouts = response;
                    console.log(response);
                });
        };


        $scope.show = function (workout){
            var count = 0;
            for(var i = 0;i<workout.userDetails.length;i++) {
                if (workout.userDetails[i].userId === $scope.loggedUserId) {
                    count++;
                }
            }
            return !(count>=1);
        };

        $scope.viewWorkout = function(workout){
            $rootScope.displayWorkout = workout;

            $location.path('/view-workout');
        };

    }
})();