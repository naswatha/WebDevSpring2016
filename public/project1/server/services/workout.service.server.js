/**
 * Created by Naveen on 3/24/2016.
 */
"use strict";

module.exports = function(app,model){

    app.get("/api/project/user/:userId/workout", getWorkoutByUserId);
    app.get("/api/project/workout/:workoutId", getWorkoutById);
    app.delete("/api/project/user/:userId/workout/:workoutId", deleteWorkout);
    app.post("/api/project/workout", create);
    app.put("/api/project/workout/:workoutId", update);
    app.put("/api/project/user/:userId/workout/:workoutId", updateActive);
    app.put("/api/project/user/:userId/makePublicWorkout/:workoutId", makePublic);
    app.get("/api/project/getPublic/:publicId", getAllPublicWorkout);
    app.put("/api/project/addList/user/:userId/workout/:workoutId", addWorkoutToMyList);

    function create(req, res){
        var workout = req.body;
        res.json(model.createWorkout(workout));
    }

    function addWorkoutToMyList(req,res){
        res.json(model.addWorkoutToMyWorkout(req.params.userId,req.params.workoutId));
    }

    function getAllPublicWorkout(req,res){
        res.json(model.findAllPublicWorkout(req.params.publicId));
    }

    function makePublic(req, res){
        res.json(model.updateWorkoutToPublic(req.params.userId,req.params.workoutId));
    }

    function updateActive(req, res){
        res.json(model.updateWorkoutToActive(req.params.userId,req.params.workoutId));
    }

    function getWorkoutByUserId(req, res){
        res.json(model.findWorkoutByUserId(req.params.userId));
    }

    function getWorkoutById(req, res){
        res.json(model.findById(req.params.workoutId));
    }

    function deleteWorkout(req, res){
        res.json(model.remove(req.params.userId,req.params.workoutId));
    }

    function update(req, res){
        res.json(model.update(req.params.workoutId, req.body));
    }
};