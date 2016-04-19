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
            findAllWorkouts: findAllWorkouts,
            createWorkout: createWorkout,
            deleteWorkoutById: deleteWorkoutById,
            //updateWorkoutById: updateWorkoutById,
            findAllPublicWorkouts: findAllPublicWorkouts,
            updateAllUserWorkoutInactive: updateAllUserWorkoutInactive,
            updateWorkoutActive: updateWorkoutActive,
            makeWorkoutPublicById: makeWorkoutPublicById,
            findActiveWorkout: findActiveWorkout


    };

        return service;

        function createWorkout (newWorkout){
            var url = "/api/project/workout";
            //console.log(newWorkout);
            return $http.post(url,newWorkout);
        }


        function findAllWorkoutForUser(username){
            //console.log(username);
            var url = "/api/project/user/"+username+"/workout";
            return $http.get(url);
        }

        function makeWorkoutPublicById(workoutId){
            var url = "/api/project/makePublicWorkout/"+workoutId;
            return $http.put(url);
        }

        function findAllPublicWorkouts (publicId){
            var url = "/api/project/getPublic/"+publicId;
            return $http.get(url);
        }

        function updateAllUserWorkoutInactive (username){
            var url = "/api/project/inactiveall/"+username;
            return $http.put(url);
        }

        function updateWorkoutActive (workoutId){
            var url = "/api/project/makeactive/"+workoutId;
            return $http.put(url);
        }

        function findActiveWorkout (username){
            var url = "/api/project/findactive/"+username;
            return $http.get(url);
        }

        function deleteWorkoutById(workoutId){
            var url = "/api/project/workout/"+workoutId;
            return $http.delete(url);
        }

        function findAllWorkouts (){
            var url = "/api/project/allworkouts";
            return $http.get(url);
        }


        //function updateRep(workoutId,weekNumber,achievedRep,index){
        //    var url = "/api/project/updateRep/"+workoutId+"/weekNum/"+weekNumber+"/achrep/"+achievedRep+"/position/"+index;
        //    return $http.put(url);
        //}



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