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
            UserService.findUserByCredentials(user.username,user.password,
                function (callback){
                    if(callback == null){
                        $scope.message = "Entered Username and Password not match!";
                    }else{
                        $rootScope.loggedUser = callback;
                        $location.path('/profile');
                    }
                });
        };

    }

})();


