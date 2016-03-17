/**
 * Created by Naveen on 3/16/2016.
 */
"use strict";

module.exports = function(app, model){

    app.post("/api/assignment/user", createUser);
    app.get("/api/assignment/user", findUser);
    app.get("/api/assignment/user/:id", findUserById);
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUser);

    function createUser(req, res){
        var user = req.body;
        res.json(model.create(user));
    }

    function findUser(req, res){
        var username = req.query.username;
        var password = req.query.password;
        if(!username && !password){
            res.json(model.findAll());
        }
        else if(username && !password){
            res.json(model.findUserByUsername(username));
        }

        else {
            res.json(model.findUserByCredentials(req.query));
        }
    }

    function findUserById(req,res){
        res.json(model.findById(req.params.id));
    }

    function updateUser(req,res){
        res.json(model.update(req.params.id, req.body));
    }

    function deleteUser(req, res){
        res.json(model.remove(req.params.id));
    }
};