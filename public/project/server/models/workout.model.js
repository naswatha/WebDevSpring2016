/**
 * Created by Naveen on 3/24/2016.
 */
"use strict";
module.exports = function(app){

    var workouts = require("./workout.mock.json");

    var api = {

        createWorkout: createWorkout,
        findAll: findAll,
        findById: findById,
        update: update,
        remove: remove,
        findWorkoutByUserId: findWorkoutByUserId,
        findAllPublicWorkout: findAllPublicWorkout,
        updateWorkoutToPublic: updateWorkoutToPublic,
        updateWorkoutToActive: updateWorkoutToActive,
        addWorkoutToMyWorkout: addWorkoutToMyWorkout

    };

    return api;

    function createWorkout(workout) {
        workout._id = (new Date).getTime();
        workouts.push(workout);
        return workout;
    }

    function findAll() {
        return workouts;
    }

    function findById(id) {
        for(var i = 0; i < workouts.length; i++) {
            var workout = workouts[i];
            if(workout._id == id){
                return workout;
            }
        }
        return null;
    }

    function findWorkoutByUserId(userId){
        var userWorkouts = [];
        for(var i=0;i<workouts.length;i++) {
            for(var j=0;j<workouts[i].userDetails.length; j++){
                if(workouts[i].userDetails[j].userId == userId){
                    userWorkouts.push(workouts[i]);
                }
            }
        }
        return userWorkouts;
    }

    function update(id, workout){
        for(var i = 0; i < workouts.length; i++) {
            if(workouts[i]._id == id) {
                workouts[i] = workout;
                return;
            }
        }
    }

    function remove (userId,workoutId){
            var workoutIndex = null;
            var userIndex;
            for(var i=0;i<workouts.length;i++) {
                if(workouts[i]._id == workoutId){
                    if(workouts[i].userDetails.length > 1){
                        for(var j=0;j<workouts[i].userDetails.length;j++){
                            if(workouts[i].userDetails[j].userId == userId) {
                                userIndex = j;
                                break;
                            }
                        }
                        workouts[i].userDetails.splice(userIndex, 1);
                    }
                    else{
                        workoutIndex = i;
                        break;
                    }
                }
            }
            if(workoutIndex != null){
                workouts.splice(workoutIndex,1);
            }
            return workouts;
    }

    function findAllPublicWorkout(publicId){
        if(publicId == 1) {
            var publicWorkouts = [];
            for (var i = 0; i < workouts.length; i++) {
                if (workouts[i].public == 1) {
                    publicWorkouts.push(workouts[i]);
                }
            }
            return publicWorkouts;
        }
        else return null;
    }

    function updateWorkoutToActive(userId,workoutId){

            var updateWorkoutArr = [];
            for(var i=0;i<workouts.length;i++) {
                if(workouts[i]._id == workoutId) {
                    for(var j= 0;j<workouts[i].userDetails.length;j++){
                        if(workouts[i].userDetails[j].userId == userId){
                            workouts[i].userDetails[j].active = 1;
                            updateWorkoutArr.push(workouts[i]);
                        }
                    }
                }
                else{
                    for(var j= 0;j<workouts[i].userDetails.length;j++){
                        if(workouts[i].userDetails[j].userId == userId){
                            workouts[i].userDetails[j].active = 0;
                            updateWorkoutArr.push(workouts[i]);
                        }
                    }
                }
            }
            return updateWorkoutArr;
    }

    function updateWorkoutToPublic(userId,workoutId){

        var updateWorkoutArr = [];
        for(var i=0;i<workouts.length;i++) {
            if(workouts[i]._id == workoutId) {
                workouts[i].public = 1;
            }
            if(workouts[i].userDetails[0].userId == userId){
                updateWorkoutArr.push(workouts[i]);
            }
        }
        return updateWorkoutArr;
    }


    function addWorkoutToMyWorkout(userId, workoutId){
            var updateWorkoutArr = [];
            var userDet = {"userId":userId,"active": 0};
            for(var i=0;i<workouts.length;i++) {
                if (workouts[i].public == 1){
                    if (workoutId == workouts[i]._id) {
                        workouts[i].userDetails.push(userDet);
                    }
                    updateWorkoutArr.push(workouts[i]);
                }
            }
        return updateWorkoutArr;
    }

};
