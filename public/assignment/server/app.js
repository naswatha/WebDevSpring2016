/**
 * Created by Naveen on 3/16/2016.
 */
"use strict";
module.exports = function(app, mongoose, webDevDb) {

    var userModel = require("./models/user.model.js")(mongoose, webDevDb);
    require("./services/user.service.server.js")(app,userModel);

    var formModel = require("./models/form.model.js")(mongoose, webDevDb);
    require("./services/form.service.server.js")(app,formModel);

    var fieldModel = require("./models/field.model.js")(mongoose,webDevDb);
    require("./services/field.service.server.js")(app,fieldModel);

};
