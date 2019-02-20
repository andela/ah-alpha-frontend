/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import initialState from "../../store/initialState";

export default function profileReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "GET_PROFILE_SUCCESS": {
      return { ...state, profile: action.data };
    }
    case "UPDATE_PROFILE_SUCCESS": {
      return { ...state, profile: action.data };
    }
    default: {
      return state;
    }
  }
}
