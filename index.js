var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var dbConn = require('./databaseCon/dbConn');
var articleRoute = require('./routes/articleRoutes');
var aboutmeRoute = require('./routes/aboutmeRoutes');
var categoryRoute = require('./routes/categoryRoutes');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/article',articleRoute);
app.use('/aboutme',aboutmeRoute);
app.use('/category',categoryRoute);

var server = app.listen(5000,()=>{
    console.log('Server is runnig');
})