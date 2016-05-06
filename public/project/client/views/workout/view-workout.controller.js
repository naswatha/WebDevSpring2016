/**
 * Created by Naveen on 3/11/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("ViewWorkoutController", ViewWorkoutController);

    function ViewWorkoutController($scope,$rootScope, $location,UserService,WgerApiService) {

        UserService
            .getCurrentUser()
            .then(function (res) {
                $rootScope.loggedUser = res.data;
                $scope.user = $rootScope.loggedUser;
            });
        $scope.displayWorkout = $rootScope.displayWorkout;
        $scope.currentDate = (new Date).getTime();

        $scope.imageObjects = [];
        $scope.exerciseImageURL = [];


        // display selected exercise details.
        $scope.showExerciseDetails = function(exercise){
            var exerciseId = exercise.id;
            //console.log(exercise.id);
            //console.log(exerciseId);

            $scope.exerciseImageURL = [];
            WgerApiService.findExerciseByID ( exerciseId,
                function (exerciseDetails){
                    //console.log(exerciseDetails);
                    $scope.exerciseDetails = exerciseDetails;
                    WgerApiService.getAllEquipments(
                        function (equipments){
                            var requiredEquipments = [];
                            for(var j=0;j<exerciseDetails.equipment.length;j++){
                                for(var i=0;i<equipments.results.length;i++){
                                    if(exerciseDetails.equipment[j] == equipments.results[i].id){
                                        requiredEquipments.push(equipments.results[j].name);
                                    }
                                }
                            }
                            $scope.displayEquipments = requiredEquipments;
                        });


                    WgerApiService.getAllMuscles(
                        function (muscles){
                            var primaryMuscles =[];
                            var secondaryMuscles =[];

                            for(var l=0;l<exerciseDetails.muscles.length;l++){
                                for(var m=0;m<muscles.results.length;m++){
                                    if(exerciseDetails.muscles[l] == muscles.results[m].id){
                                        primaryMuscles.push(muscles.results[l].name);
                                    }
                                }
                            }
                            $scope.displayMuscles = primaryMuscles;

                            for(var j=0;j<exerciseDetails.muscles_secondary.length;j++){
                                for(var i=0;i<muscles.results.length;i++){
                                    if(exerciseDetails.muscles_secondary[j] == muscles.results[i].id){
                                        secondaryMuscles.push(muscles.results[j].name);
                                    }
                                }
                            }
                            $scope.displaySecondaryMuscles = secondaryMuscles;
                        });

                    var description = $scope.exerciseDetails.description;
                    description = description.replace(/<\/p>/gm, "");
                    description = description.replace(/<p>/gm,"");
                    $scope.exerciseDetails.description = description;
                    console.log($scope.imageObjects);

                    for(var i =0; i < $scope.imageObjects.length; i++){
                        if($scope.exerciseDetails.id == $scope.imageObjects[i].exercise){
                            $scope.exerciseImageURL.push($scope.imageObjects[i].image);
                        }
                    }
                });

        };

    }

})();