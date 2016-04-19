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
            getExerciseCategory: getExerciseCategory,
            //cacheExercises: cacheExercises,
            cacheImageData: cacheImageData
        };

        var baseUrl = "http://wger.de/api/v2";
        return api;


        function cacheImageData(callback){

                //var exerciseCacheUrl = baseUrl +'/exerciseimage/?page='+1;
                //$http.get(exerciseCacheUrl)
                //    .success(callback);

            for(var i = 1; i <= 11; i++){
                var exerciseCacheUrl = baseUrl +'/exerciseimage/?page='+i;
                $http.get(exerciseCacheUrl)
                    .success(callback);
            }
        }


        //function cacheExercises(callback){
        //
        //    var exerciseCacheUrl = baseUrl +'/exercise/?language=2&page=1&status=2';
        //    $http.get(exerciseCacheUrl)
        //        .success(callback);
        //
        //    //for(var i = 1; i <= 9; i++){
        //    //    var exerciseCacheUrl = baseUrl +'/exercise/?language=2&page='+i+'&status=2';
        //    //    $http.get(exerciseCacheUrl)
        //    //        .success(callback);
        //    //}
        //}

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