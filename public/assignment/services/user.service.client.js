/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("UserService",UserService)

    function UserService(){
        var currentUsers = [];
        currentUsers = [
            {
                "_id":123,
                "firstName":"Alice",
                "lastName":"Wonderland",
                "username":"alice",
                "password":"alice",
                "roles":[
                    "student"
                ]
            },
            {
                "_id":234,
                "firstName":"Bob",
                "lastName":"Hope",
                "username":"bob",
                "password":"bob",
                "roles":[
                    "admin"
                ]
            },
            {
                "_id":345,
                "firstName":"Charlie",
                "lastName":"Brown",
                "username":"charlie",
                "password":"charlie",
                "roles":[
                    "faculty"
                ]
            },
            {
                "_id":456,
                "firstName":"Dan",
                "lastName":"Craig",
                "username":"dan",
                "password":"dan",
                "roles":[
                    "faculty",
                    "admin"
                ]
            },
            {
                "_id":567,
                "firstName":"Edward",
                "lastName":"Norton",
                "username":"ed",
                "password":"ed",
                "roles":[
                    "student"
                ]
            }
        ];


        function findUserByCredentials(username, password, callback) {
            var userIndex;
            for(userIndex in currentUsers) {
                var user = currentUsers[userIndex];
                if(username === user.username && password === user.password){
                    callback(user);
                }
            }
            callback(null);
        }

        function findAllUsers(callback){
            callback(currentUsers);
        }

        function createUser(user,callback){
            user._id = (new Date).getTime();
            currentUsers.push(user);
            callback(user);
        }

        function deleteUserById(userId,callback){
            var userIndex;
            for(userIndex in currentUsers){
                var user = currentUsers[userIndex];
                if(user._id === userId){
                    currentUsers.splice(userIndex,1);
                    callback(currentUsers);
                }
            }
        }

        function updateUser(userId,user,callback){
            var userIndex;
            for(userIndex in currentUsers){
                var updateUser = currentUsers[userIndex];
                if(user._id === userId){
                    updateUser.username = user.username;
                    updateUser.password = user.password;
                    updateUser.firstName = user.firstName;
                    updateUser.lastName = user.lastName;
                    updateUser.roles = user.roles;
                    callback(updateUser);
                }
            }
        }


    }
})();




