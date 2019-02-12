import { history } from "../_helpers/history";

// eslint-disable-next-line
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "./types";
import postAxios from "../api/postPromise";

// eslint-disable-next-line import/prefer-default-export
export const loginUser = userData => (dispatch) => {
  postAxios("https://ah-alpha.herokuapp.com/api/v1/users/login/", userData)
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
      });
      setTimeout(() => {
        history.go("/");
      }, 1000);
    })
    .catch(err => dispatch({
      type: LOGIN_ERROR,
      payload: err.response.data
    }));
};
