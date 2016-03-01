/**
 * Created by Naveen on 3/1/2016.
 */

(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("FormService",FormService);

    function FormService($rootScope){
        var Forms = [];
        Forms = [
            {
                "_id":"000",
                "title":"Contacts",
                "userId":123
            },
            {
                "_id":"010",
                "title":"ToDo",
                "userId":123
            },
            {
                "_id":"020",
                "title":"CDs",
                "userId":234
            }

        ];


        FormService.createFormForUser = function(userId, form, callback) {
            form._id = (new Date).getTime();
            Forms.push(form);
            callback(form);

        };

       FormService.findAllFormsForUser = function(userId, callback) {

            var formIndex;
            var userForms = [];
            for(formIndex in Forms){
                var form = Forms[formIndex];
                if(userId === form.userId){
                    userForms.push(form);
                }
            }
            callback(userForms);
        };

        FormService.deleteFormById = function(formId, callback) {

            var formIndex;
            for(formIndex in Forms){
                var form = Forms[formIndex];
                if(formId === form._id){
                    Forms.splice(formIndex, 1);
                    callback(Forms);
                }
            }
        };

        FormService.updateFormById = function(formId, newForm, callback) {

            var formIndex;
            for(formIndex in Forms){
                var form = Forms[formIndex];
                if(formId === form._id){
                    form = newForm;
                    callback(form);
                }
            }
        };



        return {
            Users: Users,
            createFormForUser: FormService.createFormForUser,
            findAllFormsForUser : FormService.findAllFormsForUser,
            deleteFormById : FormService.deleteFormById,
            updateFormById : FormService.updateFormById
        };

    }
})();




