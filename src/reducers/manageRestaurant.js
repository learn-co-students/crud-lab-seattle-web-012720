
import cuid from 'cuid';
export const cuidFn = cuid;

const INITIAL_STATE = {
    restaurants: [],
    reviews: []
}

export default function manageRestaurants(state = INITIAL_STATE, action) {
    switch (action.type){
    
        case 'ADD_RESTAURANT':
            const newRest = {
                id: cuidFn(),
                text: action.text
            }
            return {
                ...state,
                restaurants: [...state.restaurants, newRest]
            };

        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(restaurant => restaurant.id != action.id)
            return {...state, restaurants};

        case 'ADD_REVIEW':
            const newReview = {
                id: cuidFn(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            return {
                ...state,
                reviews: [...state.reviews, newReview]
            };

        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id != action.id)
            return {...state, reviews};

        default:
            return state
    }

}
