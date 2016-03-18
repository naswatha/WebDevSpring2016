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
                    $location.path('/profile');
            });

        };

    }
})();


