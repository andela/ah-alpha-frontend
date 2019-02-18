import {
  FACEBOOK,
  GOOGLE,
  TWITTER,
  FETCHING,
  FETCH_FAILED,
  LOGIN_SUCCESS
} from "../../../actions/types";

const initialState = {
  message: ""
};

export default function socialAuthFunction(state =
initialState, action) {
  switch (action.type) {
    case FACEBOOK:
      return { ...state, ...action.payload };
    case GOOGLE:
      return { ...state, ...action.payload };
    case TWITTER:
      return { ...state, ...action.payload };
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload };
    case FETCHING:
      return { ...state, ...action.payload };
    case FETCH_FAILED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
