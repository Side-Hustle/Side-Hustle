'use strict';

const Form = require('./../model/formModel');

const formController = {

  createForm(req, res, next) {
    let form = new Form({
      title: req.body.data.title,
      description: req.body.data.description,
      address: req.body.data.address,
      pay: req.body.data.pay,
    })
    form.save(function(err, doc) {
      if (err) {
        res.sendStatus(200)
      } else {
        res.send(doc);
      }
    })
    next()
  }

}

module.exports = formController;
