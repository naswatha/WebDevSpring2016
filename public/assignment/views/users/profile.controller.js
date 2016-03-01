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
        $scope.User = $rootScope.currentUser;

        var callback = function(userResponse){
        };

        //
        $scope.update = function(user){
            UserService.updateUser($scope.user._id,user,callback);
        };
    }
})();


