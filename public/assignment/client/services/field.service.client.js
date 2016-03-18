/**
 * Created by Naveen on 3/18/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("FieldService",FieldService);

    function FieldService($rootScope){

        var service = {
            createFieldForForm: createFieldForForm,
            getFieldsForForm: getFieldsForForm,
            getFieldForForm: getFieldForForm,
            deleteFieldFromForm: deleteFieldFromForm,
            updateField: updateField
        };

        return service;

        function createFieldForForm (formId,field){
            var url = "/api/assignment/form/"+formId+"/field";
            return $http.post(url,field);
        }

        function getFieldsForForm (formId,field){
            var url = "/api/assignment/form/"+formId+"/field";
            return $http.get(url,field);
        }

        function getFieldForForm (formId,fieldId){
            var url = "/api/assignment/form/"+formId+"/field/"+fieldId;
            return $http.get(url);
        }

        function deleteFieldFromForm(formId,fieldId){
            var url = "/api/assignment/form/"+formId+"/field/"+fieldId;
            return $http.get(url);
        }

        function updateField(formId,fieldId,field){
            var url = "/api/assignment/form/"+formId+"/field/"+fieldId;
            return $http.post(url,field);
        }
    }
})();