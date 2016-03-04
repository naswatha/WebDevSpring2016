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

            $scope.message = null;

            $scope.successMessage = null;


            var callback = function(userResponse){
                //if(userResponse != null){
                //    $scope.successMessage = "Registration completed successfully!";
                //}
                //setting the currentUser using userResponse in service with $rootscope
                UserService.setCurrentUser(userResponse);
                //location to navigate to profile.
                $location.url("/profile");
            };


            //implement event handler register()
            $scope.register = function(user){

                console.log(user);

                if(user == null){
                    $scope.message = "Please enter details to register";
                    return;
                }

                if(!user.username || user.username == null){
                    $scope.message = "Please enter Username";
                    return;
                }

                if(!user.password || !user.verifyPass){
                    $scope.message = "Please enter Password";
                    return;
                }

                if(user.password != user.verifyPass){
                    $scope.message = "Password do not match";
                    return;
                }


                //userService to create new user
                UserService.createUser(user,callback);
            };



        }

})();


