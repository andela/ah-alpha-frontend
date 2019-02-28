import {
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_ERROR,
  DELETE_ARTICLE_REQUEST
} from "../../../actions/types";

const initialState = {};

const deleteArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ARTICLE_ERROR:
      return {
        ...state,
        message: action.payload
      };
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state
      };
    case DELETE_ARTICLE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};

export default deleteArticleReducer;
