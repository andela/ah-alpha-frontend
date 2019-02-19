import { SEND_EMAIL, EMAIL_FAIL } from "../../../actions/types";

export function forgotPassword(state = {}, action) {
  switch (action.type) {
    case SEND_EMAIL:
      return { ...state, message: action.payload };
    case EMAIL_FAIL:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
