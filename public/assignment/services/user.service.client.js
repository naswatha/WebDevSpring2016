/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("UserService",UserService);

    function UserService ($rootScope){
        var Users = [];
        Users = [
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

        var service = {
            findAllUsers : findAllUsers,
            findUserByCredentials:findUserByCredentials,
            createUser : createUser,
            deleteUserById : deleteUserById,
            updateUser : updateUser
        };

        return service;

        function findUserByCredentials (username, password, callback){
            var user = null;
                for (var i =0;i<Users.length;i++) {
                   if (username === Users[i].username && password === Users[i].password) {
                        user = Users[i]
                    }
                }
            callback(user);
        }

        function findAllUsers (callback){
            callback(Users);
        }

        function createUser (user,callback){
                user._id = (new Date).getTime();
                Users.push(user);
                callback(user);
        }

        function deleteUserById (userId,callback){
            for (var i = 0; i < Users.length; i++) {
                if (Users[i]._id == userId) {
                    Users.splice(i, 1);
                }
            }
            callback(Users);
        }

        function updateUser (userId,user,callback){
            var updatedUser = null;
            for (var i = 0; i < Users.length; i++) {
                if (Users[i]._id == userId) {
                    Users[i] = user;
                    updatedUser = user;
                }
            }
            callback(updatedUser);
        }
    }
})();




