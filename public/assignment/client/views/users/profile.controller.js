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

        //console.log("profil onroller");
        //retreive current user.
        //console.log($rootScope.loggedUser);
        //$scope.user = $rootScope.loggedUser;

        //$scope.message = null;

        UserService.getCurrentUser().then(
            function (response){
                console.log("give me the current logged user");
                console.log(response.data);
                UserService.setCurrentUser(response.data);
                $scope.user = response.data;

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
                    console.log("Set updated user");
                    console.log(response.data);
                    $scope.user = response.data;
                    UserService.setCurrentUser(response.data);
                    console.log("rootscope loggeduser");
                    console.log($rootScope.loggedUser);
                    $location.path('/profile');
            });

        };

    }
})();


