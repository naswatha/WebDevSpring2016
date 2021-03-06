/**
 * Created by Naveen on 3/10/2016.
 */
(function(){
    angular
        .module("WorkoutBuilderApp")
        .factory("WgerApiService", WgerApiService);

    function WgerApiService($http,$rootScope){

        var api = {
            searchExercise: searchExercise,
            findExerciseByID: findExerciseByID,
            getAllEquipments: getAllEquipments,
            getAllMuscles: getAllMuscles,
            getWeek: getWeek,
            getExerciseCategory: getExerciseCategory
        };

        var baseUrl = "http://wger.de/api/v2";
        return api;

        function searchExercise(term, callback) {
            var exerciseSearchURL = baseUrl + '/exercise/search/?term=' + term;
            $http.get(exerciseSearchURL)
                .success(callback);
        }

        function findExerciseByID(id, callback) {

            $http.get(baseUrl + '/exercise/' + id )
                .success(callback);

        }

        function getAllEquipments(callback) {

            $http.get(baseUrl + '/equipment/')
                .success(callback);
        }

        function getAllMuscles(callback) {

            $http.get(baseUrl + '/muscle/')
                .success(callback);
        }

        function getWeek(callback){

            $http.get(baseUrl + '/daysofweek/' + id)
                .success(callback);
        }

        function getExerciseCategory(callback){

            $http.get(baseUrl + '/exercisecategory/' + id)
                .success(callback);
        }
    }
})();