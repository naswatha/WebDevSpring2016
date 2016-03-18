/** * Created by Naveen on 3/1/2016. */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("FormService",FormService);

    function FormService($rootScope){

        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };

        return service;

        function createFormForUser (userId,form){
            var url = "/api/assignment/user/"+userId+"/form";
            return $http.post(url,form);
        }

        function findAllFormsForUser (userId){
            var url = "/api/assignment/user/"+userId+"/form";
            return $http.get(url);
        }

        function deleteFormById (formId){
            var url = "/api/assignment/form/"+formId;
            return $http.delete(url);
        }

        function updateFormById (formId, newForm){
            var url = "/api/assignment/form/"+formId;
            return $http.post(url,newForm);
        }
    }
})();