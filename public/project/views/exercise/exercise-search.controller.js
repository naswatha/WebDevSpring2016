/**
 * Created by Naveen on 3/3/2016.
 */
(function(){
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("ExerciseSearchController", ExerciseSearchController);


    function ExerciseSearchController($http, $scope, $rootScope) {
        $scope.search = function (term) {
            $http.get('http://wger.de/api/v2/exercise/search/?term='+term).success(function(data){
                if(data.length > 0){
                    $scope.searchResults = data;
                    $scope.exerciseDetails = null;
                }
                console.log(data);
            });
        };



        $scope.details = function (exercise) {

            $http.get('http://wger.de/api/v2/exercise/'+exercise.id).success(function(exerciseDetails){
                $scope.exerciseDetails = exerciseDetails;
                console.log(exerciseDetails);

                $http.get('http://wger.de/api/v2/muscle/').success(function(muscles){
                    var primaryMuslces =[];
                    var secondaryMuscles =[];

                    for(var j=0;j<exerciseDetails.muscles.length;j++){
                        for(var i=0;i<muscles.results.length;i++){
                            if(exerciseDetails.muscles[j] == muscles.results[i].id){
                                primaryMuslces.push(muscles.results[j].name);
                            }
                        }
                    }
                    $scope.displayMuscles = primaryMuslces;
                    console.log(primaryMuslces);

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

                $http.get('http://wger.de/api/v2/equipment/').success(function(equipments){
                    var requiredEquipments =[];
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
            });
        }
    }
})();