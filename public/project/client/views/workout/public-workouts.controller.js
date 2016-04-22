/**
 * Created by Naveen on 3/10/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("PublicWorkoutController", PublicWorkoutController);

    function PublicWorkoutController($scope, $location, $rootScope, WorkoutService,UserService) {



        $scope.publicWorkouts = [];

        WorkoutService.findAllPublicWorkouts(1).then(
            function(response){
                $scope.publicWorkouts = response.data;
            });

        $scope.subscribe = function(subscribeTo) {
            UserService.addToSubscribeList(subscribeTo,$scope.loggedUser.username).then(
                function(response){
                    $rootScope.loggedUser = response.data;
                    $scope.successMessage = "You have subscribed to "+subscribeTo;
                });

        };

        $scope.viewWorkout = function(workout){
            $rootScope.displayWorkout = workout;
            $location.path('/view-workout');
        };

    }
})();