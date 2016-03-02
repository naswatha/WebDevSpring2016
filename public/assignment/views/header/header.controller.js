/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict"
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($location, $scope, $rootScope) {
        $scope.logout = function() {
            $rootScope.loggedUser = null;
        }
    }
})();