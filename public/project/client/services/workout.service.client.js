/**
 * Created by Naveen on 3/10/2016.
 */
(function(){
    "use strict";
    angular
        .module("WorkoutBuilderApp")
        .factory("WorkoutService",WorkoutService);

    function WorkoutService($rootScope){
        var Workouts = [];
        Workouts = [
                    {
                        "_id":"111",
                        "name":"2 Week Beginner Workout",
                        "description":"2 Week Beginner Workout",
                        "startDate":"2016-03-12T18:25:43.511Z",
                        "public": 0,
                        "numWeek": 2,
                        "userDetails":
                            [{
                                "userId": 234,
                                "active": 1
                            }],
                        "weeks": []
                    },
                    {
                        "_id":"222",
                        "name":"Beginner Compound Workout",
                        "description":"Beginner Compound Workout",
                        "startDate":"2016-03-12T18:25:43.511Z",
                        "public": 0,
                        "numWeek": 1,
                        "userDetails":
                            [{
                                "userId": 234,
                                "active": 0
                            }],
                        "weeks": []
                    },
                    {
                        "_id":"333",
                        "name":"2 Weeks Six Pack Abs",
                        "description":"Beginner 2 week six pack abs, starting with compound exercises",
                        "startDate":"2016-03-12T18:25:43.511Z",
                        "public": 1,
                        "numWeek": 2,
                        "userDetails":
                            [{
                                "userId": 234,
                                "active": 0
                            },
                            {
                                "userId": 123,
                                "active": 0
                            }],
                        "weeks":
                            [{
                                "wDescription":"Compound exercises",
                                "Sunday":
                                    [   {
                                            "eName":"Push Up",
                                            "sets": 3,
                                            "reps": [10,12,10],
                                            "achievedReps": []

                                        },
                                        {
                                            "eName":"Pull Up",
                                            "sets": 3,
                                            "reps": [5,6,5],
                                            "achievedReps": []
                                        },
                                        {
                                            "eName":"Sit Up",
                                            "sets": 3,
                                            "reps": [15,10,12],
                                            "achievedReps": []
                                        }
                                    ],
                                "Monday":
                                    [   {
                                            "eName":"Rest",
                                            "sets": 0,
                                            "reps": [],
                                            "achievedReps": []
                                        }
                                    ],
                                "Tuesday":
                                    [   {
                                            "eName":"Side Crunch",
                                            "sets": 3,
                                            "reps": [10,12,10],
                                            "achievedReps": []

                                        },
                                        {
                                            "eName":"Pull Up",
                                            "sets": 3,
                                            "reps": [5,6,5],
                                            "achievedReps": []
                                        },
                                        {
                                            "eName": "Crunches",
                                            "sets": 3,
                                            "reps": [10,10,8],
                                            "achievedReps": []
                                        }
                                    ],
                                "Wednesday":
                                    [   {
                                            "eName":"Rest",
                                            "sets": 0,
                                            "reps": [],
                                            "achievedReps": []
                                        }
                                    ],
                                "Thursday":
                                    [   {
                                            "eName":"Crunches",
                                            "sets": 3,
                                            "reps": [10,12,10],
                                            "achievedReps": []

                                        },
                                        {
                                            "eName":"Crunches with Cable",
                                            "sets": 3,
                                            "reps": [5,6,5],
                                            "achievedReps": []
                                        },
                                        {
                                            "eName": "Negative Crunches",
                                            "sets": 3,
                                            "reps": [10,10,8],
                                            "achievedReps": []
                                        }
                                    ],
                                "Friday":
                                    [   {
                                            "eName":"Rest",
                                            "sets": 0,
                                            "reps": [],
                                            "achievedReps": []
                                        }
                                    ],
                                "Saturday":
                                    [   {
                                            "eName":"Rest",
                                            "sets": 0,
                                            "reps": [],
                                            "achievedReps": []
                                    }
                                    ]
                            },
                                {
                                    "wDescription":"Abs Concentrate",
                                    "Sunday":
                                        [   {
                                                "eName":"Push Up",
                                                "sets": 3,
                                                "reps": [10,12,10],
                                                "achievedReps": []

                                            },
                                            {
                                                "eName":"Pull Up",
                                                "sets": 3,
                                                "reps": [5,6,5],
                                                "achievedReps": []
                                            },
                                            {
                                                "eName":"Sit Up",
                                                "sets": 3,
                                                "reps": [15,10,12],
                                                "achievedReps": []
                                            }
                                        ],
                                    "Monday":
                                        [   {
                                                "eName":"Rest",
                                                "sets": 0,
                                                "reps": [],
                                                "achievedReps": []
                                            }
                                        ],
                                    "Tuesday":
                                        [   {
                                                "eName":"Side Crunch",
                                                "sets": 3,
                                                "reps": [10,12,10],
                                                "achievedReps": []

                                        },
                                            {
                                                "eName":"Pull Up",
                                                "sets": 3,
                                                "reps": [5,6,5],
                                                "achievedReps": []
                                            },
                                            {
                                                "eName": "Crunches",
                                                "sets": 3,
                                                "reps": [10,10,8],
                                                "achievedReps": []
                                            }
                                        ],
                                    "Wednesday":
                                        [   {
                                                "eName":"Rest",
                                                "sets": 0,
                                                "reps": [],
                                                "achievedReps": []
                                            }
                                        ],
                                    "Thursday":
                                        [   {
                                                "eName":"Crunches",
                                                "sets": 3,
                                                "reps": [10,12,10],
                                                "achievedReps": []

                                            },
                                            {
                                                "eName":"Crunches with Cable",
                                                "sets": 3,
                                                "reps": [5,6,5],
                                                "achievedReps": []
                                            },
                                            {
                                                "eName": "Negative Crunches",
                                                "sets": 3,
                                                "reps": [10,10,8],
                                                "achievedReps": []
                                            }
                                        ],
                                    "Friday":
                                        [   {
                                                "eName":"Rest",
                                                "sets": 0,
                                                "reps": [],
                                                "achievedReps": []
                                            }
                                        ],
                                    "Saturday":
                                        [   {
                                            "eName":"Rest",
                                            "sets": 0,
                                            "reps": [],
                                            "achievedReps": []
                                        }
                                        ]
                                }]
                    },
                    {
                        "_id":"444",
                        "name":"3 Week Beginner Strength Workout",
                        "description":"3 Week Beginner Strength Workout",
                        "startDate":"2016-03-12T18:25:43.511Z",
                        "public": 0,
                        "numWeek": 3,
                        "userDetails":
                            [{
                                "userId": 123,
                                "active": 1
                            }],
                        "weeks": []
                    }
                ];

        var service = {
            createWorkout: createWorkout,
            findAllWorkoutForUser: findAllWorkoutForUser,
            deleteWorkoutById: deleteWorkoutById,
            updateWorkoutById: updateWorkoutById,
            findAllPublicWorkouts: findAllPublicWorkouts,
            updateActiveWorkoutById: updateActiveWorkoutById,
            makeWorkoutPublicById: makeWorkoutPublicById,
            addWorkoutToMyList: addWorkoutToMyList

    };

        return service;

        function createWorkout (workout,userId,workoutDetails,callback){
            var userDet = [];
            var currentUser = {};
            currentUser.userId = userId;
            currentUser.active = 0;
            userDet.push(currentUser);

            var newWorkout = {};
            newWorkout.weeks = workout;
            newWorkout._id = (new Date).getTime();
            newWorkout.name = workoutDetails.name;
            newWorkout.description = workoutDetails.description;
            newWorkout.public = 0;
            newWorkout.userDetails = userDet;


            //console.log(newWorkout);
            Workouts.push(newWorkout);
            console.log(Workouts);
            callback(newWorkout);
        }

        function findAllPublicWorkouts (callback){
            var publicWorkouts = [];
            for(var i=0;i<Workouts.length;i++) {
                if(Workouts[i].public === 1){
                    publicWorkouts.push(Workouts[i]);
                }
            }
            callback(publicWorkouts);
        }

        function addWorkoutToMyList (workoutId,userId,publicWorkoutsList,callback){
            var userDet = {"userId":userId,"active": 0};
            for(var i=0;i<publicWorkoutsList.length;i++) {
                if(publicWorkoutsList[i].public === 1 && workoutId === publicWorkoutsList[i]._id){
                    publicWorkoutsList[i].userDetails.push(userDet);
                }
            }
            callback(publicWorkoutsList);
        }

        function findAllWorkoutForUser (userId,callback){
            var userWorkouts = [];
            for(var i=0;i<Workouts.length;i++) {
                for(var j=0;j<Workouts[i].userDetails.length; j++){
                    if(Workouts[i].userDetails[j].userId == userId){
                        userWorkouts.push(Workouts[i]);
                    }
                }
            }
            console.log(Workouts);
            console.log(userWorkouts);
            callback(userWorkouts);
        }


        function deleteWorkoutById(workoutId,userId,callback){
            for(var i=0;i<Workouts.length;i++) {
                if(Workouts[i]._id === workoutId){
                    if(Workouts[i].userDetails.length > 1){
                        for(var j=0;j<Workouts[i].userDetails.length;j++){
                            Workouts[i].userDetails.splice(j,1);
                        }
                    }
                    else{
                        Workouts.splice(i,1);
                    }
                }
            }
            callback(Workouts);
        }

        function updateActiveWorkoutById(workoutId,loggedUserWorkouts,userId,callback){
            for(var i=0;i<loggedUserWorkouts.length;i++) {
                if(loggedUserWorkouts[i]._id == workoutId) {
                    for(var j= 0;j<loggedUserWorkouts[i].userDetails.length;j++){
                        if(loggedUserWorkouts[i].userDetails[j].userId == userId){
                            loggedUserWorkouts[i].userDetails[j].active = 1;
                        }
                    }
                }
                else{
                    for(var j= 0;j<loggedUserWorkouts[i].userDetails.length;j++){
                        if(loggedUserWorkouts[i].userDetails[j].userId == userId){
                            loggedUserWorkouts[i].userDetails[j].active = 0;
                        }
                    }
                }
            }
            callback(loggedUserWorkouts);
        }

        function makeWorkoutPublicById(workoutId,loggedUserWorkouts, callback){
            for(var i=0;i<loggedUserWorkouts.length;i++) {
                if(loggedUserWorkouts[i]._id == workoutId) {
                    loggedUserWorkouts[i].public = 1;
                }
            }
            callback(loggedUserWorkouts);
        }


        function updateWorkoutById(workoutId, newWorkout,callback){
            var temp = null;
            for (var i = 0; i < Workouts.length; i++) {
                if (Workouts[i]._id == workoutId) {
                    Workouts[i] = newWorkout;
                    temp =  Workouts[i];
                }
            }
            callback(temp);
        }
    }
})();