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
        $scope.imageObjects = [];
        $scope.exerciseImageURL = [];

        WgerApiService.cacheImageData(
            function(response){
                //console.log(response);
                for(var i = 0; i < response.results.length; i++){
                    $scope.imageObjects.push(response.results[i]);
                }

                //$scope.imageObjects.push(response.results);
                //console.log($scope.imageObjects);
                //for(var j = 0; j < $scope.imageObjects.length; j++){
                //    console.log($scope.imageObjects[j].image);
                //}

            });





        function search (term){
            WgerApiService.searchExercise(term,
                function(response){
                    $scope.searchResults = response;
                });
        }

        function details (exerciseId){
            $scope.exerciseImageURL = [];
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
                            //console.log(requiredEquipments);
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
                            //console.log(primaryMuscles);

                            for(var j=0;j<exerciseDetails.muscles_secondary.length;j++){
                                for(var i=0;i<muscles.results.length;i++){
                                    if(exerciseDetails.muscles_secondary[j] == muscles.results[i].id){
                                        secondaryMuscles.push(muscles.results[j].name);
                                    }
                                }
                            }
                            $scope.displaySecondaryMuscles = secondaryMuscles;
                            //console.log(secondaryMuscles);
                        });

                    var description = $scope.exerciseDetails.description;
                    description = description.replace(/<\/p>/gm, "");
                    description = description.replace(/<p>/gm,"");
                    $scope.exerciseDetails.description = description;

                    for(var i =0; i < $scope.imageObjects.length; i++){
                        if($scope.exerciseDetails.id == $scope.imageObjects[i].exercise){
                            $scope.exerciseImageURL.push($scope.imageObjects[i].image);
                        }
                    }
                    console.log($scope.exerciseImageURL);
                });
        }
    }
})();
