/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("UserService",UserService);

    function UserService ($http,$rootScope){

        var service = {
            findAllUsers : findAllUsers,
            findUserByCredentials:findUserByCredentials,
            createUser : createUser,
            deleteUserById : deleteUserById,
            updateUser : updateUser,
            findUserByUsername: findUserByUsername,

            login: login,
            logout: logout,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser
        };

        return service;

        function login(credentials) {
            return $http.post("/api/assignment/user/login", credentials);
        }

        function logout () {
            return $http.post("/api/assignment/logout");
        }

        function setCurrentUser (user) {
            $rootScope.loggedUser = user;
        }

        function getCurrentUser () {
            console.log("executing get current user");
            return $http.get("/api/assignment/user/loggedin");
        }


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




