/**
 * Created by Naveen on 3/2/2016.
 */
(function(){
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .controller("HomeController",HomeController);

    function HomeController($scope,$location,UserService,$rootScope){

        //console.log($rootScope.loggedUser);
        //UserService.setCurrentUser($rootScope.loggedUser);
        //
        UserService
            .getCurrentUser()
            .then(function (res) {
                console.log("Inside home");
                $rootScope.loggedUser = res.data;
                $scope.user = $rootScope.loggedUser;
                console.log(res.data);
            });
    }

})();