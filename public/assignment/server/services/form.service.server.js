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
    app.get("/api/assignment/form?formTitle=formTitle", getFormByTitle);

    function getFormByUserId(req, res){
        model.findFormByUserId(req.params.userId).then(
            function(response){
                res.json(response);
            });

        //res.json(model.findFormByUserId(req.params.userId));
    }

    function getFormById(req, res){
        model.findById(req.params.formId).then(
            function(response){
                res.json(response);
            });

        //res.json(model.findById(req.params.formId));
    }

    function deleteForm(req, res){
        model.remove(req.params.formId).then(
            function(response){
                res.json(response);
            });
        //res.json(model.remove(req.params.formId));
    }

    function create(req, res){
        model.create(req.params.userId, req.body).then(
            function(response){
                res.json(response);
            });
        //res.json(model.create(req.params.userId,req.body));
    }

    function update(req, res){
        model.update(req.params.formId, req.body).then(
            function(response){
                res.json(response);
            });
        //res.json(model.update(req.params.formId, req.body));
    }

    function getFormByTitle(req, res){

        var formTitle = req.param("formTitle");
        model.findFormByTitle(formTitle)
            .then(function(response){
                res.json(response);
            });
    }
};