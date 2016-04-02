/**
 * Created by Naveen on 3/31/2016.
 */
"use strict";

module.exports = function(mongoose) {

    var FieldSchema = mongoose.Schema({

        label: String,
        type: {type: String, enum: ["TEXT", "TEXTAREA", "EMAIL", "PASSWORD", "OPTIONS", "DATE", "RADIOS", "CHECKBOXES"]},
        placeholder: String,
        options: [{label:String, value:String}]
    });
    return FieldSchema;
};