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

        };

        FormService.findAllFormsForUser = function(userId, callback) {

        };

        FormService.deleteFormById = function(formId, callback) {

        };

        FormService.updateFormById = function(formId, newForm, callback) {

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




