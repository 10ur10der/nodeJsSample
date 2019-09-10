
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    title:  String,
    content: String,
    category:{name:{type:String},id:{type:String}},
    createDate: {type:Date,default:Date.now},
  });
  
   var article = mongoose.model('Article', articleSchema);

   module.exports = article; 