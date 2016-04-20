(function(){
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("RegisterController",RegisterController);

    //inject UserService
    function RegisterController ($scope,$location,$rootScope,UserService){

        $scope.message = null;

        console.log($rootScope.loggedUser);

        //implement event handler register()
        $scope.register = function(user){

            if(user == null){
                $scope.message = "Please enter details to register";
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

            if(!user.verifypassword || user.verifypassword == null){
                $scope.message = "Please re-enter password in 'verify Password' section";
                return;
            }

            if(user.password != user.verifypassword){
                $scope.message = "Entered Passwords do not match";
                return;
            }

            //userService to create new user

            UserService.findUserByUsername(user.username).then(
                function (response){
                    console.log("HEre");
                    if(response.data !=null){
                        if(response.data.username == user.username){
                            console.log(response.data.username);
                            $scope.message = "Oops! Username already exists, try new one...";
                            return;
                        }
                    }
                    else{
                        UserService.createUser(user).then(
                            function (response){
                                console.log("HEre");
                                console.log(response);
                                UserService.setCurrentUser(response.data);
                                $location.path('/home');
                            });
                    }
                });
        };

    }

})();
