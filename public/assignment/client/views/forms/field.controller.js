/**
 * Created by Naveen on 2/25/2016.
 */
/**
 * Created by Naveen on 2/25/2016.
 */
(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);

    function FieldController($scope, $rootScope, $location,$routeParams, FieldService, UserService) {

        UserService.getCurrentUser().then(
            function(response){

                UserService.setCurrentUser(response.data);
                $scope.user = response.data;
                FieldService.getFieldsForForm($scope.formId).then(
                    function (response){
                        console.log(response);
                        $scope.currentFormFields = response.data;
                    });

            });

        $scope.formId = $routeParams.formId;
        $scope.currentFormFields = {};

        $scope.addField = function(fieldType) {

            if(fieldType){
                var newField = {};
                switch(fieldType){

                    case "Single Line Text":
                        newField = {"label": "New Text Field", "type": "TEXT", "placeholder": "New Field"};
                        break;

                    case "Date":
                        newField = {"label": "New Date Field", "type": "DATE"};
                        break;

                    case "Dropdown":
                        newField = {"label": "New Dropdown", "type": "OPTIONS", "options": [
                                        {"label": "Option 1", "value": "OPTION_1"},
                                        {"label": "Option 2", "value": "OPTION_2"},
                                        {"label": "Option 3", "value": "OPTION_3"}
                                    ]};
                        break;

                    case "Checkboxes":
                        newField = {"label": "New Checkboxes", "type": "CHECKBOXES", "options": [
                                        {"label": "Option A", "value": "OPTION_A"},
                                        {"label": "Option B", "value": "OPTION_B"},
                                        {"label": "Option C", "value": "OPTION_C"}
                                    ]};
                        break;

                    case "Radio buttons":
                        newField = {"label": "New Radio Buttons", "type": "RADIOS", "options": [
                                        {"label": "Option X", "value": "OPTION_X"},
                                        {"label": "Option Y", "value": "OPTION_Y"},
                                        {"label": "Option Z", "value": "OPTION_Z"}
                                    ]};
                        break;

                    case "Multi Line Text Field":
                        newField = {"label": "New Text Field", "type": "TEXTAREA", "placeholder": "New Field"};
                        break;
                }

                FieldService.createFieldForForm($scope.formId,newField).then(
                    function (response){
                        $scope.currentFormFields = response.data;
                    });
            }//end of if

        };

        $scope.showField = function (index){

            if($scope.currentFormFields[index].type == "OPTIONS" ||
                $scope.currentFormFields[index].type == "CHECKBOXES"||
                $scope.currentFormFields[index].type == "RADIOS"){
                $scope.fieldsForModal = $scope.currentFormFields[index];
                var jsonOptions = JSON.stringify($scope.currentFormFields[index].options);
                jsonOptions = JSON.parse(jsonOptions);
                var options = "";
                for(var i = 0 ;i<jsonOptions.length; i++){
                    options += jsonOptions[i].label+","+jsonOptions[i].value+"\n";
                }
                $scope.displayModalOptions = options;
                $scope.displayModalLabel = $scope.currentFormFields[index].label;

            }else{
                $scope.fieldsForModal = $scope.currentFormFields[index];
            }
        };

        $scope.update = function (field){
            console.log(field);
            FieldService.updateField($scope.formId,field._id,field)
                .then(function(response){
                    $scope.formFields = response;
                });
        };

        $scope.deleteField = function (index){
            console.log(index);
            console.log($scope.currentFormFields[index]._id);
            FieldService.deleteFieldFromForm($scope.formId,$scope.currentFormFields[index]._id).then(
                function (response){
                    $scope.currentFormFields = response.data;
                });
        };
    }

})();