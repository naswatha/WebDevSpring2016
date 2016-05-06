/**
 * Created by Naveen on 3/2/2016.
 */
(function() {
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($rootScope, $scope, $location, UserService,WgerApiService) {

        $scope.message = null;
        $rootScope.exerciseList = [];

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

                    if(response.data) {
                        UserService.setCurrentUser(response.data);
                            WgerApiService.cacheExercises(
                                function (exercises){
                                    //console.log(exercises.results);
                                    for(var i = 0; i < exercises.results.length; i++){
                                        $rootScope.exerciseList.push(exercises.results[i]);

                                    }
                                    //console.log($rootScope.exerciseList);
                                });
                        $location.url("/active-workout");
                    }else{
                        $scope.message = "Username and Password does not match, new User please register";
                    }
                });

        };
    }
})();





