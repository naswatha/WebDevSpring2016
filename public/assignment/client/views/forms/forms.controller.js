/**
 * Created by Naveen on 2/25/2016.
 */
(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, $rootScope, $location, FormService,UserService) {

        UserService.getCurrentUser().then(
            function(response){
                $scope.user = response.data;
                UserService.setCurrentUser(response.data);
                FormService.findAllFormsForUser($scope.user._id).then(
                    function(response){
                        $scope.loggedUserForms = response.data;
                    });
            });

        $scope.selectedFormIndex = null;
        var currentForm = {};

        $scope.addForm = function() {
            if($scope.formName!=null) {
                currentForm.title = $scope.formName;
                FormService.createFormForUser($scope.user._id, currentForm).then(
                    function(response){
                        $scope.loggedUserForms.push(response.data);
                    });
                $scope.formName = null;
                currentForm = {};
            }
        };

        $scope.updateForm = function(){
            if($scope.formName!=null && $scope.selectedFormIndex!=null) {
                currentForm = $scope.loggedUserForms[$scope.selectedFormIndex];
                currentForm.title = $scope.formName;
                FormService.updateFormById(currentForm._id, currentForm).then(
                    function (response){
                        $scope.loggedUserForms[$scope.selectedFormIndex] = response.data;
                    });
                currentForm = {};
                $scope.formName = null;
                $scope.selectedFormIndex = null;
            }
        };

        $scope.deleteForm = function(index){
            currentForm = $scope.loggedUserForms[index];
            FormService.deleteFormById(currentForm._id).then(
                function(response){
                    $scope.loggedUserForms.splice(index,1);
                });
        };

        $scope.selectForm = function(index){
            $scope.selectedFormIndex = index;
            $scope.formName = $scope.loggedUserForms[index].title;
        }
    }

})();