/**
 * Created by Naveen on 3/2/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("AdminController", AdminController);

    function AdminController($scope, $location,$rootScope,UserService, WorkoutService) {
        //console.log("AdminController");

        $scope.toggle = true;
        $scope.userList = [];
        $scope.workoutList = [];

        UserService
            .getCurrentUser()
            .then(function (res) {
                $rootScope.loggedUser = res.data;
                $scope.user = $rootScope.loggedUser;
                if($rootScope.loggedUser == null || !$rootScope.loggedUser){
                    $scope.loginFlag = true;
                }
            });

        if($scope.toggle){
            UserService.findAllUsers().then(
                function(response){
                    $scope.userList = response.data;
                    //console.log($scope.userList);
                });
        }

        $scope.showUsers = function(){
            $scope.toggle = true;
            UserService.findAllUsers().then(
                function(response){
                    $scope.userList = response.data;
                    //console.log($scope.userList);
                });
        };

        $scope.deleteUser = function(user){
            UserService.deleteUserById(user._id).then(
                function(response){
                    UserService.findAllUsers().then(
                        function(response){
                            $scope.userList = response.data;
                            //console.log($scope.userList);
                        });
                });
        };

        $scope.showWorkouts = function(){
            $scope.toggle = false;
            WorkoutService.findAllWorkouts().then(
                function(response){
                    $scope.workoutList = response.data;
                });
        };

        $scope.deleteWorkout = function(workout){
            WorkoutService.deleteWorkoutById(workout._id).then(
                function(response){
                    WorkoutService.findAllWorkouts().then(
                        function(response){
                            $scope.workoutList = response.data;
                            //console.log($scope.workoutList);
                        });

                });
        };


    }

})();