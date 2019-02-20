import { FOLLOW_UNFOLLOW_SUCCESS, FOLLOWERS_COUNT, FOLLOWING_COUNT } from "../../../actions/types";

const states = {
  following_count: 0,
  followers_count: 0,
  followers: [],
  following: [],
  isUser: false
};
const followReducer = (state = states, action) => {
  switch (action.type) {
    case FOLLOW_UNFOLLOW_SUCCESS:
      return {
        ...state,
        follow_data: action.payload.following
      };
    case FOLLOWERS_COUNT:
      return {
        ...state,
        followers_count: action.payload.length,
        followers: action.payload
      };
    case FOLLOWING_COUNT:
      return {
        ...state,
        following_count: action.payload.length,
        following: action.payload
      };
    default:
      return state;
  }
};

export default followReducer;
