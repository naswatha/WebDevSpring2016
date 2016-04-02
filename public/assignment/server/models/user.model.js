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

        UserModel.findById(id, function(err, user){
            if (err) {
                deferred.reject(err)
            } else {
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