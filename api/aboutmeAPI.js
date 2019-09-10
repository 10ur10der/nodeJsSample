var aboutme = require('../entities/aboutme');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


exports.aboutmeDetail = function(req,res){
   
    aboutme.find({},function(err,doc){
        if(err)
            res.send(err);            
        res.json(doc);
    });
};

exports.addAboutme = function(req,res){   
    var aboutme = new aboutme(req.body);
    aboutme.save((err)=>{
        if (err) 
            res.send(err);           
        res.send("insertad");
    })
}