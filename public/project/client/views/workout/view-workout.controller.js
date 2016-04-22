/**
 * Created by Naveen on 3/11/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("ViewWorkoutController", ViewWorkoutController);

    function ViewWorkoutController($scope,$rootScope, $location,UserService) {

        UserService
            .getCurrentUser()
            .then(function (res) {
                $rootScope.loggedUser = res.data;
                $scope.user = $rootScope.loggedUser;
            });
        $scope.displayWorkout = $rootScope.displayWorkout;
        $scope.currentDate = (new Date).getTime();

    }

})();