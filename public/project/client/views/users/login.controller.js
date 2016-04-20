/**
 * Created by Naveen on 3/2/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
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

            UserService
                .login(user)
                .then(function(response){
                    console.log("Client Controller");
                    console.log(response);
                    if(response.data) {
                        UserService.setCurrentUser(response.data);
                        $location.url("/home");
                    }else{
                        $scope.message = "Username and Password does not match, new User please register";
                    }
                });

            //UserService.findUserByCredentials(user.username,user.password).then(
            //    function (response){
            //        if(response.data == null){
            //            $scope.message = "Username and Password does not match, new User please register";
            //        }
            //        else{
            //            UserService.setCurrentUser(response.data);
            //            //$rootScope.loggedUser = response.data;
            //            $location.path("/profile");
            //        }
            //    });
        };
    }
})();





