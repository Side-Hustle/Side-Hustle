import React, { Component } from 'react';

class FormOfInformation extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    let data = {
      'title': this.inputTitle.value,
      'description': this.inputDescription.value,
      'address': this.inputAddress.value,
      'pay': this.inputPay.value
    }
    console.log(data.title);
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/post',
      data: data
    })
    .done()
    .fail(function(err) {
      console.log('failed to register');
    });
}


  render() {
    return (
      <form onSubmit={this.handleSubmit} method='post'>
        <label>
          Title:
          <input id="title" type="text" ref = {(input) => this.inputTitle = input }/>
        </label>
        <br />
        <br />
         <label>
          Description:
          <input id="description" type="text" ref = {(input) => this.inputDescription = input }/>
        </label>
        <br />
        <br />
         <label>
          Address:
          <input id="address" type="text" ref = {(input) => this.inputAddress = input }/>
        </label>
        <br />
        <br />
         <label>
          Pay:
          <input id="pay" type="text" ref = {(input) => this.inputPay = input }/>
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormOfInformation;