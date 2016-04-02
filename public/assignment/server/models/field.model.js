/**
 * Created by Naveen on 4/2/2016.
 */
"use strict";

var q = require("q");

module.exports = function(mongoose, assignmentDb) {

    var FormSchema = require('./form.schema.server.js')(mongoose);
    var FormModel = mongoose.model("Field", FormSchema);

    var api = {

        findFieldsByFormId: findFieldsByFormId,
        findFieldById: findFieldById,
        removeField: removeField,
        createField: createField,
        updateField: updateField
        //AddFormField: AddFormField,
        //FindAllFields: FindAllFields,
        //FindFieldById: FindFieldById,
        //UpdateFormField: UpdateFormField,
        //DeleteFormField: DeleteFormField,
        //ReorderFormFields: ReorderFormFields
    };
    return api;

    function findFieldsByFormId(id){

        var deferred = q.defer();
        FormModel.findById({_id: id},
            function (err, forms) {
                if (err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(forms);
                }
        });
        return deferred.promise;
        //for(var i = 0; i < forms.length; i++) {
        //    var form = forms[i];
        //    if(form._id == id){
        //        return form.fields;
        //    }
        //}
        //return null;
    }


    function findFieldById(formId, fieldId){

        var deferred = q.defer();
        FormModel.findById({_id: formId},
            function (err, form) {
                if (err) {
                    deferred.reject(err);
                }
                else {
                    var fields = form.field;
                    for(var i in fields){
                        if(fields[i]._id == fieldId){
                            deferred.resolve(fields[i]);
                            break;
                        }
                    }
                }
        });
        return deferred.promise;
        //for(var j = 0; j < forms.length; j++) {
        //    if(forms[j]._id == formId){
        //        for (var i = 0; i < forms[j].fields.length; i++) {
        //            var field = forms[j].fields[i];
        //            if (field._id == fieldId) {
        //                return field;
        //            }
        //        }
        //    }
        //}
        //return null;
    }

    function removeField(formId, fieldId){

        var deferred = q.defer();
        console.log(formId);
        console.log(fieldId);
        FormModel.findById(formId,
            function(err, form){
                if(err) {
                    deferred.reject(err);
                }
                else {
                    console.log(form);
                    var formFields = form.field;
                    for(var i=0; i<formFields.length; i++){
                        if(formFields[i]._id == fieldId){
                            formFields.splice(i,1);
                        }
                    }
                form.field = formFields;
                form.save(
                    function(err, updatedForm) {
                        if(err) {
                            deferred.reject(err);
                        }
                        else {
                            deferred.resolve(updatedForm);
                        }
                });
            }
        });
        return deferred.promise;
        //for(var j = 0; j < forms.length; j++) {
        //    if(forms[j]._id == formId){
        //        for (var i = 0; i < forms[j].fields.length; i++) {
        //            if(forms[j].fields[i]._id == fieldId){
        //                forms[j].fields.splice(i, 1);
        //                return forms[j].fields;
        //            }
        //        }
        //    }
        //}
    }

    function createField(formId, field){

        //console.log(field);
        var deferred = q.defer();

        FormModel.findById({_id : formId},
            function(err,form){
                if(err){
                    deferred.reject(err);
                }
                else{
                    if(field._id){
                        delete field._id;
                    }
                    //console.log(form);
                    var fields = form.field;
                    fields.push(field);
                    form.field = fields;
                    form.save(
                        function(err,updatedForm){
                            if(err)
                            {
                                deferred.reject(err);
                            }
                            else
                            {
                                deferred.resolve(updatedForm);
                            }
                        });
                }
        });
        return deferred.promise;
        //field._id = (new Date).getTime();
        //for(var i = 0; i < forms.length; i++){
        //    if(forms[i]._id == formId){
        //        forms[i].fields.push(field);
        //        return forms[i].fields;
        //    }
        //}
    }

    function updateField(formId, fieldId, field){

        var deferred = q.defer();

        FormModel.findById({_id: formId},
            function (err, form) {
                if (err) {
                    deferred.reject(err);
                }
                else {
                    var fields = form.field;
                    for (var i in fields) {
                        if (fields[i]._id == fieldId) {
                            fields[i] = field;
                            break;
                        }
                    }
                    form.field = fields;
                    form.save(
                        function(err,updatedForm){
                            if(err)
                            {
                                deferred.reject(err);
                            }
                            else
                            {
                                deferred.resolve(updatedForm);
                            }
                        });
                }
        });
        return deferred.promise;
        //for(var j = 0; j < forms.length; j++) {
        //    if(forms[j]._id == formId){
        //        for (var i = 0; i < forms[j].fields.length; i++) {
        //            if(forms[j].fields[i]._id == fieldId){
        //                forms[j].fields[i] = field;
        //                return forms[j].fields;
        //            }
        //        }
        //    }
        //}
    }


};