'use strict';

const Form = require('./../model/formModel');
const User = require('./../model/userModel');

const formController = {

  createForm(req, res) {
    let form = new Form({
      title: req.body.title,
      description: req.body.description,
      address: req.body.address,
      pay: req.body.pay,
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
<<<<<<< HEAD

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

=======
>>>>>>> 11cbdc4bda6a018dd6c02b2164c72cc9de1178f6
  }

}

module.exports = formController;
