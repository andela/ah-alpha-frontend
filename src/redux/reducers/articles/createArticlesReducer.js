import {
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_ERROR,
  GET_TAGS_SUCCESS,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_ERROR
} from "../../../actions/types";

const initialState = {
  article: [],
  error: [],
  tags: []
};
const createArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload
      };
    case CREATE_ARTICLE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case GET_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.payload.tags
      };
    case EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload
      };
    case EDIT_ARTICLE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default createArticlesReducer;
