/**
 * Created by Naveen on 3/16/2016.
 */
module.exports = function(app) {
    require("./services/form.service.js")(app);
    require("./services/user.service.js")(app);
};