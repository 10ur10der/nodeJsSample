
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sample',{ useNewUrlParser: true,useUnifiedTopology: true });

var connectDB = ()=>{

    var db = mongoose.connection;
    db.once('open',()=>{

        console.log("db conneciton");
    });
    return db;
}

module.exports = connectDB;