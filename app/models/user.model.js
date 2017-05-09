var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;

var userSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    idade: {
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function(next){
    var obj = this;
    userModel.findOne({ nome: obj.nome }, function(err, user){
        if(err)
        {
            return next(err);
        }
        else if(user){
            var error = new Error("já existe um usuário cadastrado com esse nome");
            error.status = 500;
            return next(error);
        }
        else{
            return next();
        }
    });
});


var userModel = mongoose.model('users', userSchema);
module.exports = userModel;
