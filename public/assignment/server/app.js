/**
 * Created by Naveen on 3/16/2016.
 */
"use strict";
module.exports = function(app) {

    var userModel = require("./models/user.model.js")();
    require("./services/user.service.server.js")(app,userModel);

    var formModel = require("./models/form.model.js")();
    require("./services/form.service.server.js")(app,formModel);
    require("./services/field.service.server.js")(app,formModel);

};
