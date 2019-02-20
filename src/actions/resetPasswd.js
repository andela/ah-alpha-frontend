import { RESET_SUCCESS, RESET_FAIL } from "./types";
import axiosConfig from "./axiosConfig";

export const success = message => ({ type: RESET_SUCCESS, payload: message });
export const failure = error => ({ type: RESET_FAIL, payload: error });

const resetPassword = data => (dispatch) => {
  return axiosConfig
    .request({
      method: "patch",
      url: `users/password_reset/${data.token}`,
      data: { user: { password: data.password } }

    })
    .then((res) => {
      dispatch(success(res.data.user.message));
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    })
    .catch((err) => {
      dispatch(failure("Error encouterd"));
    });
};
export default resetPassword;
