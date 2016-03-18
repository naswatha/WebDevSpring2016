/**
 * Created by Naveen on 3/16/2016.
 */
"use strict";
module.exports = function(app){

    var forms = require("./form.mock.json");

    var api = {

        create: create,
        findAll: findAll,
        findById: findById,
        update: update,
        remove: remove,
        findFormByUserId: findFormByUserId,
        findFieldsByFormId: findFieldsByFormId,
        findFieldById: findFieldById,
        removeField: removeField,
        createField: createField,
        updateField: updateField
    };

    return api;

    function create(userId, form) {

        form.userId = userId;
        form._id = (new Date).getTime();
        form.fields = [];
        forms.push(form);
        return form;
    }

    function findAll() {
        return forms;
    }

    function findById(id) {
        for(var i = 0; i < forms.length; i++) {
            var form = forms[i];
            if(form._id == id){
                return form;
            }
        }
        return null;
    }

    function findFormByUserId(userId){
        var found = [];
        for(var i = 0; i < forms.length; i++) {
            var form = forms[i];
            if(form.userId == userId){
                found.push(form);
            }
        }
        return found;
    }

    function update(id, form){
        for(var i = 0; i < forms.length; i++) {
            if(forms[i]._id == id) {
                forms[i] = form;
                return;
            }
        }
    }

    function remove(id){
        for(var i = 0; i <  forms.length; i++){
            if(forms[i]._id == id){
                forms.splice(i, 1);
                return;
            }
        }
    }

    function findFieldsByFormId(id){
        for(var i = 0; i < forms.length; i++) {
            var form = forms[i];
            if(form._id == id){
                return form.fields;
            }
        }
        return null;
    }

    function findFieldById(formId, fieldId){

        for(var j = 0; j < forms.length; j++) {
            if(forms[j]._id == formId){
                for (var i = 0; i < forms[j].fields.length; i++) {
                    var field = forms[j].fields[i];
                    if (field._id == fieldId) {
                        return field;
                    }
                }
            }
        }
        return null;
    }

    function removeField(formId, fieldId){

        for(var j = 0; j < forms.length; j++) {
            if(forms[j]._id == formId){
                for (var i = 0; i < forms[j].fields.length; i++) {
                    if(forms[j].fields[i]._id == fieldId){
                        forms[j].fields.splice(i, 1);
                        return forms[j].fields;
                    }
                }
            }
        }
    }

    function createField(formId, field){

        field._id = (new Date).getTime();
        for(var i = 0; i < forms.length; i++){
            if(forms[i]._id == formId){
                forms[i].fields.push(field);
                return forms[i].fields;
            }
        }
    }

    function updateField(formId, fieldId, field){

        for(var j = 0; j < forms.length; j++) {
            if(forms[j]._id == formId){
                for (var i = 0; i < forms[j].fields.length; i++) {
                    if(forms[j].fields[i]._id == fieldId){
                        forms[j].fields[i] = field;
                        return forms[j].fields;
                    }
                }
            }
        }
    }

};
