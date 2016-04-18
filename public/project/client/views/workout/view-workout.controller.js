/**
 * Created by Naveen on 3/11/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("ViewWorkoutController", ViewWorkoutController);

    function ViewWorkoutController($scope,$rootScope, $location) {

        //console.log($rootScope.displayWorkout);
        $scope.displayWorkout = $rootScope.displayWorkout;
        $scope.currentDate = (new Date).getTime();

    }

})();