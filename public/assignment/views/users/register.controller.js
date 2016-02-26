/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("RegisterController",RegisterController);

        //inject UserService
        function RegisterController ($scope,$location,$rootScope,UserService){

            //implement event handler register()
            $scope.register = function(user){
                //userService to create new user
                UserService.createUser(user,callback);
            };

             var callback = function(userResponse){
                 //store new user in rootscope
                $rootScope.currentUser = userResponse;
                 //location to navigate to profile.
                $location.url("/profile");
            };

        }

})();


