import { RESET_REQUEST, RESET_SUCCESS, RESET_FAIL } from "../../../actions/types";

export function passwordReset(state = {}, action) {
  switch (action.type) {
    case RESET_REQUEST:
      return { ...state };
    case RESET_SUCCESS:
      return { ...state, message: action.payload };
    case RESET_FAIL:
      return { ...state, messsage: action.payload };
    default:
      return state;
  }
}
