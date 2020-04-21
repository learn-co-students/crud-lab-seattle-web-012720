import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  // <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} delete={this.props.delete}/>

  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const relatedReviews = reviews.filter(review => review.restaurantId === restaurantId);
    
    const reviewList = relatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview ={deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    );
  }

};

export default Reviews;