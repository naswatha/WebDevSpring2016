var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');


var WebDevDbName = 'webdev';
var webDevConnectString = 'mongodb://127.0.0.1:27017/' + WebDevDbName;

if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    webDevConnectString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}

var webDevDb = mongoose.connect(webDevConnectString);


//var projectDbName = 'assignment';
//var projectConnectString = 'mongodb://localhost/' + projectDbName;
//var projectDb = mongoose.connect(projectConnectString);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(express.static(__dirname + '/public'));


var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;


require("./public/assignment/server/app.js")(app, mongoose, webDevDb);
require("./public/project/server/app.js")(app, mongoose, webDevDb);
//require("./public/assignment/server/app.js")(app);
//require("./public/project/server/app.js")(app);
require("./public/project1/server/app.js")(app);
//require("./public/project/server/app.js")(app, mongoose, projectDb);
app.listen(port, ipaddress);


//MongoDB 2.4 database added.  Please make note of these credentials:
//
//    Root User:     admin
//Root Password: s4Asu3yzc1Yx
//Database Name: webdevelopment
//
//Connection URL: mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/