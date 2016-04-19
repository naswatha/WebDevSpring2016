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
        //$scope.loggedUserWorkouts = [];
        //$scope.loggedUserId = $rootScope.loggedUser._id;

        WorkoutService.findAllPublicWorkouts(1).then(
            function(response){
                //console.log("public workouts");
                //console.log(response.data);
                $scope.publicWorkouts = response.data;
            });

        $scope.subscribe = function(subscribeTo) {

            //console.log("Before Subscribe");
            UserService.addToSubscribeList(subscribeTo,$scope.loggedUser.username).then(
                function(response){
                    //console.log("After subscribe");
                    $rootScope.loggedUser = response.data;
                    //console.log($rootScope.loggedUser);
                    $scope.successMessage = "You have subscribed to "+subscribeTo;
                });

        };





        //$scope.selectedWorkoutIndex = null;
        //var currentWorkout = {};

        // add public workout to logged user workout
        //$scope.addWorkout = function(index){
        //    currentWorkout = $scope.publicWorkouts[index];
        //    WorkoutService.addWorkoutToMyList($rootScope.loggedUser._id,currentWorkout._id).then(
        //        function(response){
        //            $scope.publicWorkouts = response.data;
        //        });
        //};

        //$scope.show = function (workout){
        //    var count = 0;
        //    for(var i = 0;i<workout.userDetails.length;i++) {
        //        if(workout.userDetails[i].userId == $rootScope.loggedUser._id){
        //            if (workout.public == 1) {
        //                count++;
        //            }
        //        }
        //    }
        //    return !(count>=1);
        //};

        $scope.viewWorkout = function(workout){
            $rootScope.displayWorkout = workout;
            $location.path('/view-workout');
        };

    }
})();