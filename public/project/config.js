/**
 * Created by Naveen on 3/2/2016.
 */
(function(){
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .config(configuration);

    function configuration ($routeProvider){
        $routeProvider
            .when("/home",{
                templateUrl: "views/home/home.view.html"
                //controller: "HomeController"
            })
            .when("/admin",{
                templateUrl: "views/admin/admin.view.html"
                //controller: "AdminController"
            })
            .when("/login",{
                templateUrl: "views/users/login.view.html",
                controller: "LoginController"
            })
            .when("/profile",{
                templateUrl: "views/users/profile.view.html",
                controller: "ProfileController"
            })
            .when("/register",{
                templateUrl: "views/users/register.view.html",
                controller: "RegisterController"
            })
            .when("/exercise-search",{
                templateUrl: "views/exercise/exercise-search.view.html",
                controller: "ExerciseSearchController"
            })
            .when("/active-workout",{
                templateUrl: "views/workout/active-workout.view.html"
                //controller: "ExerciseSearchController"
            })
            .when("/my-workouts",{
                templateUrl: "views/workout/my-workouts.view.html",
                controller: "MyWorkoutController"
            })
            .when("/public-workouts",{
                templateUrl: "views/workout/public-workouts.view.html",
                controller: "PublicWorkoutController"
            })
            .when("/create-workout",{
                templateUrl: "views/workout/create-workout.view.html"
                //controller: "ExerciseSearchController"
            })
            .when("/view-workout",{
                templateUrl: "views/workout/view-workout.view.html",
                controller: "ViewWorkoutController"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();