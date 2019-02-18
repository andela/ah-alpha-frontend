import axios from "axios";

import { history } from "../_helpers/history";

import { LOGIN_SUCCESS, LOGIN_ERROR } from "./types";

const loginUser = userData => (dispatch) => {
  axios
    .post("https://ah-alpha.herokuapp.com/api/v1/users/login/", userData)
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

export default loginUser;
