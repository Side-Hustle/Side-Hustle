'use strict'
import React, { Component } from 'react';


class FormOfInformation extends React.Component {
  constructor() {
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let titleValue = document.getElementById('title').value
    let descriptionValue = document.getElementById('title').value
    let addressValue = document.getElementById('title').value
    let payValue = document.getElementById('title').value

    let data = {
      'title': titleValue,
      'description': descriptionValue,
      'address': addressValue,
      'pay': payValue
    }

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/post',
      data: data
    })
    .done(function(data) {
      self.clearForm()
    })
    .fail(function(err) {
      console.log('failed to register');
    });


}


  render() {
    return (
      <form onSubmit={this.handleSubmit} method='post'>
        <label>
          Title:
          <input id="title" type="text" />
        </label>
        <br />
        <br />
         <label>
          Description:
          <input id="description" type="text" />
        </label>
        <br />
        <br />
         <label>
          Address:
          <input id="address" type="text" />
        </label>
        <br />
        <br />
         <label>
          Pay:
          <input id="pay" type="text" />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <FormOfInformation />,
  document.getElementById('root')
);




