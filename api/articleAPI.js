var article = require('../entities/article');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


exports.aritcleList = function(req,res){
   
    article.find({},function(err,doc){
        if(err)
            res.send(err);            
        res.json(doc);
    });
};

exports.detailArticle = function(req,res){
    
    article.findById(req.params.id ,function(err,data){   
         if(err)
            res.send(err);
         res.json(data);
     }).catch((err2)=>{
        res.send(err2);
     });  
}

exports.addArticle = function(req,res){   
    var newArticle = new article(req.body);
    newArticle.save((err)=>{
        if (err) 
            res.send(err);           
        res.send("insertad");
    })
}