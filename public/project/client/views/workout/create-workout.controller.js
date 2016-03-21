/**
 * Created by Naveen on 3/11/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("CreateWorkoutController", CreateWorkoutController);

    function CreateWorkoutController($scope, $location) {

        $scope.addTable = function(weekNum){
            //$scope.weekArray = 0;
            $scope.addTableFlag = true;
            if(weekNum >= 1){
                $scope.addTableFlag = true;
                $scope.weekArray = new Array();
                for (var i = 1; i <= weekNum; i++) {
                    $scope.weekArray.push(i);
                }
            }
            console.log($scope.weekArray);

        };

    }

})();