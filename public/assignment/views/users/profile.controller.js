/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController",ProfileController);

    function ProfileController ($scope,$location,$rootScope,UserService){

        $scope.User = $rootScope.currentUser;



    }

})();


