/**
 * Created by Naveen on 3/2/2016.
 */
(function(){
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($location, $scope, $rootScope,UserService) {
        $scope.logout = function() {
            UserService.setCurrentUser(null);
            UserService.logout();
            $location.url("/home");
            console.log($rootScope.loggedUser);
            //$rootScope.loggedUser = null;
            //$location.url("/home");
        }
    }
})();