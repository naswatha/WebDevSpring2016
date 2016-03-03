/**
 * Created by Naveen on 3/3/2016.
 */
(function(){
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .factory("UserService",UserService);

    function UserService($rootScope){
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


        UserService.findUserByCredentials = function(username, password, callback) {
            var userIndex;
            for (userIndex in Users) {
                var user = Users[userIndex];
                if (username === user.username && password === user.password) {
                    callback(user);
                }
            }
        };

        UserService.findAllUsers = function (callback){
            callback(Users);
        };

        UserService.createUser = function(user,callback){

            user._id = (new Date).getTime();
            Users.push(user);
            callback(user);
        };

        UserService.deleteUserById = function (userId,callback){
            var userIndex;
            for(userIndex in Users){
                var user = Users[userIndex];
                if(userId === user._id){
                    Users.splice(userIndex,1);
                    callback(Users);
                }
            }
        };

        UserService.updateUser = function (userId,user,callback){
            var userIndex;
            for(userIndex in Users){
                var updateUser = Users[userIndex];
                if(userId === updateUser._id ){
                    updateUser.username = user.username;
                    updateUser.password = user.password;
                    updateUser.firstName = user.firstName;
                    updateUser.lastName = user.lastName;
                    updateUser.email = user.email;
                    callback(updateUser);
                }
            }
        };

        UserService.setCurrentUser = function(user) {
            $rootScope.loggedUser = user;
        };

        return {
            Users: Users,
            findUserByCredentials: UserService.findUserByCredentials,
            findAllUsers: UserService.findAllUsers,
            createUser: UserService.createUser,
            deleteUserById: UserService.deleteUserById,
            updateUser: UserService.updateUser,
            setCurrentUser : UserService.setCurrentUser
        };

    }
})();




