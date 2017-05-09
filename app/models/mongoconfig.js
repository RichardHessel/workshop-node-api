var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/workshop').connection;
mongoose.Promise = global.Promise;

db.on('open', function(){
    console.log('mongodb rodando');
});

db.on('error', function(){
    console.log('erro ao conectar');
});

return db;
