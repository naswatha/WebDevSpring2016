/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("AdminController",AdminController);

    function AdminController($scope,$location,UserService){
        UserService.getCurrentUser().then(
            function(response){
                UserService.setCurrentUser(response.data);
            });
    }

})();