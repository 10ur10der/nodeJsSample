

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var aboutmeSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    content:  String,  
    createDate: {type:Date,default:Date.now},
  });
  
   var aboutme = mongoose.model('AboutMe', aboutmeSchema);

   module.exports = aboutme; 