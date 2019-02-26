import { GET_USER_ARTICLES_SUCCESS } from "../../../actions/types";

const initialState = {
  isFetching: false
};

const userArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ARTICLES_SUCCESS:
      return {
        ...state,
        userArticles: action.payload.results,
        isFetching: true
      };
    default:
      return state;
  }
};

export default userArticlesReducer;
