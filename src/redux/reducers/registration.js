import { userConstants } from "../../actions/constants";

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { ...state, registering: true };
    case userConstants.REGISTER_SUCCESS:
      return { ...state, registered: true, registering: false };
    case userConstants.REGISTER_FAILURE:
      return { ...state, registering: false, regErrored: action.payload };
    default:
      return state;
  }
}

export function verification(state = {}, action) {
  switch (action.type) {
    case userConstants.VERIFY_REQUEST:
      return { ...state, verifying: true };
    case userConstants.VERIFY_SUCCESS:
      return {
        ...state,
        verifying: false,
        verified: true,
        token: action.payload
      };
    case userConstants.VERIFY_FAILURE:
      return { ...state, verifying: false, verificationError: action.payload };
    default:
      return state;
  }
}
