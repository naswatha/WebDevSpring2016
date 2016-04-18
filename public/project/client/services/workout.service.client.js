/**
 * Created by Naveen on 3/10/2016.
 */
(function(){
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .factory("WorkoutService",WorkoutService);

    function WorkoutService($http,$rootScope){

        var service = {

            findAllWorkoutForUser: findAllWorkoutForUser,
            createWorkout: createWorkout
            //deleteWorkoutById: deleteWorkoutById,
            //updateWorkoutById: updateWorkoutById,
            //findAllPublicWorkouts: findAllPublicWorkouts,
            //updateActiveWorkoutById: updateActiveWorkoutById,
            //makeWorkoutPublicById: makeWorkoutPublicById,
            //addWorkoutToMyList: addWorkoutToMyList

    };

        return service;

        function createWorkout (newWorkout){
            var url = "/api/project/workout";
            //console.log(newWorkout);
            return $http.post(url,newWorkout);
        }


        function findAllWorkoutForUser(username){
            console.log(username);
            var url = "/api/project/user/"+username+"/workout";
            return $http.get(url);
        }

        //function deleteWorkoutById(userId,workoutId){
        //    var url = "/api/project/user/"+userId+"/workout/"+workoutId;
        //    return $http.delete(url);
        //}
        //
        //function updateActiveWorkoutById(userId,workoutId){
        //    var url = "/api/project/user/"+userId+"/workout/"+workoutId;
        //    return $http.put(url);
        //}
        //
        //function makeWorkoutPublicById(userId,workoutId){
        //    var url = "/api/project/user/"+userId+"/makePublicWorkout/"+workoutId;
        //    return $http.put(url);
        //}
        //
        //function findAllPublicWorkouts (publicId){
        //    var url = "/api/project/getPublic/"+publicId;
        //    return $http.get(url);
        //}
        //
        //function addWorkoutToMyList(userId,workoutId){
        //    var url = "/api/project/addList/user/"+userId+"/workout/"+workoutId;
        //    return $http.put(url);
        //}
        //
        //function updateWorkoutById(userId,workoutId){
        //    var url = "/api/project/updateWorkout/user/"+userId+"/workout/"+workoutId;
        //    return $http.put(url);
        //}
    }
})();