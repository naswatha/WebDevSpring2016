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
                    //console.log(response);
                });

        //console.log($scope.loggedUserId);

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
            for(var i = 0;i<workout.userId.length;i++) {
                if (workout.userId[i] === $scope.loggedUserId) {
                    count++;
                }
            }
                if(count >= 1){
                    return false;
                }
                else {
                    return true;

                }

        };



    }

})();