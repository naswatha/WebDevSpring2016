/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("HomeController",HomeController);

    function HomeController($scope,$location,UserService){
        UserService.getCurrentUser().then(
            function(response){
                UserService.setCurrentUser(response.data);
            });
    }

})();