/**
 * Created by Naveen on 3/16/2016.
 */
"use strict";
//var passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;
//var mongoose = require("mongoose");

module.exports = function(app, UserModel){

    //var auth = authorized;

    app.post("/api/assignment/user/login", login);
    //app.post("/api/project/user/login", passport.authenticate("local"), login);
    app.get("/api/assignment/user/loggedin", loggedin);
    app.post("/api/assignment/logout", logout);

    app.post("/api/assignment/user", createUser);
    app.get("/api/assignment/user", findUser);
    app.get("/api/assignment/user/:id", findUserById);
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUser);

    //passport.use(new LocalStrategy(localStrategy));
    //passport.serializeUser(serializeUser);
    //passport.deserializeUser(deserializeUser);
    //
    //function localStrategy(username, password, done) {
    //    UserModel
    //        .findUserByCredentials({username: username, password: password})
    //        .then(
    //            function (user) {
    //                //if (user && bcrypt.compareSync(password, user.password)) {
    //                if (!user) {
    //                    return done(null, false);
    //                } else {
    //                    return done(null, user);
    //                }
    //            },
    //            function (err) {
    //                if (err) {
    //                    return done(err);
    //                }
    //            }
    //        );
    //}
    //
    //function serializeUser(user, done) {
    //    done(null, user);
    //}
    //
    //function deserializeUser(user, done) {
    //    UserModel
    //        .findById(user._id)
    //        .then(
    //            function (userResp) {
    //                done(null, userResp);
    //            },
    //            function (err) {
    //                done(err, null);
    //            }
    //        );
    //}


    function createUser(req, res){
        var user = req.body;
        UserModel.create(user).then(
            function(response){
                console.log("created User");
                req.session.loggedUser = response;
                console.log(req.session.loggedUser);
                res.json(response);
        },
            function (err){
                res.status(400).send(err);
            }
        );
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

    function findUserById(req,res){
        UserModel.findById(req.params.id).then(
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
        UserModel.remove(req.params.id).then(
            function(response){
                res.json(response);
            });
    }

    function login(req, res){
        UserModel.findUserByCredentials(req.body).then(
            function(response){
                req.session.loggedUser = response;
                res.json(response);
            });
    }

    function loggedin(req, res) {
        console.log("logged in called");
        console.log(req.session.loggedUser);
        res.json(req.session.loggedUser);
    }

    function logout(req, res) {
        req.session.destroy();
        res.send(200);
    }

    //function login(req, res) {
    //    var user = req.user;
    //    res.json(user);
    //}
    //
    //function loggedin(req, res) {
    //    if(req.isAuthenticated()){
    //        res.send(req.user);
    //    }
    //    else{
    //        res.send(null);
    //    }
    //
    //    //res.send(req.isAuthenticated() ? req.user : null);
    //}
    //
    //
    //function logout(req, res) {
    //    req.logout();
    //    res.send(200);
    //}
    //
    //function authorized (req,res,next){
    //    if(!req.isAuthenticated())
    //    {
    //        res.send(401);
    //    }
    //    else{
    //        next();
    //    }
    //}
};