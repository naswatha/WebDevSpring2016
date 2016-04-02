/**
 * Created by Naveen on 3/16/2016.
 */
    "use strict";
var q = require("q");
module.exports = function(mongoose, assignmentDb){

    //var users = require("./user.mock.json");
    var UserSchema = require("./user.schema.server.js")(mongoose);
    var UserModel = mongoose.model('User',UserSchema);

    var api = {

        create: create,
        findAll: findAll,
        findById: findById,
        update: update,
        remove: remove,
        //findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials

    };

    return api;

    function create(user) {
        //console.log(user);

        var deferred = q.defer();

        UserModel.create(user,
            function (err, created) {
                if (created) {
                    deferred.resolve(created);
                } else {
                    deferred.reject(err);
                }
        });

        return deferred.promise;
        //user._id = (new Date).getTime();
        //users.push(user);
        //return user;
    }

    function findAll() {
        var deferred = q.defer();

        UserModel.find(
            function(err, users){
                if (users) {
                    deferred.resolve(users);
                } else {
                    deferred.reject(err);
                }
        });
        return deferred.promise;
        //return users;
    }

    function findById(id) {

        var deferred = q.defer();

        UserModel.findById(id, function(err, user){
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;

        //for(var i = 0; i < users.length; i++) {
        //    var user = users[i];
        //    if(user._id == id){
        //        return user;
        //    }
        //}
        //return null;
    }

    function update(id, user){

        var deferred = q.defer();

        UserModel.findById({"_id": id},
            function(err, updatedUser) {
                if (err) {
                    deferred.reject(err);
                } else {
                    updatedUser.username = user.username;
                    updatedUser.password = user.password;
                    updatedUser.firstName = user.firstName;
                    updatedUser.lastName = user.lastName;
                    updatedUser.emails = user.emails;
                    updatedUser.phones = user.phones;
                    updatedUser.save(function(err, savedUser) {
                        if (err) {
                            deferred.reject(err);
                        } else {
                            deferred.resolve(savedUser);
                        }
                    });
                }
            });
        //for(var i = 0; i < users.length; i++) {
        //    if(users[i]._id == id) {
        //        users[i] = user;
        //        return users[i];
        //    }
        //}
        return deferred.promise;
    }

    function remove(id){
        var deferred = q.defer();
        UserModel.remove({_id: id},
            function(err, users){
                if (users) {
                    deferred.resolve(users);
                } else {
                    deferred.reject(err);
                }
        });

        return deferred.promise;
        //for(var i = 0; i <  users.length; i++){
        //    if(users[i]._id == id){
        //        users.splice(i, 1);
        //    }
        //}
        //return users;
    }

    //function findUserByUsername(username){
    //    for(var i = 0; i < users.length; i++){
    //        var user = users[i];
    //        if(user.username == username){
    //            return user;
    //        }
    //    }
    //    return null;
    //}

    function findUserByCredentials(credentials){

        var deferred = q.defer();
        UserModel.findOne({ username: credentials.username, password: credentials.password },
            function(err, user){
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(user);
                }
            });

        return deferred.promise;

        //for(var i = 0; i < users.length; i++){
        //    var user = users[i];
        //    if(user.username == credentials.username && user.password == credentials.password){
        //        return user;
        //    }
        //}
        //return null;
    }

};