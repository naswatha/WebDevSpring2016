/**
 * Created by Naveen on 3/31/2016.
 */
module.exports = function(mongoose){

    var FieldSchema = require('./field.schema.server.js')(mongoose);

    var FormSchema = mongoose.Schema({

        "userId": String,
        "title": String,
        "field": [FieldSchema],
        "created": Date,
        "udpated": Date
    },{collection: 'form'});

    return FormSchema;
};