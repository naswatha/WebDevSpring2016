/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict"
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($location, $scope, $rootScope,UserService) {
        $scope.logout = function() {

            UserService.logout().then(
                function(response){
                    $rootScope.loggedUser = null;
                });



        }
    }
})();