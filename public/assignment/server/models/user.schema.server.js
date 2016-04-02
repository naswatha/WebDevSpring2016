/**
 * Created by Naveen on 3/31/2016.
 */
module.exports = function(mongoose){

    var UserSchema = mongoose.Schema({

        "username": String,
        "password": String,
        "firstName": String,
        "lastName": String,
        "emails": [String],
        "phones": [String]
    },{collection: 'user'});

    return UserSchema;
};