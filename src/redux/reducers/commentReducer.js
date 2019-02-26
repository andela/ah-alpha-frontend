/* eslint-disable no-case-declarations */
// Reducer for list of comments from API
import { FETCH_COMMENTS, FETCH_COMMENTS_FAILURE } from "../../actions/types";

export const initialState = {
  comments: []
};

const commentListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return Object.assign(
        {},
        state,
        { comments: action.payload }
      );

    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        errors: action.payload
      };

    default:
      return state;
  }
};

export default commentListReducer;
