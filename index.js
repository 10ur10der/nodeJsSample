var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var dbConn = require('./databaseCon/dbConn');
var articleRoute = require('./routes/articleRoutes');
var aboutmeleRoute = require('./routes/aboutmeRoutes');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/article',articleRoute);
app.use('/aboutme',aboutmeleRoute);

var server = app.listen(5000,()=>{
    console.log('Server is runnig');
})