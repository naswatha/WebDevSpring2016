/**
 * Created by Naveen on 3/16/2016.
 */
"use strict";
module.exports = function(app,model){

    app.get("/api/assignment/form/:formId/field", getFieldsByFormId);
    app.get("/api/assignment/form/:formId/field/:fieldId", getFieldByFormIdAndFieldId);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFieldByFormIdAndFieldId);
    app.post("/api/assignment/form/:formId/field", createFieldByFormId);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateFieldByFormIdAndFieldId);

    function getFieldsByFormId(req, res){

        model.findFieldsByFormId(req.params.formId).then(
            function(response){
                res.json(response.field);
            });
        //res.json(model.findFieldsByFormId(req.params.formId));
    }

    function getFieldByFormIdAndFieldId(req, res){

        model.findFieldById(req.params["formId"],req.params["fieldId"]).then(
            function(response){
                res.json(response);
            });
        //res.json(model.findFieldById(req.params.formId,req.params.fieldId));
    }

    function deleteFieldByFormIdAndFieldId(req, res){
        console.log("field service server js");
        console.log(req.params["fieldId"]);
        model.removeField(req.params["formId"], req.params["fieldId"]).then(
            function(response){
                res.json(response.field);
            });

        //res.json(model.removeField(req.params.formId,req.params.fieldId));
    }

    function createFieldByFormId(req, res){
        model.createField(req.params.formId,req.body).then(
            function (response) {
                res.json(response.field);
            });
        //res.json(model.createField(req.params.formId,req.body));
    }

    function updateFieldByFormIdAndFieldId(req, res){
        model.updateField(req.params["formId"], req.params["fieldId"], req.body).then(
            function(response){
                res.json(response.field);
            });
        //res.json(model.updateField(req.params.formId,req.params.fieldId,req.body));
    }
};