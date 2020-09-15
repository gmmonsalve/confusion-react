import * as ActionTypes from './ActionTypes';

export const Feedback = (state  = {
    feedbacks:[]},
     action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
        return {...state, feedbacks: action.payload};
        default:
          return state;
      }
};