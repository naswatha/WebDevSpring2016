/**
 * Created by Naveen on 2/25/2016.
 */
(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($rootScope, $scope, $location, UserService) {

        var callback = function(userResponse) {
            if (userResponse!=null) {
                //setting the currentUser using userResponse in service with $rootscope
                UserService.setCurrentUser(userResponse);
                //move to profile.
                $location.url("/profile");
            }
        };

        // login handler
        $scope.login = function(user) {
            UserService.findUserByCredentials(user.username,user.password,callback);
        };

    }

})();


