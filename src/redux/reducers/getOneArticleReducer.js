import {
  GET_ONE_ARTICLE_SUCCESS,
  GET_ONE_ARTICLE_REQUEST,
  GET_ONE_ARTICLE_ERROR
} from "../../actions/types";

const initialState = {};

const getOneArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_ARTICLE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_ONE_ARTICLE_SUCCESS:
      return {
        article: action.payload,
        isLoading: false
      };
    case GET_ONE_ARTICLE_ERROR:
      return {
        ...state,
        errors: action.payload.message,
        isLoading: false
      };
    default:
      return state;
  }
};

export default getOneArticleReducer;
