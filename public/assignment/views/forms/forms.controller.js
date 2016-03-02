/**
 * Created by Naveen on 2/25/2016.
 */
(function() {
    "use strict"
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, $rootScope, $location, FormService) {

        // Using the FormService, get the current array of forms for the currently
        // logged in user and make them available for the view to render
        var loggedUserForms = function(userForms){
            FormService.setLoggedUserForms(userForms);
        };
        FormService.findAllFormsForUser($rootScope.loggedUser._id,loggedUserForms);


        //event handler addForm()
        var addUserForms = function(form) {
            var loggedUserForms = $rootScope.loggedUserForms;
            if (loggedUserForms != null) {
                loggedUserForms.push(form);
            }
            FormService.setLoggedUserForms(loggedUserForms);
            $scope.form = null;
        };

        $scope.addForm = function(form) {
            FormService.createFormForUser($rootScope.loggedUser._id,form,addUserForms);
        };


        // update form handler
        $scope.updateForm = function(form) {
            if(formIndex != null) {
                var currentUserForms = $rootScope.loggedUserForms;
                currentUserForms[formIndex].title = form.name;
                FormService.setLoggedUserForms(currentUserForms);
                $scope.form = null;
                formIndex = null;
            }
        };


        var formIndex;
        //event handler selectForm
        $scope.selectForm = function(index) {

            formIndex = index;
            $scope.form = $rootScope.loggedUserForms[index];
            $scope.form.name = $scope.form.title;

        };


        // delete form handler
        var deleteUserForms = function(userForms) {
            FormService.setLoggedUserForms(userForms);
        };

        $scope.deleteForm = function(index) {
            var currentUserForms = $rootScope.loggedUserForms;
            FormService.deleteFormById(currentUserForms[index]._id,currentUserForms,deleteUserForms);
        }






    }

})();