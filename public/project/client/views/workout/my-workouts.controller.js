/**
 * Created by Naveen on 3/10/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("MyWorkoutController", MyWorkoutController);

    function MyWorkoutController($scope,$rootScope, $location,WorkoutService) {


        // display all the workout for the logged user.
        if($rootScope.loggedUser){
            //console.log($rootScope.loggedUser.username);
            WorkoutService.findAllWorkoutForUser($rootScope.loggedUser.username).then(
                function(response){
                    //console.log(response.data);
                    $scope.loggedUserWorkouts = response.data;
                });
        }

        $scope.selectedWorkoutIndex = null;
        var currentWorkout = {};

        //// make workout public.
        $scope.makeWorkoutPublic = function(index){
            currentWorkout = $scope.loggedUserWorkouts[index];
            WorkoutService.makeWorkoutPublicById(currentWorkout._id).then(
                function(response){
                    console.log("updated Workout with public flag");
                    console.log(response.data);
                    WorkoutService.findAllWorkoutForUser($rootScope.loggedUser.username).then(
                        function(response){
                            console.log(response.data);
                            $scope.loggedUserWorkouts = response.data;
                        });
                    //$scope.loggedUserWorkouts = response.data;
                });
        };

        $scope.viewWorkout = function(workout){
            //console.log("Here");
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
                    console.log(response);
                    WorkoutService.updateWorkoutActive(currentWorkout._id).then(
                        function(response){
                            console.log(response.data);

                        });
                });


            //WorkoutService.updateActiveWorkoutById($rootScope.loggedUser._id,currentWorkout._id).then(
            //    function(response){
            //        $scope.loggedUserWorkouts = response.data;
            //    });
        };

        //$scope.showActive = function (workout){
        //    var count = 0;
        //    console.log($rootScope.loggedUser._id);
        //    for(var i = 0;i<workout.userDetails.length;i++) {
        //        if(workout.userDetails[i].userId == $rootScope.loggedUser._id){
        //            if (workout.userDetails[i].active === 1) {
        //                count++;
        //            }
        //        }
        //    }
        //    return !(count>=1);
        //};


        //$scope.selectedWorkoutIndex = null;
        //var currentWorkout = {};
        //
        //// delete workout which user selects
        //$scope.deleteWorkout = function(index){
        //    currentWorkout = $scope.loggedUserWorkouts[index];
        //    WorkoutService.deleteWorkoutById($rootScope.loggedUser._id, currentWorkout._id).then(
        //        function(response){
        //            WorkoutService.findAllWorkoutForUser($rootScope.loggedUser._id).then(
        //                function(response){
        //                    $scope.loggedUserWorkouts = response.data;
        //                });
        //        });
        //};
        //
        //$scope.makeActive = function(index){
        //    currentWorkout = $scope.loggedUserWorkouts[index];
        //    WorkoutService.updateActiveWorkoutById($rootScope.loggedUser._id,currentWorkout._id).then(
        //        function(response){
        //            $scope.loggedUserWorkouts = response.data;
        //        });
        //};
        //
        //$scope.showActive = function (workout){
        //    var count = 0;
        //    console.log($rootScope.loggedUser._id);
        //    for(var i = 0;i<workout.userDetails.length;i++) {
        //        if(workout.userDetails[i].userId == $rootScope.loggedUser._id){
        //            if (workout.userDetails[i].active === 1) {
        //                count++;
        //            }
        //        }
        //    }
        //    return !(count>=1);
        //};
        //
        ////// make workout public.
        //$scope.makeWorkoutPublic = function(index){
        //    currentWorkout = $scope.loggedUserWorkouts[index];
        //    WorkoutService.makeWorkoutPublicById($rootScope.loggedUser._id,currentWorkout._id).then(
        //        function(response){
        //            $scope.loggedUserWorkouts = response.data;
        //        });
        //};
        //
        //$scope.showPublic = function (workout){
        //    return(workout.public == 0);
        //};
        //


    }

})();
