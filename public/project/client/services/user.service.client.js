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
            findUserByUsername: findUserByUsername,
            addToSubscribeList: addToSubscribeList,
            removeFromSubscribeList: removeFromSubscribeList
        };

        return service;

        function findUserByUsername (username){
            return $http.get("/api/project/userbyusername/"+username);
        }

        function findUserByCredentials (username, password){
            return $http.get("/api/project/user?username="+username+"&password="+password);
        }

        function findAllUsers (){
            return $http.get("/api/project/alluser");
        }

        function createUser (user){
            var url = "/api/project/user";
            return $http.post(url,user);
        }

        function deleteUserById (userId){
            var url = "/api/project/user/"+userId;
            return $http.delete(url);
        }

        function updateUser (userId,user){
            var url = "/api/project/user/"+userId;
            return $http.put(url,user);
        }

        function addToSubscribeList (subscribeTo,currUsername){
            var url = "/api/project/addsubcriber/"+subscribeTo+"/loggeduser/"+currUsername;
            return $http.put(url);
        }

        function removeFromSubscribeList (subscribeTo,currUsername){
            var url = "/api/project/removesubcriber/"+subscribeTo+"/loggeduser/"+currUsername;
            return $http.put(url);
        }
    }
})();




