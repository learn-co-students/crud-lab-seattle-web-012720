import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Text: </label>
        <input type='text' name='text' onChange={this.handleChange} value={this.state.text}></input>
        <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
