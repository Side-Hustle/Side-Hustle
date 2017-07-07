import React, { Component } from 'react';


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} method='post'>
        <label>
          Title:
          <input name= "title" type="text" value={this.state.title} />
        </label>
        <br />
        <br />
         <label>
          Description:
          <input name= "description" type="text" value={this.state.description} />
        </label>
        <br />
        <br />
         <label>
          Address:
          <input name= "address" type="text" value={this.state.address} />
        </label>
        <br />
        <br />
         <label>
          Pay:
          <input name= "pay" type="text" value={this.state.pay} />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <Name />,
  document.getElementById('root')
);




