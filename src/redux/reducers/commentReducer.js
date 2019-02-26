/* eslint-disable no-case-declarations */
// Reducer for list of comments from API
import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_FAILURE,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE
} from "../../actions/types";

const initialState = {
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

    case ADD_COMMENT:
      return Object.assign(
        {},
        state,
        { comments: [...state.comments, action.payload] }
      );

    case ADD_COMMENT_FAILURE:
      return {
        errors: action.payload
      };

    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        errors: action.payload
      };

    case DELETE_COMMENT_FAILURE:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default commentListReducer;
