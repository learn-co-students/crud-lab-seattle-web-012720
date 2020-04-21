import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state= {
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
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId })
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

export default ReviewInput;
