/**
 * Created by Naveen on 3/11/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("CreateWorkoutController", CreateWorkoutController);

    function CreateWorkoutController($scope, $location) {

        $scope.addTable = function(){
            $scope.addTableFlag = true;
        }
    }

})();