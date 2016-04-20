/**
 * Created by Naveen on 3/16/2016.
 */
"use strict";

module.exports = function(app, UserModel){

    app.post("/api/project/user", createUser);
    app.post("/api/project/user/login", login);
    app.get("/api/project/user/loggedin", loggedin);
    app.post("/api/project/logout", logout);

    app.get("/api/project/userbyusername/:username", findUserByUsername);
    app.get("/api/project/alluser", findAllUsers);
    app.get("/api/project/user", findUser);
    app.get("/api/project/user/:id", findUserById);

    app.put("/api/project/user/:id", updateUser);
    app.put("/api/project/addsubcriber/:subscribeTo/loggeduser/:currUsername", addUserAsSubscriber);
    app.put("/api/project/removesubcriber/:subscribeTo/loggeduser/:currUsername", removeUserAsSubscriber);

    app.delete("/api/project/user/:userId", deleteUser);


    function createUser(req, res){
        var user = req.body;
        UserModel.create(user).then(
            function(response){
                res.json(response);
            });
    }

    function findUser(req, res){
        var username = req.query.username;
        var password = req.query.password;
        if(username && password){
            UserModel.findUserByCredentials(req.query).then(
                function(response){
                    res.json(response);
                });
        }
    }

    function findAllUsers(req, res){
        UserModel.findAll().then(
            function(response){
                res.json(response);
            });
    }


    function findUserById(req,res){
        UserModel.findById(req.params.id).then(
            function(response){
                res.json(response);
            });
    }

    function findUserByUsername(req,res){
        UserModel.findByUsername(req.params.username).then(
            function(response){
                res.json(response);
            });
    }

    function updateUser(req,res){
        UserModel.update(req.params.id, req.body).then(
            function(response){
                res.json(response);
            });
    }

    function deleteUser(req, res){
        UserModel.remove(req.params.userId).then(
            function(response){
                res.json(response);
            });
    }

    function addUserAsSubscriber(req, res){
        UserModel.addSubcriber(req.params.subscribeTo, req.params.currUsername).then(
            function(response){
                res.json(response);
            });
    }

    function removeUserAsSubscriber(req, res){
        UserModel.removeSubcriber(req.params.subscribeTo, req.params.currUsername).then(
            function(response){
                res.json(response);
            });
    }

    function login(req, res){
        console.log("Server service");
        console.log(req.body);
        UserModel.findUserByCredentials(req.body).then(
            function(response){
                req.session.loggedUser = response;
                res.json(response);
            });
    }

    function loggedin(req, res) {
        res.json(req.session.loggedUser);
    }

    function logout(req, res) {
        req.session.destroy();
        res.send(200);
    }

};