/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .config(function($routeProvider){
            $routeProvider
                .when("#/home",{
                    templateUrl: "views/home/home.view.html",
                    controller: "HomeController"
                })
                .when("#/admin",{
                    templateUrl: "views/admin/admin.view.html",
                    controller: "AdminController"
                })
                .when("#/forms",{
                    templateUrl: "views/forms/forms.view.html",
                    controller: "FormController"
                })
                .when("#/fields",{
                    templateUrl: "views/forms/fields.view.html",
                    controller: "FieldsController"
                })
                .when("#/login",{
                    templateUrl: "views/users/login.view.html",
                    controller: "LoginController"
                })
                .when("#/profile",{
                    templateUrl: "views/users/profile.view.html",
                    controller: "ProfileController"
                })
                .when("#/register",{
                    templateUrl: "views/users/register.view.html",
                    controller: "RegisterController"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();