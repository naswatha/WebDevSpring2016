/**
 * Created by Naveen on 4/18/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("ActiveWorkoutController", ActiveWorkoutController);

    function ActiveWorkoutController($scope,$rootScope, $location,WorkoutService) {

        //console.log($rootScope.loggedUser.username);

        $scope.activeWorkout = {};
        $scope.currentDayWorkout = [];
        $scope.currentDayWorkoutFull = {};
        $scope.currentWeekNumber = 0;
        $scope.dayCompletedFlag = true;


        WorkoutService.findActiveWorkout($rootScope.loggedUser.username).then(
            function(response){

                $scope.activeWorkout = response.data;
                for(var i = 0; i < $scope.activeWorkout.weeks.length; i++){
                    $scope.currentWeekNumber = i+1;
                    if($scope.activeWorkout.weeks[i].Sunday.dayCompleted == false){
                        $scope.currentDayWorkoutFull = $scope.activeWorkout.weeks[i].Sunday;
                        $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Sunday.sunExerDet;
                        $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Sunday.dayCompleted;
                        break;
                    }
                    if($scope.activeWorkout.weeks[i].Monday.dayCompleted == false){
                        $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Monday;
                        $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Monday.dayCompleted;
                        break;
                    }
                    if($scope.activeWorkout.weeks[i].Tuesday.dayCompleted == false){
                        $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Tuesday;
                        $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Tuesday.dayCompleted;
                        break;
                    }
                    if($scope.activeWorkout.weeks[i].Wednesday.dayCompleted == false){
                        $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Wednesday;
                        $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Wednesday.dayCompleted;
                        break;
                    }
                    if($scope.activeWorkout.weeks[i].Thursday.dayCompleted == false){
                        $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Thursday;
                        $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Thursday.dayCompleted;
                        break;
                    }
                    if($scope.activeWorkout.weeks[i].Friday.dayCompleted == false){
                        $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Friday;
                        $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Friday.dayCompleted;
                        break;
                    }
                    if($scope.activeWorkout.weeks[i].Saturday.dayCompleted == false){
                        $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Saturday;
                        $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Saturday.dayCompleted;
                        break;
                    }
                }

            });


        $scope.currentWorkoutComplete = function(){

            console.log($scope.currentWeekNumber);
            console.log($scope.activeWorkout._id);
            console.log($scope.currentDayWorkoutFull);
            console.log($scope.currentDayWorkoutFull);

            WorkoutService.completeTodayWorkout($scope.activeWorkout._id,$scope.currentWeekNumber,achievedRep,index).then(
                function(response){
                    console.log(response.data);
                    $scope.activeWorkout = response.data;
                });
        };




    }

})();