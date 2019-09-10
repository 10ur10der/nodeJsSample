
var product = require('../entities/product');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



exports.productList = function(req,res){
   
    product.find({},function(err,doc){
        if(err)
        res.send(err);      
        //var doc = parent.children.id(_id);
        res.json(doc);
    });
};

exports.detailProduct = function(req,res){
    
    product.findById(req.params.id ,function(err,data){   
         if(err)
         res.send(err);
         res.json(data);
     }).catch((err2)=>{
        res.send(err2);
     });  
}

exports.addProduct = function(req,res){
  
console.log("req",req.body);

    var newProduct = new product(req.body);
    newProduct.save((err)=>{
        if (err) res.send(err);
            console.log(err);
        res.send("insertad");
    })
}