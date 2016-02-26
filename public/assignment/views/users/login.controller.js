/**
 * Created by Naveen on 2/25/2016.
 */
/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController",LoginController);

    function LoginController ($scope,$location,$rootScope,UserService){

        $scope.login = function(user){
            UserService.findUserByCredentials(user.username,user.password,callback);
            //callback assign user to root sco
        };

    }

})();


