/**
 * Created by Naveen on 3/16/2016.
 */
"use strict";
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require("mongoose");

module.exports = function(app, UserModel){

    var auth = authorized;

    app.post("/api/project/user", createUser);
    app.post("/api/project/user/login", passport.authenticate("local"), login);
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

    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    function localStrategy(username, password, done) {
        UserModel
            .findUserByCredentials({username: username, password: password})
            .then(
                function (user) {
                    //if (user && bcrypt.compareSync(password, user.password)) {
                    if (!user) {
                        return done(null, false);
                    } else {
                        return done(null, user);
                    }
                },
                function (err) {
                    if (err) {
                        return done(err);
                    }
                }
            );
    }

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        UserModel
            .findById(user._id)
            .then(
                function (userResp) {
                    done(null, userResp);
                },
                function (err) {
                    done(err, null);
                }
            );
    }

    function createUser(req, res){
        var user = req.body;
        UserModel.create(user).then(
            function(user) {
                if (user) {
                    req.login(user, function (err) {
                        if (err) {
                            res.status(400).send(err);
                        } else {
                            res.json(user);
                        }
                    });
                }

            },
            function(err) {
                res.status(400).send(err);
            }
        )
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

    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function loggedin(req, res) {
        if(req.isAuthenticated()){
            res.send(req.user);
        }
        else{
            res.send(null);
        }

        //res.send(req.isAuthenticated() ? req.user : null);
    }


    function logout(req, res) {
        req.logout();
        res.send(200);
    }

    function authorized (req,res,next){
        if(!req.isAuthenticated())
        {
            res.send(401);
        }
        else{
            next();
        }
    }

};