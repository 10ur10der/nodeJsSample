
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    title:  String,  
    createDate: {type:Date,default:Date.now},
  });
  
   var category = mongoose.model('Category', categorySchema);

   module.exports = category; 