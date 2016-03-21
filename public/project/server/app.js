/**
 * Created by Naveen on 3/21/2016.
 */
"use strict";
module.exports = function(app) {

    var userModel = require("./models/user.model.js")();
    require("./services/user.service.server.js")(app,userModel);

};