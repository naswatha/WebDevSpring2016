/**
 * Created by Naveen on 3/16/2016.
 */
    "use strict";
var q = require("q");
module.exports = function(mongoose, assignmentDb){

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
    }


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
    }

};