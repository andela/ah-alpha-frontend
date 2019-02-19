import { history } from "../_helpers/history";

// eslint-disable-next-line
import { LOGIN_SUCCESS, LOGIN_ERROR } from "./types";
import { postAxios } from "../api/postPromise";
import { BASE_URL } from "./constants";

// eslint-disable-next-line
export const loginUser = userData => dispatch => {
  postAxios(`${BASE_URL}/api/v1/users/login/`, userData)
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
      });
      setTimeout(() => {
        history.go("/");
      }, 1000);
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response.data
      });
    });
};

export default loginUser;
