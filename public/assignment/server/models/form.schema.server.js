/**
 * Created by Naveen on 3/31/2016.
 */
module.exports = function(mongoose){

    var FieldSchema = require("./field.schema.server.js");

    var FormSchema = mongoose.Schema({

        userId: String,
        title: {type:String, default:'New Form'},
        fields: [{type:mongoose.Schema.Types.Object, ref:'field'}],
        created: {type:Date, default:new Date()},
        updated: {type:Date, default:new Date()}
    }, {collection: 'form'});

    return FormSchema;
};