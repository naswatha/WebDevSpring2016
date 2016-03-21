/**
 * Created by Naveen on 3/2/2016.
 */
(function(){
    "use strict"
    angular
        .module("WorkoutBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($location, $scope, $rootScope) {
        $scope.logout = function() {
            $rootScope.loggedUser = null;
        }
    }
})();