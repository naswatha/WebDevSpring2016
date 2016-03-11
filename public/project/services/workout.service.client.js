/**
 * Created by Naveen on 3/10/2016.
 */
(function(){
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .factory("WorkoutService",WorkoutService);

    function WorkoutService($rootScope){
        var Workouts = [];
        Workouts = [
                    {
                        "_id":"111",
                        "name":"2 Week Beginner Workout",
                        "description":"2 Week Beginner Workout",
                        "startDate":"2016-03-12T18:25:43.511Z",
                        "weeks":2,
                        "public": 0,
                        "userDetails":
                            [{
                                "userId": 234,
                                "active": 1
                            }]
                    },
                    {
                        "_id":"222",
                        "name":"Beginner Compound Workout",
                        "description":"Beginner Compound Workout",
                        "startDate":"2016-03-12T18:25:43.511Z",
                        "weeks": 1,
                        "public": 0,
                        "userDetails":
                            [{
                                "userId": 234,
                                "active": 0
                            }]
                    },
                    {
                        "_id":"333",
                        "name":"2 Weeks Six Pack Abs",
                        "description":"2 Weeks Six Pack Abs",
                        "startDate":"2016-03-12T18:25:43.511Z",
                        "weeks": 2,
                        "public": 1,
                        "userDetails":
                                [{
                                    "userId": 234,
                                    "active": 0
                                },
                                {
                                    "userId": 123,
                                    "active": 0
                                }]

                    },
                    {
                        "_id":"444",
                        "name":"3 Week Beginner Strength Workout",
                        "description":"3 Week Beginner Strength Workout",
                        "startDate":"2016-03-12T18:25:43.511Z",
                        "weeks": 3,
                        "public": 0,
                        "userDetails":
                            [{
                                "userId": 123,
                                "active": 1
                            }]
                    }
                ];

        var service = {
            createWorkout: createWorkout,
            findAllWorkoutForUser: findAllWorkoutForUser,
            deleteWorkoutById: deleteWorkoutById,
            updateWorkoutById: updateWorkoutById,
            findAllPublicWorkouts: findAllPublicWorkouts,
            updateActiveWorkoutById: updateActiveWorkoutById,
            makeWorkoutPublicById: makeWorkoutPublicById,
            addWorkoutToMyList: addWorkoutToMyList

    };

        return service;

        function createWorkout (userId,workout,callback){
            workout._id = (new Date).getTime();
            workout.userId = userId;
            Workouts.push(workout);
            callback(workout);
        }

        function findAllPublicWorkouts (callback){
            var publicWorkouts = [];
            for(var i=0;i<Workouts.length;i++) {
                if(Workouts[i].public === 1){
                    publicWorkouts.push(Workouts[i]);
                }
            }
            callback(publicWorkouts);
        }

        function addWorkoutToMyList (workoutId,userId,publicWorkoutsList,callback){
            //var publicWorkouts = [];
            for(var i=0;i<publicWorkoutsList.length;i++) {
                if(publicWorkoutsList[i].public === 1 && workoutId === publicWorkoutsList[i]._id){
                    //console.log(userId);
                    publicWorkoutsList[i].userId.push(userId);
                    //console.log(Workouts[i]);
                }
            }
            callback(publicWorkoutsList);
        }

        function findAllWorkoutForUser (userId,callback){
            var userWorkouts = [];
            for(var i=0;i<Workouts.length;i++) {
                for(var j=0;j<Workouts[i].userId.length;j++){
                    if(Workouts[i].userId[j] == userId){
                        userWorkouts.push(Workouts[i]);
                    }
                }
            }
            callback(userWorkouts);
        }

        function deleteWorkoutById(workoutId,userId,callback){
            for(var i=0;i<Workouts.length;i++) {
                if(Workouts[i]._id == workoutId) {
                    if(Workouts[i].userId.length > 1){
                        for(var j = 0;Workouts[i].userId[j].length;j++){
                            Workouts[i].userId.splice(j,1);
                        }
                    }
                    else{
                        Workouts.splice(i, 1);
                    }
                }
            }
            callback(Workouts);
        }

        function updateActiveWorkoutById(workoutId,loggedUserWorkouts, callback){
            for(var i=0;i<loggedUserWorkouts.length;i++) {
                if(loggedUserWorkouts[i]._id == workoutId) {
                    loggedUserWorkouts[i].active = 1;
                }
                else{
                    loggedUserWorkouts[i].active = 0;
                }
            }
            callback(loggedUserWorkouts);
        }

        function makeWorkoutPublicById(workoutId,loggedUserWorkouts, callback){
            for(var i=0;i<loggedUserWorkouts.length;i++) {
                if(loggedUserWorkouts[i]._id == workoutId) {
                    loggedUserWorkouts[i].public = 1;
                }
            }
            callback(loggedUserWorkouts);
        }


        function updateWorkoutById(workoutId, newWorkout,callback){
            var temp = null;
            for (var i = 0; i < Workouts.length; i++) {
                if (Workouts[i]._id == workoutId) {
                    Workouts[i] = newWorkout;
                    temp =  Workouts[i];
                }
            }
            callback(temp);
        }
    }
})();