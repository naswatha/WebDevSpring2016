/**
 * Created by Naveen on 3/16/2016.
 */
    "use strict";
module.exports = function(app){

    var users = require("./user.mock.json");

    var api = {

        create: create,
        findAll: findAll,
        findById: findById,
        update: update,
        remove: remove,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials

    };

    return api;

    function create(user) {
        console.log(user);
        user._id = (new Date).getTime();
        users.push(user);
        return user;
    }

    function findAll() {
        return users;
    }

    function findById(id) {
        for(var i = 0; i < users.length; i++) {
            var user = users[i];
            if(user._id == id){
                return user;
            }
        }
        return null;
    }

    function update(id, user){
        for(var i = 0; i < users.length; i++) {
            if(users[i]._id == id) {
                users[i] = user;
                return users[i];
            }
        }
    }

    function remove(id){
        for(var i = 0; i <  users.length; i++){
            if(users[i]._id == id){
                users.splice(i, 1);
            }
        }
        return users;
    }

    function findUserByUsername(username){
        for(var i = 0; i < users.length; i++){
            var user = users[i];
            if(user.username == username){
                return user;
            }
        }
        return null;
    }

    function findUserByCredentials(credentials){
        for(var i = 0; i < users.length; i++){
            var user = users[i];
            if(user.username == credentials.username && user.password == credentials.password){
                return user;
            }
        }
        return null;
    }

};