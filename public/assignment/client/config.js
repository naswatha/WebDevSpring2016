/**
 * Created by Naveen on 2/25/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .config(configuration);

    function configuration ($routeProvider){
            $routeProvider
                .when("/home",{
                    templateUrl: "views/home/home.view.html",
                    controller: "HomeController",
                    resolve: {
                        loggedin: checkCurrentUser
                    }
                })
                .when("/admin",{
                    templateUrl: "views/admin/admin.view.html",
                    controller: "AdminController",
                    resolve: {
                        loggedin: checkLoggedin
                    }
                })
                .when("/forms",{
                    templateUrl: "views/forms/forms.view.html",
                    controller: "FormController",
                    resolve: {
                        loggedin: checkLoggedin
                    }
                })
                .when("/form/:formId/fields",{
                    templateUrl:"views/forms/field.view.html",
                    controller:"FieldController",
                    resolve: {
                        loggedin: checkLoggedin
                    }
                })
                .when("/login",{
                    templateUrl: "views/users/login.view.html",
                    controller: "LoginController"
                })
                .when("/profile",{
                    templateUrl: "views/users/profile.view.html",
                    controller: "ProfileController",
                    resolve: {
                        loggedin: checkLoggedin
                    }
                })
                .when("/register",{
                    templateUrl: "views/users/register.view.html",
                    controller: "RegisterController"
                })
                .otherwise({
                    redirectTo: "/home"
                });
        }

    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){
        var deferred = $q.defer();
        console.log("Inside checkLoggedin");
        $http.get("/api/assignment/user/loggedin").success(function(user){

            if(user) {
                $rootScope.loggedUser = user;
                deferred.resolve();
            } else {
                deferred.reject();
                $location.url("/home");
            }
        });

        return deferred.promise;
    };

    var checkCurrentUser = function($q, $timeout, $http, $location, $rootScope)
    {
        var deferred = $q.defer();
        console.log("Inside checkCurrentUser");
        $http.get("/api/assignment/user/loggedin").success(function(user)
        {
            $rootScope.errorMessage = null;
            // User is Authenticated
            if (user)
            {
                $rootScope.loggedUser = user;

            }
            deferred.resolve();
        });
        return deferred.promise;
    };

})();