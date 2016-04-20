/**
 * Created by Naveen on 3/10/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("MyWorkoutController", MyWorkoutController);

    function MyWorkoutController($scope,$rootScope, $location,WorkoutService,UserService) {

        UserService
            .getCurrentUser()
            .then(function (res) {
                $rootScope.loggedUser = res.data;
                $scope.user = $rootScope.loggedUser;
                // display all the workout for the logged user.

                if($rootScope.loggedUser == null || !$rootScope.loggedUser){
                    $scope.loginFlag =true;
                }


                if($rootScope.loggedUser){
                    console.log($rootScope.loggedUser);
                    WorkoutService.findAllWorkoutForUser($rootScope.loggedUser.username).then(
                        function(response){
                            $scope.loggedUserWorkouts = response.data;
                        });
                }
            });

        //console.log("myworkout controller");
        //console.log($scope.user);

        $scope.loggedUserWorkouts = {};
        $scope.subscribedList = [];
        $scope.subscribedWorkouts = [];
        $scope.subscribeFlag = true;

        console.log($rootScope.loggedUser);



        $scope.selectedWorkoutIndex = null;
        var currentWorkout = {};

        //// make workout public.
        $scope.makeWorkoutPublic = function(index){
            currentWorkout = $scope.loggedUserWorkouts[index];
            WorkoutService.makeWorkoutPublicById(currentWorkout._id).then(
                function(response){
                    WorkoutService.findAllWorkoutForUser($rootScope.loggedUser.username).then(
                        function(response){
                            $scope.loggedUserWorkouts = response.data;
                        });
                });
        };

        $scope.viewWorkout = function(workout){
            $rootScope.displayWorkout = workout;
            $location.path('/view-workout');
        };

        $scope.showPublic = function (workout){
            return(workout.public == false);
        };

        $scope.makeActive = function(index){
            currentWorkout = $scope.loggedUserWorkouts[index];
            WorkoutService.updateAllUserWorkoutInactive($rootScope.loggedUser.username).then(
                function(response){
                    WorkoutService.updateWorkoutActive(currentWorkout._id).then(
                        function(response){
                            WorkoutService.findAllWorkoutForUser($rootScope.loggedUser.username).then(
                                function(response){
                                    $scope.loggedUserWorkouts = response.data;
                                });
                        });
                });
        };

        $scope.showActive = function (workout){
            return(workout.active == false);
        };


        // delete workout which user selects
        $scope.deleteWorkout = function(index){
            currentWorkout = $scope.loggedUserWorkouts[index];
            WorkoutService.deleteWorkoutById(currentWorkout._id).then(
                function(response){
                    //console.log(response);
                    WorkoutService.findAllWorkoutForUser($rootScope.loggedUser.username).then(
                        function(response){
                            $scope.loggedUserWorkouts = response.data;
                        });
                });
        };

        $scope.showSubscribedWorkouts = function(){
            $scope.subscribeFlag = false;
            UserService.findUserByUsername($rootScope.loggedUser.username).then(
                function (response){
                    $scope.subscribedList = response.data.subscribeTo;
                    for(var i = 0; i < $scope.subscribedList.length; i++){
                        WorkoutService.findAllWorkoutForUser($scope.subscribedList[i]).then(
                            function(response){
                                for(var i = 0; i < response.data.length; i++){
                                    $scope.subscribedWorkouts.push(response.data[i]);
                                }
                            });
                    }
                });
        };

    }

})();
