/* eslint-disable no-case-declarations */
/* eslint-disable prefer-destructuring */
import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS
} from "../../actions/types";
import initialState from "../store/initialState";

// eslint-disable-next-line import/prefer-default-export
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      const token = action.payload.user.token;
      localStorage.setItem("token", `Bearer ${token}`);
      localStorage.setItem("username", action.payload.user.username);
      localStorage.setItem("isLoggedIn", true);
      return {
        ...state,
        token,
        errors: {},
        isLoggedIn: true,
        isLoading: false,
        username: action.payload.user.username,
        message: "Successfully logged in."
      };
    case LOGIN_ERROR:
      return {
        // ...state,
        errors: action.payload,
        isLoggedIn: false,
        token: null,
        isLoading: false
      };
    default:
      return state;
  }
};
