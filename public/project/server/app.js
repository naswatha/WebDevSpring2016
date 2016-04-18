/**
 * Created by Naveen on 3/21/2016.
 */
"use strict";
module.exports = function(app, mongoose, webDevDb) {

    var userModel = require("./models/user.model.js")(mongoose, webDevDb);
    require("./services/user.service.server.js")(app,userModel);

    var workoutModel = require("./models/workout.model.js")(mongoose, webDevDb);
    require("./services/workout.service.server.js")(app,workoutModel);

};