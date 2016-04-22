/**
 * Created by Naveen on 4/18/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("ActiveWorkoutController", ActiveWorkoutController);

    function ActiveWorkoutController($scope,$rootScope, $location,WorkoutService,UserService) {


        $scope.activeWorkout = {};
        $scope.currentDayWorkout = [];
        $scope.currentDayWorkoutFull = {};
        $scope.currentWeekNumber = 0;
        $scope.dayCompletedFlag = true;
        $scope.day = null;
        $scope.setActiveWorkoutFlag = false;
        $scope.workoutCompleteFlag = false;
        $scope.loginFlag = false;


        UserService
            .getCurrentUser("ActiveWorkoutController")
            .then(function (res) {
                $rootScope.loggedUser = res.data;
                $scope.user = $rootScope.loggedUser;

                if($rootScope.loggedUser == null || !$rootScope.loggedUser){
                    $scope.loginFlag = true;
                    $scope.setActiveWorkoutFlag = true;
                    return;
                }

        WorkoutService.findActiveWorkout($rootScope.loggedUser.username).then(
            function(response){

                $scope.activeWorkout = response.data;
                if(response.data == null){
                    $scope.setActiveWorkoutFlag = true;
                    return;
                }

                if($scope.activeWorkout.weeks[$scope.activeWorkout.weeks.length-1].Saturday.dayCompleted == true){
                        $scope.workoutCompleteFlag = true;
                }


                for(var i = 0; i < $scope.activeWorkout.weeks.length; i++){
                    $scope.currentWeekNumber = i+1;

                    if($scope.activeWorkout.weeks[i].Sunday.dayCompleted == false){
                        $scope.currentDayWorkoutFull = $scope.activeWorkout.weeks[i].Sunday;
                        $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Sunday.sunExerDet;
                        $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Sunday.dayCompleted;
                        $scope.day = "Sunday";
                        break;
                    }
                    if($scope.activeWorkout.weeks[i].Monday.dayCompleted == false){
                        $scope.currentDayWorkoutFull = $scope.activeWorkout.weeks[i].Monday;
                        $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Monday.monExerDet;
                        $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Monday.dayCompleted;
                        $scope.day = "Monday";
                        break;
                    }
                    if($scope.activeWorkout.weeks[i].Tuesday.dayCompleted == false){
                        $scope.currentDayWorkoutFull = $scope.activeWorkout.weeks[i].Tuesday;
                        $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Tuesday.tueExerDet;
                        $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Tuesday.dayCompleted;
                        $scope.day = "Tuesday";
                        break;
                    }
                    if($scope.activeWorkout.weeks[i].Wednesday.dayCompleted == false){
                        $scope.currentDayWorkoutFull = $scope.activeWorkout.weeks[i].Wednesday;
                        $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Wednesday.wedExerDet;
                        $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Wednesday.dayCompleted;
                        $scope.day = "Wednesday";
                        break;
                    }
                    if($scope.activeWorkout.weeks[i].Thursday.dayCompleted == false){
                        $scope.currentDayWorkoutFull = $scope.activeWorkout.weeks[i].Thursday;
                        $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Thursday.thurExerDet;
                        $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Thursday.dayCompleted;
                        $scope.day = "Thursday";
                        break;
                    }
                    if($scope.activeWorkout.weeks[i].Friday.dayCompleted == false){
                        $scope.currentDayWorkoutFull = $scope.activeWorkout.weeks[i].Friday;
                        $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Friday.friExerDet;
                        $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Friday.dayCompleted;
                        $scope.day = "Friday";
                        break;
                    }
                    if($scope.activeWorkout.weeks[i].Saturday.dayCompleted == false){
                        $scope.currentDayWorkoutFull = $scope.activeWorkout.weeks[i].Saturday;
                        $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Saturday.satExerDet;
                        $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Saturday.dayCompleted;
                        $scope.day = "Saturday";
                        break;
                    }
                }

            });

            });


        $scope.currentWorkoutComplete = function(){

            $scope.currentDayWorkoutFull.dayCompleted = true;
            WorkoutService.completeTodayWorkout($scope.activeWorkout._id,$scope.currentWeekNumber-1,$scope.day,$scope.currentDayWorkoutFull).then(
                function(response){

                    if($scope.activeWorkout.weeks[$scope.activeWorkout.weeks.length-1].Saturday.dayCompleted == true){
                        $scope.workoutCompleteFlag = true;
                    }

                    WorkoutService.findActiveWorkout($rootScope.loggedUser.username).then(
                        function(response){

                            $scope.activeWorkout = response.data;
                            for(var i = 0; i < $scope.activeWorkout.weeks.length; i++){
                                $scope.currentWeekNumber = i+1;

                                if($scope.activeWorkout.weeks[i].Sunday.dayCompleted == false){
                                    $scope.currentDayWorkoutFull = $scope.activeWorkout.weeks[i].Sunday;
                                    $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Sunday.sunExerDet;
                                    $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Sunday.dayCompleted;
                                    $scope.day = "Sunday";
                                    break;
                                }
                                if($scope.activeWorkout.weeks[i].Monday.dayCompleted == false){
                                    $scope.currentDayWorkoutFull = $scope.activeWorkout.weeks[i].Monday;
                                    $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Monday.monExerDet;
                                    $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Monday.dayCompleted;
                                    $scope.day = "Monday";
                                    break;
                                }
                                if($scope.activeWorkout.weeks[i].Tuesday.dayCompleted == false){
                                    $scope.currentDayWorkoutFull = $scope.activeWorkout.weeks[i].Tuesday;
                                    $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Tuesday.tueExerDet;
                                    $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Tuesday.dayCompleted;
                                    $scope.day = "Tuesday";
                                    break;
                                }
                                if($scope.activeWorkout.weeks[i].Wednesday.dayCompleted == false){
                                    $scope.currentDayWorkoutFull = $scope.activeWorkout.weeks[i].Wednesday;
                                    $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Wednesday.wedExerDet;
                                    $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Wednesday.dayCompleted;
                                    $scope.day = "Wednesday";
                                    break;
                                }
                                if($scope.activeWorkout.weeks[i].Thursday.dayCompleted == false){
                                    $scope.currentDayWorkoutFull = $scope.activeWorkout.weeks[i].Thursday;
                                    $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Thursday.thurExerDet;
                                    $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Thursday.dayCompleted;
                                    $scope.day = "Thursday";
                                    break;
                                }
                                if($scope.activeWorkout.weeks[i].Friday.dayCompleted == false){
                                    $scope.currentDayWorkoutFull = $scope.activeWorkout.weeks[i].Friday;
                                    $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Friday.friExerDet;
                                    $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Friday.dayCompleted;
                                    $scope.day = "Friday";
                                    break;
                                }
                                if($scope.activeWorkout.weeks[i].Saturday.dayCompleted == false){
                                    $scope.currentDayWorkoutFull = $scope.activeWorkout.weeks[i].Saturday;
                                    $scope.currentDayWorkout = $scope.activeWorkout.weeks[i].Saturday.satExerDet;
                                    $scope.dayCompletedFlag = $scope.activeWorkout.weeks[i].Saturday.dayCompleted;
                                    $scope.day = "Saturday";
                                    break;
                                }
                            }

                        });
                });
        };
    }

})();