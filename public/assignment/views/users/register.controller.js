/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("RegisterController",RegisterController);

        function RegisterController ($scope,$location,$rootScope,UserService){

            $scope.register = function(user){
                UserService.createUser(user,callback);
            };

             var callback = function(userResponse){
                $rootScope.currentUser = userResponse;
                $location.url("/profile");
            };

        }

})();


