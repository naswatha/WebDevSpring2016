/**
 * Created by Naveen on 4/14/2016.
 */
module.exports = function(mongoose){

    var UserSchema = mongoose.Schema({

        "username": String,
        "password": String,
        "firstName": String,
        "lastName": String,
        "email": String,
        "createdDate": {type:Date, default:new Date()},
        "subscribeTo": [String],
        "admin": { type: Boolean, default: false }
    },{collection: 'project.user'});

    return UserSchema;
};