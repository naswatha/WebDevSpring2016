/** * Created by Naveen on 3/1/2016. */
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
            var form = {
                _id: (new Date).getTime(),
                title: form.name,
                userId: userId
            };
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

        FormService.deleteFormById = function(formId,currentUserForms,callback) {

            var formIndex;
            for(formIndex in currentUserForms){
                var form = currentUserForms[formIndex];
                if(formId === form._id){
                    currentUserForms.splice(formIndex, 1);
                    callback(currentUserForms);
                }
            }
        };

        FormService.updateFormById = function(formId, newForm, callback) {

            var formIndex;
            for(formIndex in Forms){
                var form = Forms[formIndex];
                if(formId === form._id){
                    form.title = newForm.title;
                    callback(form);
                }
            }
        };

        FormService.setLoggedUserForms = function (Forms) {
            $rootScope.loggedUserForms = Forms;
        };



        return {
            Forms: Forms,
            createFormForUser: FormService.createFormForUser,
            findAllFormsForUser : FormService.findAllFormsForUser,
            deleteFormById : FormService.deleteFormById,
            updateFormById : FormService.updateFormById,
            setLoggedUserForms : FormService.setLoggedUserForms
        };

    }
})();