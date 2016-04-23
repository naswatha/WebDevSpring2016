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

            if(!user.password || user.password == null){
                $scope.message = "Please enter Password";
                return;
            }
            UserService.login(user).then(
                    function (response){
                        console.log(response);
                        if(response.data == null){
                            $scope.message = "Username and Password does not match, new User please register";
                        }
                        else{
                            console.log("User exists");
                            UserService.setCurrentUser(response.data);
                            console.log(response.data);
                            $location.url("/profile");
                        }

                    });
        };
    }
})();


