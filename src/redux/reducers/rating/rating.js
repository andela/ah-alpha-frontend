import {
  RATING_REQUEST,
  RATING_SUCCESS,
  RATING_FAILURE
} from "../../../actions/types";

export const ratingReducer = (state = {}, action) => {
  switch (action.type) {
    case RATING_REQUEST:
      return { ...state, requesting: true };
    case RATING_SUCCESS:
      return {
        ...state,
        requesting: false,
        ...action.payload,
        message: "success"
      };
    case RATING_FAILURE:
      return { ...state, requesting: false, message: "failure" };
    default:
      return state;
  }
};
