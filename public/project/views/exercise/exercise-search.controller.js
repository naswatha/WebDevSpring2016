/**
 * Created by Naveen on 3/3/2016.
 */
(function(){
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("ExerciseSearchController", ExerciseSearchController);


    function ExerciseSearchController ($scope,WgerApiService) {

        $scope.search = search;
        $scope.details = details;

        function search (term){
            WgerApiService.searchExercise(term,
                function(response){
                    $scope.searchResults = response;


                });
        }

        function details (exerciseId){
            WgerApiService.findExerciseByID ( exerciseId,
                function (exerciseDetails){
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
                            console.log(requiredEquipments);
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
                            console.log(primaryMuscles);

                            for(var j=0;j<exerciseDetails.muscles_secondary.length;j++){
                                for(var i=0;i<muscles.results.length;i++){
                                    if(exerciseDetails.muscles_secondary[j] == muscles.results[i].id){
                                        secondaryMuscles.push(muscles.results[j].name);
                                    }
                                }
                            }
                            $scope.displaySecondaryMuscles = secondaryMuscles;
                            console.log(secondaryMuscles);
                        });
                });
        }
    }
})();
