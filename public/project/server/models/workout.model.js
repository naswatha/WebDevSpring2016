/**
 * Created by Naveen on 3/24/2016.
 */
"use strict";
var q = require("q");
module.exports = function(mongoose, webDevDb){


    var WorkoutSchema = require("./workout.schema.server.js")(mongoose);
    var WorkoutModel = mongoose.model('Workout',WorkoutSchema);

    var api = {

        create: create,
        remove: remove,
        getAllWorkouts: getAllWorkouts,
        getWorkoutByUsername: getWorkoutByUsername,
        getAllPublicWorkout: getAllPublicWorkout,
        makeUserWorkoutsFalse: makeUserWorkoutsFalse,
        makeUserWorkoutTrue: makeUserWorkoutTrue,
        makePublic: makePublic,
        getActiveWorkout: getActiveWorkout,
        updateExerRep: updateExerRep,
        updateCurrentDay: updateCurrentDay


    };

    return api;

    function create(workout) {
        var deferred = q.defer();
        WorkoutModel.create(workout,
            function (err, document) {
                if (err) {
                    deferred.reject(err)
                } else {
                    deferred.resolve(document);
                }
            });

        return deferred.promise;
    }

    function getAllWorkouts(){
        var deferred = q.defer();
        WorkoutModel.find(
            function(err, workouts){
                if (err) {
                    deferred.reject(err)
                } else {
                    deferred.resolve(workouts);
                }
            });
        return deferred.promise;
    }

    function getWorkoutByUsername(username){
        console.log(username);
        var deferred = q.defer();
        WorkoutModel.find({"username": username},
            function(err, workouts){
                if (err) {
                    deferred.reject(err)
                } else {
                    deferred.resolve(workouts);
                }
            });
        return deferred.promise;
    }

    function makePublic(workoutId){
        var deferred = q.defer();
        WorkoutModel.findById(workoutId,
            function(err, workout){
                if (err) {
                    deferred.reject(err);
                }
                else
                {
                    workout.public = true;
                    workout.save(function (err, updatedWorkout){
                        if(err){
                            deferred.reject(err);
                        }
                        else
                        {
                            deferred.resolve(updatedWorkout);
                        }
                    });
                }
            });
        return deferred.promise;
    }

    function getAllPublicWorkout(publicId){
        var deferred = q.defer();
        WorkoutModel.find({"public": true},
            function(err, workouts){
                if (err) {
                    deferred.reject(err)
                } else {
                    deferred.resolve(workouts);
                }
            });
        return deferred.promise;
    }

    function makeUserWorkoutsFalse(username){
        var deferred = q.defer();
        WorkoutModel.update({"username": username }, {"active": false}, {multi: true},
            function(err, workouts){
                if (err) {
                    deferred.reject(err);
                }
                else
                {
                    deferred.resolve(workouts);
                }
            });
        return deferred.promise;
    }

    function makeUserWorkoutTrue(workoutId){
        var deferred = q.defer();
        WorkoutModel.findById(workoutId,
            function(err, workout){
                if (err) {
                    deferred.reject(err);
                }
                else
                {
                    workout.active = true;
                    workout.save(function (err, updatedWorkout){
                        if(err){
                            deferred.reject(err);
                        }
                        else
                        {
                            deferred.resolve(updatedWorkout);
                        }
                    });
                }
            });
        return deferred.promise;
    }


    function getActiveWorkout(username){
        var deferred = q.defer();
        WorkoutModel.findOne({"username": username, "active": true},
            function(err, workout){
                if (err) {
                    deferred.reject(err)
                } else {
                    deferred.resolve(workout);
                }
            });
        return deferred.promise;
    }


    function updateExerRep(workoutId,weekNumber,achievedRep,index){
        var deferred = q.defer();
        WorkoutModel.findById(workoutId,
            function(err, workout){
                if (err) {
                    deferred.reject(err);
                }
                else
                {
                    workout.public = true;
                    workout.save(function (err, updatedWorkout){
                        if(err){
                            deferred.reject(err);
                        }
                        else
                        {
                            deferred.resolve(updatedWorkout);
                        }
                    });
                }
            });
        return deferred.promise;
    }

    function remove(workoutId){
        var deferred = q.defer();
        WorkoutModel.remove({_id: workoutId},
            function(err, workout){
                if (err) {
                    deferred.reject(err)
                } else {
                    deferred.resolve(workout);
                }
            });

        return deferred.promise;
    }

    function updateCurrentDay(workoutId,weekNumber,day,fullDayWorkout){
        var deferred = q.defer();
        WorkoutModel.findById(workoutId,
            function(err, workout){
                if (err) {
                    deferred.reject(err);
                }
                else
                {
                    if(day == "Sunday"){
                        workout.weeks[weekNumber].Sunday.dayCompleted = true;
                    }
                    if(day == "Monday"){
                        workout.weeks[weekNumber].Monday.dayCompleted = true;
                    }
                    if(day == "Tuesday"){
                        workout.weeks[weekNumber].Tuesday.dayCompleted = true;
                    }
                    if(day == "Wednesday"){
                        workout.weeks[weekNumber].Wednesday.dayCompleted = true;
                    }
                    if(day == "Thursday"){
                        workout.weeks[weekNumber].Thursday.dayCompleted = true;
                    }
                    if(day == "Friday"){
                        workout.weeks[weekNumber].Friday.dayCompleted = true;
                    }
                    if(day == "Saturday"){
                        workout.weeks[weekNumber].Saturday.dayCompleted = true;
                    }

                    workout.save(function (err, updatedWorkout){
                        if(err){
                            deferred.reject(err);
                        }
                        else
                        {
                            deferred.resolve(updatedWorkout);
                        }
                    });
                }
            });
        return deferred.promise;
    }

};
