var category = require('../entities/category');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


exports.categoryList = function(req,res){
   
    category.find({},function(err,doc){
        if(err)
            res.send(err);            
        res.json(doc);
    });
};

exports.detailCategory = function(req,res){
    
    category.findById(req.params.id ,function(err,data){   
         if(err)
            res.send(err);
         res.json(data);
     }).catch((err2)=>{
        res.send(err2);
     });  
}

exports.addCategory = function(req,res){   
    var newCategory = new category(req.body);
    newCategory.save((err)=>{
        if (err) 
            res.send(err);           
        res.send("insertad");
    })
}