/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController",LoginController);

    //inject UserService
    function LoginController ($scope,$location,$rootScope,UserService){

        var callback = function(userResponse) {
            if (!userResponse) {
                $rootScope.currentUser = userResponse;
                $location.url("/profile");
            }
        };

        $scope.login = function(user){
            UserService.findUserByCredentials(user.username,user.password,callback);
        };

    }

})();


