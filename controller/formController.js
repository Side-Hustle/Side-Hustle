'use strict';

const Form = require('./../model/formModel');
const User = require('./../model/userModel');

const formController = {

  createForm(req, res, next) {
    let form = new Form({
      title: req.body.data.title,
      description: req.body.data.description,
      address: req.body.data.address,
      pay: req.body.data.pay,
    })

    let formDoc;
    form.save(function(err, doc) {
      if (err) {
        res.send(err);
      } else {
        formDoc = doc;
        res.send(doc);
      }
    })

  User.findByIdAndUpdate({username: red.body.data.username}, 
  { $set: { 
    title: formDoc.title,
    description: formDoc.description,
    address: formDoc.address,
    pay: formDoc.pay, 
  }},
    { new: true }, function (err, user) {
    if (err) return handleError(err);
    res.send(user);
  });

    next()

  }

}

module.exports = formController;
