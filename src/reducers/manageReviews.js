
import cuid from 'cuid';
export const cuidFn = cuid;

const INITIAL_STATE = {
    reviews: []
}

export default function manageReviews(state = INITIAL_STATE, action) {
    switch (action.type){
        case 'ADD_REVIEW':
            const newReview = {
                id: cuid(),
                text: action.text,
                restaurantId: action.restaurantId
            }
            return {
                ...state,
                reviews: [...state.reviews, newReview]
            };
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id != action.id)
            return {reviews};
        default:
            return state
    }

}