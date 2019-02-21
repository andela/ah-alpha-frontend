import {
  GET_ARTICLES_ERROR,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS
} from "../../actions/types";

const initialState = {};

const getArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload.results,
        isLoading: false,
        article: {},
        count: action.payload.count
      };
    case GET_ARTICLES_ERROR:
      return {
        ...state,
        errors: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default getArticlesReducer;
