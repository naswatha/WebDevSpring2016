/**
 * Created by Naveen on 3/2/2016.
 */
(function(){
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("ProfileController",ProfileController);

    //inject UserServiec
    function ProfileController ($scope,$rootScope,$location,UserService){


        $scope.message = null;

        UserService
            .getCurrentUser()
            .then(function (res) {


                $rootScope.loggedUser = res.data;
                $scope.user = $rootScope.loggedUser;
                if($rootScope.loggedUser == null || $rootScope.loggedUser==""){

                    $scope.loginFlag = true;
                }
                $scope.subscriberList = $scope.user.subscribeTo;
            });




        //update handler
        $scope.update = function(user){

            if(!user.username || user.username == null){
                $scope.message = "Please enter Username";
                return;
            }

            if(user.password == null){
                $scope.message = "Please enter Password";
                return;
            }

            if(!user.firstName || user.firstName == null){
                $scope.message = "Please enter FirstName";
                return;
            }

            if(!user.lastName || user.lastName == null){
                $scope.message = "Please enter LastName";
                return;
            }

            UserService.updateUser($scope.user._id,user).then(
                function (response){
                    $rootScope.loggedUser = response.data;
                    console.log($rootScope.loggedUser);
                    $location.path('/profile');
                });

        };

        // delete user from subscription list
        $scope.removeSubscription = function(subscribeTo){
            UserService.removeFromSubscribeList(subscribeTo,$scope.loggedUser.username).then(
                function(response){
                    $scope.user = response.data;
                    $rootScope.loggedUser = response.data;
                    $scope.subscriberList = $scope.user.subscribeTo;
                });
        };
    }
})();