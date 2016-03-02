/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController",ProfileController);

    //inject UserServiec
    function ProfileController ($scope,$rootScope,UserService){

        //retreive current user.
        $scope.user = $rootScope.loggedUser;

        //callback does not have to return anything
        //no location change for updating profile.
        var callback = function(userResponse){
        };

        //update handler
        $scope.update = function(user){
            UserService.updateUser($scope.user._id,user,callback);
        };
    }
})();


