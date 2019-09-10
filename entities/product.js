var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productschema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    name:  String,
    //category:{name:{type:String},id:{type:String}},
    price: Number,
    stock:Number,
    //image: String
   
  });
  
   var product = mongoose.model('Product', productschema);

   module.exports = product; 