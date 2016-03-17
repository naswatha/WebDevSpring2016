/**
 * Created by Naveen on 3/16/2016.
 */
module.exports = function(app,model){

    app.get("/api/assignment/form/:formId/field", getFieldsByFormId);
    app.get("/api/assignment/form/:formId/field/:fieldId", getFieldByFormIdAndFieldId);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFieldByFormIdAndFieldId);
    app.post("/api/assignment/form/:formId/field", createFieldByFormId);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateFieldByFormIdAndFieldId);

    function getFieldsByFormId(req, res){
        res.json(model.findFieldsByFormId(req.params.formId));
    }

    function getFieldByFormIdAndFieldId(req, res){
        res.json(model.findFieldById(req.params.formId,req.params.fieldId));
    }

    function deleteFieldByFormIdAndFieldId(req, res){
        res.json(model.removeField(req.params.formId,req.params.fieldId));
    }

    function createFieldByFormId(req, res){
        res.json(model.createField(req.params.formId,req.body));
    }

    function updateFieldByFormIdAndFieldId(req, res){
        res.json(model.updateField(req.params.formId,req.params.fieldId));
    }
};