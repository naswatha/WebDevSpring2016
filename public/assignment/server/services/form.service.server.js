/**
 * Created by Naveen on 3/16/2016.
 */

"use strict";

module.exports = function(app,model){

    app.get("/api/assignment/user/:userId/form", getFormByUserId);
    app.get("/api/assignment/form/:formId", getFormById);
    app.delete("/api/assignment/form/:formId", deleteForm);
    app.post("/api/assignment/user/:userId/form", create);
    app.put("/api/assignment/form/:formId", update);

    function getFormByUserId(req, res){
        res.json(model.findFormByUserId(req.params.userId));
    }

    function getFormById(req, res){
        console.log(res.json(model.findById(req.params.formId)));
        res.json(model.findById(req.params.formId));
    }

    function deleteForm(req, res){
        res.json(model.remove(req.params.formId));
    }

    function create(req, res){
        res.json(model.create(req.params.userId,req.body));
    }

    function update(req, res){
        res.json(model.update(req.params.formId, req.body));
    }
};