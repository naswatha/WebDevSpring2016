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

    //app.put("/api/project/workout/:workoutId", updateWorkout);
    //app.put("/api/project/user/:username/workout/:workoutId", updateActive);
    app.put("/api/project/makePublicWorkout/:workoutId", updatePublic);
    app.put("/api/project/inactiveall/:username", updateUserWorkoutsInactive);
    app.put("/api/project/makeactive/:workoutId", updateThisWorkoutActive);
    app.put("/api/project/workout/:workoutId/weekNum/:weekNum/day/:day/dayfull", updateCurrentDayWorkout);
    //app.put("/api/project/updateRep/:workoutId/weekNum/:weekNumber/achrep/:achievedRep/position/:index", updateGivenRep);
    //app.put("/api/project/addList/user/:username/workout/:workoutId", addWorkoutToMyList);
    //
    app.delete("/api/project/workout/:workoutId", deleteWorkout);


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

    function findAllWorkouts(req, res){
        WorkoutModel.getAllWorkouts().then(
            function(response){
                res.json(response);
            });
    }

    function findWorkoutByUsername(req, res){
        //console.log(req.params.username);
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
        //console.log("workout server service");
        //console.log(req.params.workoutId);
        //console.log(req.params.weekNum);
        //console.log(req.params.day);
        //console.log(req.body);
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

    //function updateGivenRep(req, res){
    //    console.log(req.params.workoutId);
    //    console.log(req.params.weekNumber);
    //    console.log(req.params.achievedRep);
    //    console.log(req.params.index);
    //    WorkoutModel.updateExerRep(req.params.workoutId,req.params.weekNumber,req.params.achievedRep,req.params.index).then(
    //        function(response){
    //            res.json(response);
    //        });
    //}

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