'use strict';

const User = require('./../model/userModel');

const userController = {

  createUser(req, res, next) {
    let user = new User({
      username: req.body.data.username,
      password: req.body.data.password,
    })
    user.save(function(err, doc) {
      if (err) {
        res.send(err)
      } else {
        res.send(doc);
      }
    })
    next()
  },

  updateUser(req, res, next) {
    let query = {'username': req.body.data.username};
    req.newData.username = req.body.data.username;
    User.findOneAndUpdate(query, req.newData, {upsert:true}, function(err, doc){
      if (err) return res.sent(err);
      return res.send("succesfully saved");
    });
    next();
  },

}

module.exports = userController;
