/**
 * Created by Naveen on 3/16/2016.
 */
"use strict";
var q = require("q");
module.exports = function(mongoose, webDevDb){

    //var forms = require("./form.mock.json");
    var FormSchema = require("./form.schema.server.js")(mongoose);
    var FormModel = mongoose.model('Form',FormSchema);

    var api = {

        create: create,
        findAll: findAll,
        findById: findById,
        update: update,
        remove: remove,
        findFormByUserId: findFormByUserId,
        findFormByTitle: findFormByTitle
        //findFieldsByFormId: findFieldsByFormId,
        //findFieldById: findFieldById,
        //removeField: removeField,
        //createField: createField,
        //updateField: updateField
    };

    return api;

    function create(userId, form) {

        var deferred = q.defer();
        form.userId = userId;
        form.created = new Date();
        form.fields = [];
        FormModel.create(form,
            function(err, createdForm) {
                if(err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(createdForm);
                }
        });
        return deferred.promise;

    }

    function findAll() {
        var deferred = q.defer();
        FormModel.find(
            function(err, forms) {
                if(err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(forms);
                }
        });
        return deferred.promise;
    }

    function findById(id) {

        var deferred = q.defer();
        FormModel.findById(id,
            function(err, form) {
                if(err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(form);
                }
        });
        return deferred.promise;
        //for(var i = 0; i < forms.length; i++) {
        //    var form = forms[i];
        //    if(form._id == id){
        //        return form;
        //    }
        //}
        //return null;
    }

    function findFormByUserId(userId){
        var deferred = q.defer();
        FormModel.find({userId: userId},
            function(err, forms) {
                if(err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(forms);
                }
        });
        return deferred.promise;

        //var found = [];
        //for(var i = 0; i < forms.length; i++) {
        //    var form = forms[i];
        //    if(form.userId == userId){
        //        found.push(form);
        //    }
        //}
        //return found;
    }

    function update(id, form){
        var deferred = q.defer();

        FormModel.findById(id,
            function(err, formToUpdate) {
                if(err) {
                    deferred.reject(err);
                }
                else {
                    formToUpdate.title = form.title;
                    formToUpdate.udpated = new Date();
                    formToUpdate.save(
                        function(err, updatedForm) {
                            deferred.resolve(updatedForm);
                    });
                }
        });

        return deferred.promise;
        //for(var i = 0; i < forms.length; i++) {
        //    if(forms[i]._id == id) {
        //        forms[i] = form;
        //        return;
        //    }
        //}
    }

    function remove(id){
        var deferred = q.defer();
        FormModel.remove({_id:id},
            function(err, status) {
                if(err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(status);
                }
        });
        return deferred.promise;
        //for(var i = 0; i <  forms.length; i++){
        //    if(forms[i]._id == id){
        //        forms.splice(i, 1);
        //        return;
        //    }
        //}
    }

    function findFormByTitle(title){

        var deferred = q.defer();
        FormModel.findOne({title: title},
            function(err, form) {
                if(err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(form);
                }
        });
        return deferred.promise;
    }



};
