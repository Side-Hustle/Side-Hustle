import React, { Component } from 'react';

class CreateUser extends React.Component {
  constructor() {
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let data = {
      'username': this.inputUser.value,
      'password': this.inputPass.value,
    }

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/create',
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
          Username:
          <input id="user" type="text" inputRef = {(input) => this.inputUser = input }/>
        </label>
        <br />
        <br />
         <label>
          Password:
          <input id="pass" type="text" inputRef = {(input) => this.inputPass = input }/>
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <CreateUser />,
  document.getElementById('createDiv')
);