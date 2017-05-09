var User = require('../models/user.model');

exports.get = function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send(users);
        }
    });
};

exports.create = function (req, res) {
    console.log('body ->', req.body);
    user = new User(req.body);
    user.save(function (err, obj) {
        if (err) {
            res.status(500).send({ err: err.message });
        }
        else {
            res.send(obj);
        }
    });
}

exports.update = function(req,res){
    User.findOneAndUpdate({_id: req.body._id}, req.body, function(err,obj){
        if(err) {
            res.send(err);
        }
        else{
            res.send(obj);
        }
    })
}

exports.delete = function(req, res){
    User.findOneAndRemove({_id: req.body._id}, function(err, obj){
        if(err)
        {
            res.send(err);
        }
        else{
            res.send(obj);
        }
    });
}
