var express = require("express");
var app = express();
var dbConn = require('./databaseCon/dbConn');
var product = require('./entities/product');



var server = app.listen(5000,()=>{
    console.log('Server is runnig');


    var newProduct = new product({ name: 'telefon','price':100,'stock':10 });
    newProduct.save(function (err) {
      if (err) 
        return handleError(err);
      else
        console.log("register");

  
});
 
})