/**
 * Created by Naveen on 4/14/2016.
 */
module.exports = function(mongoose){

    var WorkoutSchema = mongoose.Schema({

        "name": String,
        "description": String,
        "public": { type: Boolean, default: false },
        "numWeeks": { type: Number, min: 1, max: 28 },
        "created": {type:Date, default:new Date()},
        "username": String,
        "active": { type: Boolean, default: false },
        "weeks":
            [{
                "weekNum": { type: Number, min: 1, max: 28 },
                "Sunday":
                    {
                        "dayCompleted": { type: Boolean, default: false },
                        "sunExerDet":[{
                            "exer": { name: String, id: Number},
                            "repsTarget": [{type: Number, min: 0, max: 50}],
                            "repsAchieved": [{type: Number, min: 0, max: 50}]
                        }]
                    },
                "Monday":
                {
                    "dayCompleted": { type: Boolean, default: false },
                    "monExerDet":[{
                        "exer": { name: String, id: Number},
                        "repsTarget": [{type: Number, min: 0, max: 50}],
                        "repsAchieved": [{type: Number, min: 0, max: 50}]
                    }]
                },
                "Tuesday":
                {
                    "dayCompleted": { type: Boolean, default: false },
                    "tueExerDet":[{
                        "exer": { name: String, id: Number},
                        "repsTarget": [{type: Number, min: 0, max: 50}],
                        "repsAchieved": [{type: Number, min: 0, max: 50}]
                    }]
                },
                "Wednesday":
                {
                    "dayCompleted": { type: Boolean, default: false },
                    "wedExerDet":[{
                        "exer": { name: String, id: Number},
                        "repsTarget": [{type: Number, min: 0, max: 50}],
                        "repsAchieved": [{type: Number, min: 0, max: 50}]
                    }]
                },
                "Thursday":
                {
                    "dayCompleted": { type: Boolean, default: false },
                    "thurExerDet":[{
                        "exer": { name: String, id: Number},
                        "repsTarget": [{type: Number, min: 0, max: 50}],
                        "repsAchieved": [{type: Number, min: 0, max: 50}]
                    }]
                },
                "Friday":
                {
                    "dayCompleted": { type: Boolean, default: false },
                    "friExerDet":[{
                        "exer": { name: String, id: Number},
                        "repsTarget": [{type: Number, min: 0, max: 50}],
                        "repsAchieved": [{type: Number, min: 0, max: 50}]
                    }]
                },
                "Saturday":
                {
                    "dayCompleted": { type: Boolean, default: false },
                    "satExerDet":[{
                        "exer": { name: String, id: Number},
                        "repsTarget": [{type: Number, min: 0, max: 50}],
                        "repsAchieved": [{type: Number, min: 0, max: 50}]
                    }]
                }
            }]
    },{collection: 'project.workout'});

    return WorkoutSchema;
};