import { LIKE_REQUEST, LIKE_SUCCESS, LIKE_FAILURE } from "../../../actions/types";

const likesReducer = (state = {}, action) => {
  switch (action.type) {
    case LIKE_REQUEST:
      return { ...state, sending_like: true };

    case LIKE_SUCCESS:
      return { ...state, sending_like: false, data: action.payload.message };

    case LIKE_FAILURE:
      return {
        ...state,
        sending_like: false,
        failed: true,
        error: action.payload
      };

    default:
      return state;
  }
};
export default likesReducer;
