/**
 * Created by Naveen on 3/2/2016.
 */
(function(){
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .config(configuration);

    function configuration ($routeProvider){
        console.log("config about to execute loggedin");
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
            .when("/exercise-search",{
                templateUrl: "views/exercise/exercise-search.view.html",
                controller: "ExerciseSearchController",
                resolve: {
                    loggedin: checkCurrentUser
                }
            })
            .when("/active-workout",{
                templateUrl: "views/workout/active-workout.view.html",
                controller: "ActiveWorkoutController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/my-workouts",{
                templateUrl: "views/workout/my-workouts.view.html",
                controller: "MyWorkoutController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/public-workouts",{
                templateUrl: "views/workout/public-workouts.view.html",
                controller: "PublicWorkoutController",
                resolve: {
                    loggedin: checkCurrentUser
                }
            })
            .when("/create-workout",{
                templateUrl: "views/workout/create-workout.view.html",
                controller: "CreateWorkoutController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/view-workout",{
                templateUrl: "views/workout/view-workout.view.html",
                controller: "ViewWorkoutController",
                resolve: {
                    loggedin: checkCurrentUser
                }
            })
            .otherwise({
                redirectTo: "/home"
            });
    }

    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){
        var deferred = $q.defer();
        console.log("Inside checkLoggedin");
        $http.get("/api/project/user/loggedin").success(function(user){

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

        $http.get("/api/project/user/loggedin").success(function(user)
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