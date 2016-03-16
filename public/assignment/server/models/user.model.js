/**
 * Created by Naveen on 3/16/2016.
 */
var users = require("./user.mock.json");

module.exports = function(app){

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
        users.push(user);
        return users;
    }

    function findAll() {
        return users;
    }

    function findById(id) {
        for(var i = 0; i < users.length; i++) {
            var user = users[i];
            if(user.id == id){
                return user;
            }
        }
        return null;
    }

    function update(id, user){
        for(var i = 0; i < users.length; i++) {
            if(users[i].id == id) {
                users[i] = user;
                return users;
            }
        }
    }

    function remove(id){
        for(var i = 0; i <  users.length; i++){
            if(users[i].id == id){
                users.splice(i, 1);
                return users;
            }
        }
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