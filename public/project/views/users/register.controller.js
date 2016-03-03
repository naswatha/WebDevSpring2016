/**
 * Created by Naveen on 3/2/2016.
 */
(function(){
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("RegisterController",RegisterController);

    //inject UserService
    function RegisterController ($scope,$location,$rootScope,UserService){

        var callback = function(userResponse){
            //setting the currentUser using userResponse in service with $rootscope
            UserService.setCurrentUser(userResponse);
            //location to navigate to profile.
            $location.url("/profile");
        };


        //implement event handler register()
        $scope.register = function(user){
            //userService to create new user
            UserService.createUser(user,callback);
        };



    }

})();