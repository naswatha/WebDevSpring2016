/**
 * Created by Naveen on 3/16/2016.
 */
"use strict";

var q = require("q");
module.exports = function(mongoose, webDevDb){

    //var users = require("./user.mock.json");
    var UserSchema = require("./user.schema.server.js")(mongoose);
    var UserModel = mongoose.model('pUser',UserSchema);

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
                    response.emails = user.emails;
                    response.phones = user.phones;
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
                    deferred.reject(err)
                } else {
                    deferred.resolve(user);
                }
            });

        return deferred.promise;
    }

};
//module.exports = function(app){
//
//    var users = require("./user.mock.json");
//
//    var api = {
//
//        create: create,
//        findAll: findAll,
//        findById: findById,
//        update: update,
//        remove: remove,
//        findUserByUsername: findUserByUsername,
//        findUserByCredentials: findUserByCredentials
//
//    };
//
//    return api;
//
//    function create(user) {
//        console.log(user);
//        user._id = (new Date).getTime();
//        users.push(user);
//        return user;
//    }
//
//    function findAll() {
//        return users;
//    }
//
//    function findById(id) {
//        for(var i = 0; i < users.length; i++) {
//            var user = users[i];
//            if(user._id == id){
//                return user;
//            }
//        }
//        return null;
//    }
//
//    function update(id, user){
//        for(var i = 0; i < users.length; i++) {
//            if(users[i]._id == id) {
//                users[i] = user;
//                return users[i];
//            }
//        }
//    }
//
//    function remove(id){
//        for(var i = 0; i <  users.length; i++){
//            if(users[i]._id == id){
//                users.splice(i, 1);
//            }
//        }
//        return users;
//    }
//
//    function findUserByUsername(username){
//        for(var i = 0; i < users.length; i++){
//            var user = users[i];
//            if(user.username == username){
//                return user;
//            }
//        }
//        return null;
//    }
//
//    function findUserByCredentials(credentials){
//        for(var i = 0; i < users.length; i++){
//            var user = users[i];
//            if(user.username == credentials.username && user.password == credentials.password){
//                return user;
//            }
//        }
//        return null;
//    }
//
//};