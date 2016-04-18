/**
 * Created by Naveen on 3/24/2016.
 */
"use strict";

module.exports = function(app,WorkoutModel){


    app.post("/api/project/workout", createWorkout);

    app.get("/api/project/workout/:workoutId", findWorkoutById);
    app.get("/api/project/user/:username/workout", findWorkoutByUsername);
    //app.get("/api/project/getPublic/:publicId", findAllPublicWorkout);

    //app.put("/api/project/workout/:workoutId", updateWorkout);
    //app.put("/api/project/user/:username/workout/:workoutId", updateActive);
    //app.put("/api/project/makePublicWorkout/:workoutId", updatePublic);
    //app.put("/api/project/addList/user/:username/workout/:workoutId", addWorkoutToMyList);
    //
    //app.delete("/api/project/user/:userId/workout/:workoutId", deleteWorkout);


    function createWorkout(req, res){
        //console.log(req.body);
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

    function findWorkoutByUsername(req, res){
        console.log(req.params.username);
        WorkoutModel.getWorkoutByUsername(req.params.username).then(
            function(response){
                res.json(response);
            });
    }

    //function findAllPublicWorkout(req, res){
    //    WorkoutModel.getAllPublicWorkout(req.params.publicId).then(
    //        function(response){
    //            res.json(response);
    //        });
    //}
    //
    //function updateWorkout(req, res){
    //    WorkoutModel.update(req.params.workoutId, req.body).then(
    //        function(response){
    //            res.json(response);
    //    })
    //}
    //
    //function updateActive(req, res){
    //    WorkoutModel.makeActive(req.params.username,req.params.workoutId).then(
    //        function(response){
    //            res.json(response);
    //        })
    //}
    //
    //function updatePublic(req, res){
    //    WorkoutModel.makePublic(req.params.workoutId).then(
    //        function(response){
    //            res.json(response);
    //        })
    //}
    //
    //function addWorkoutToMyList(req, res){
    //    WorkoutModel.addWorkoutList(req.params.username,req.params.workoutId).then(
    //        function(response){
    //            res.json(response);
    //        })
    //}
    //
    //function deleteWorkout(req, res){
    //    WorkoutModel.remove(req.params.userId,req.params.workoutId).then(
    //        function(response){
    //            res.json(response);
    //        })
    //}

    /////////////////////////////////

    //function createWorkout(req, res){
    //    var workout = req.body;
    //    res.json(model.createWorkout(workout));
    //}
    //
    //function addWorkoutToMyList(req,res){
    //    res.json(model.addWorkoutToMyWorkout(req.params.userId,req.params.workoutId));
    //}
    //
    //function getAllPublicWorkout(req,res){
    //    res.json(model.findAllPublicWorkout(req.params.publicId));
    //}
    //
    //function makePublic(req, res){
    //    res.json(model.updateWorkoutToPublic(req.params.userId,req.params.workoutId));
    //}
    //
    //function updateActive(req, res){
    //    res.json(model.updateWorkoutToActive(req.params.userId,req.params.workoutId));
    //}
    //
    //function getWorkoutByUserId(req, res){
    //    res.json(model.findWorkoutByUserId(req.params.userId));
    //}
    //
    //function getWorkoutById(req, res){
    //    res.json(model.findById(req.params.workoutId));
    //}
    //
    //function deleteWorkout(req, res){
    //    res.json(model.remove(req.params.userId,req.params.workoutId));
    //}
    //
    //function update(req, res){
    //    res.json(model.update(req.params.workoutId, req.body));
    //}
};