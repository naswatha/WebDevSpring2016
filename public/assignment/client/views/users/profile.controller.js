/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController",ProfileController);

    //inject UserServiec
    function ProfileController ($scope,$rootScope,$location,UserService){

        //retreive current user.
        $scope.user = $rootScope.loggedUser;

        $scope.message = null;
        //console.log("Profile");
        //console.log($scope.user);

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

            console.log($scope.user._id);
            console.log(user);
            UserService.updateUser($scope.user._id,user).then(
                function (response){
                    console.log(response.data);
                    $rootScope.loggedUser = response.data;
                    $location.path('/profile');
            });

        };

    }
})();


