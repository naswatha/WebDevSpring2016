/**
 * Created by Naveen on 3/24/2016.
 */
"use strict";

module.exports = function(app,WorkoutModel){


    app.post("/api/project/workout", createWorkout);

    app.get("/api/project/workout/:workoutId", findWorkoutById);
    app.get("/api/project/user/:username/workout", findWorkoutByUsername);
    app.get("/api/project/getPublic/:publicId", findAllPublicWorkout);
    app.get("/api/project/findactive/:username", findUserActiveWorkout);
    app.get("/api/project/allworkouts", findAllWorkouts);

    app.put("/api/project/makePublicWorkout/:workoutId", updatePublic);
    app.put("/api/project/inactiveall/:username", updateUserWorkoutsInactive);
    app.put("/api/project/makeactive/:workoutId", updateThisWorkoutActive);
    app.put("/api/project/workout/:workoutId/weekNum/:weekNum/day/:day/dayfull", updateCurrentDayWorkout);

    app.delete("/api/project/workout/:workoutId", deleteWorkout);


    function createWorkout(req, res){
        WorkoutModel.create(req.body).then(
            function (response){
                res.json(response);
        });
    }

    function findWorkoutById(req, res){
        WorkoutModel.getWorkoutById(req.params.id).then(
            function(response){
                res.json(response);
            });
    }

    function findAllWorkouts(req, res){
        WorkoutModel.getAllWorkouts().then(
            function(response){
                res.json(response);
            });
    }

    function findWorkoutByUsername(req, res){
        WorkoutModel.getWorkoutByUsername(req.params.username).then(
            function(response){
                res.json(response);
            });
    }

    function updatePublic(req, res){
        console.log(req.params.workoutId);
        WorkoutModel.makePublic(req.params.workoutId).then(
            function(response){
                res.json(response);
            })
    }

    function findAllPublicWorkout(req, res){
        WorkoutModel.getAllPublicWorkout(req.params.publicId).then(
            function(response){
                res.json(response);
            });
    }

    function updateUserWorkoutsInactive(req, res){
        WorkoutModel.makeUserWorkoutsFalse(req.params.username).then(
            function(response){
                res.json(response);
            });
    }

    function updateThisWorkoutActive(req, res){
        WorkoutModel.makeUserWorkoutTrue(req.params.workoutId).then(
            function(response){
                res.json(response);
            });
    }

    function updateCurrentDayWorkout(req, res){
        WorkoutModel.updateCurrentDay(req.params.workoutId,req.params.weekNum,req.params.day,req.body).then(
            function(response){
                res.json(response);
            });
    }

    function findUserActiveWorkout(req, res){
        WorkoutModel.getActiveWorkout(req.params.username).then(
            function(response){
                res.json(response);
            });
    }



    function deleteWorkout(req, res){
        WorkoutModel.remove(req.params.workoutId).then(
            function(response){
                res.json(response);
            })
    }
};