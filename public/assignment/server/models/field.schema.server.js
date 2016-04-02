/**
 * Created by Naveen on 3/31/2016.
 */
module.exports = function(mongoose){

    var FieldSchema = mongoose.Schema({

        "label": String,
        "type": {type: String, default: "TEXT"},
        "placeholder": String,
        "options": [{
            "label": String,
            "value": String
        }]
    },{collection: "form"});

    return FieldSchema;
};