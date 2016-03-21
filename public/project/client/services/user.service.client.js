/**
 * Created by Naveen on 3/3/2016.
 */
(function(){
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .factory("UserService",UserService);

    function UserService ($http,$rootScope){

        var service = {
            findAllUsers : findAllUsers,
            findUserByCredentials:findUserByCredentials,
            createUser : createUser,
            deleteUserById : deleteUserById,
            updateUser : updateUser,
            findUserByUsername: findUserByUsername
        };

        return service;

        function findUserByUsername (username){
            return $http.get("/api/assignment/user?username="+username);
        }

        function findUserByCredentials (username, password){
            return $http.get("/api/assignment/user?username="+username+"&password="+password);
        }

        function findAllUsers (){
            return $http.get("/api/assignment/user");
        }

        function createUser (user){
            var url = "/api/assignment/user";
            return $http.post(url,user);
        }

        function deleteUserById (userId){
            var url = "/api/assignment/user/";
            return $http.delete(url+userId);
        }

        function updateUser (userId,user){
            var url = "/api/assignment/user/"+userId;
            return $http.put(url,user);
        }
    }
})();




