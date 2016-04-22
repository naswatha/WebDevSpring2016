/**
 * Created by Naveen on 3/16/2016.
 */
"use strict";

var q = require("q");
module.exports = function(mongoose, webDevDb){

    var UserSchema = require("./user.schema.server.js")(mongoose);
    var UserModel = mongoose.model('pUser',UserSchema);

    var api = {

        create: create,
        findAll: findAll,
        findById: findById,
        update: update,
        remove: remove,
        findUserByCredentials: findUserByCredentials,
        addSubcriber: addSubcriber,
        removeSubcriber: removeSubcriber,
        findByUsername: findByUsername

};

    return api;

    function create(user) {
        var deferred = q.defer();

        UserModel.create(user,
            function (err, document) {
                if (err) {
                    deferred.reject(err)
                } else {
                    deferred.resolve(document);
                }
            });

        return deferred.promise;
    }

    function findAll() {
        var deferred = q.defer();

        UserModel.find(
            function(err, users){
                if (err) {
                    deferred.reject(err)
                } else {
                    deferred.resolve(users);
                }
            });

        return deferred.promise;
    }

    function findById(id) {

        var deferred = q.defer();

        UserModel.findById(id,
            function(err, user){
                if (err) {
                    deferred.reject(err)
                }
                else {
                    deferred.resolve(user);
                }
        });

        return deferred.promise;
    }

    function findByUsername(username) {

        var deferred = q.defer();
        UserModel.findOne({'username': username},
            function(err, user){
                if (err) {
                    deferred.reject(err)
                }
                else {
                    deferred.resolve(user);
                }
            });

        return deferred.promise;
    }

    function update(id, user){

        var deferred = q.defer();

        UserModel.findById(id,
            function(err,response){
                if(err){
                    deferred.reject(err);
                }
                else{
                    response.firstName = user.firstName;
                    response.lastName = user.lastName;
                    response.username = user.username;
                    response.password = user.password;
                    response.email = user.email;
                    response.save(
                        function(err, document) {
                            deferred.resolve(document);
                        });
                }
            });
        return deferred.promise;
    }

    function remove(id){
        var deferred = q.defer();
        UserModel.remove({_id: id},
            function(err, user){
                if (err) {
                    deferred.reject(err)
                } else {
                    deferred.resolve(user);
                }
            });

        return deferred.promise;
    }

    function addSubcriber(subscribeToUsername,username){
        var deferred = q.defer();
        UserModel.findOne({'username': username},
            function(err, user){
                if (err) {
                    deferred.reject(err)
                } else{

                    var found = false;
                    for(var i = 0; i < user.subscribeTo.length; i++){
                        if(subscribeToUsername == user.subscribeTo[i]){
                            found = true;
                        }
                    }
                    if(!found){
                        user.subscribeTo.push(subscribeToUsername);
                        user.save(
                            function(err, updatedUser) {
                                deferred.resolve(updatedUser);
                            });
                    }
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

    function removeSubcriber(subscribeToUsername,username){
        var deferred = q.defer();
        UserModel.findOne({'username': username},
            function(err, user){
                if (err) {
                    deferred.reject(err)
                } else{

                    for(var i = 0; i < user.subscribeTo.length; i++){
                        if(subscribeToUsername == user.subscribeTo[i]){
                            user.subscribeTo.splice(i,1);
                        }
                    }
                    user.save(
                        function(err, updatedUser) {
                            deferred.resolve(updatedUser);
                        });
                }
            });
        return deferred.promise;
    }

    function findUserByCredentials(credentials){

        console.log("Server Model");
        console.log(credentials);
        var deferred = q.defer();
        UserModel.findOne({ username: credentials.username, password: credentials.password },
            function(err, user){
                if (err) {
                    deferred.reject(err)
                } else {
                    deferred.resolve(user);
                }
            });

        return deferred.promise;
    }

};
