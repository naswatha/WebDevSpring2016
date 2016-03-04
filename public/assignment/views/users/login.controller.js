/**
 * Created by Naveen on 2/25/2016.
 */
(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($rootScope, $scope, $location, UserService) {

        $scope.message = null;

        var callback = function(userResponse) {
            if (userResponse!=null) {
                //setting the currentUser using userResponse in service with $rootscope
                UserService.setCurrentUser(userResponse);
                //move to profile.
                $location.url("/profile");
            }
            else{
                $scope.message = "Please enter correct login credentials";
            }

        };

        // login handler
        $scope.login = function(user) {
            if(user == null){
                $scope.message = "Please enter Username and Password";
                console.log("Please enter Username and Password");
                return;
            }

            if(!user.username || user.username == null){
                $scope.message = "Please enter Username";
                return;
            }

            if(user.password == null){
                $scope.message = "Please enter Password";
                return;
            }
            UserService.findUserByCredentials(user.username,user.password,callback);
        };

    }

})();


