import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import { userConstants, BASE_URL, toastOptions } from "./constants";
import { history } from "../_helpers/history";

export const registerUser = user => (dispatch) => {
  const website = window.location.origin.toString();
  const data = {
    site: website,
    user
  };

  function request() {
    return { type: userConstants.REGISTER_REQUEST };
  }
  function success(userdata) {
    return { type: userConstants.REGISTER_SUCCESS, payload: userdata };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, payload: error };
  }

  const url = `${BASE_URL}/api/v1/users/`;
  dispatch(request());
  return axios
    .post(url, data)
    .then((response) => {
      dispatch(success(response.user));
    })
    .catch((error) => {
      try {
        dispatch(failure(Object.values(error.response.data.errors)));
      } catch (otherError) {
        return false;
      }
      return false;
    });
};

export const verifyUser = token => (dispatch) => {
  function request() {
    return { type: userConstants.VERIFY_REQUEST };
  }
  function success(loginToken) {
    return { type: userConstants.VERIFY_SUCCESS, payload: loginToken };
  }
  function failure(error) {
    return { type: userConstants.VERIFY_FAILURE, payload: error };
  }
  const url = `${BASE_URL}/api/v1/users/verify/${token}`;
  dispatch(request());
  return axios
    .get(url)
    .then((data) => {
      toast.success(data.data.message, {
        ...toastOptions,
        toastId: "20291"
      });
      localStorage.setItem("token", JSON.stringify(data.data.token));
      dispatch(success(data.data.token));
      setTimeout(() => {
        history.go("/");
      }, 1000);
    })
    .catch((error) => {
      dispatch(failure([]));
    });
};
