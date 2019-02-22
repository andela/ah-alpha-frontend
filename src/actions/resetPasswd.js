import { RESET_SUCCESS, RESET_FAIL } from "./types";
import urlPath from "../api/axiosConfig";

export const success = message => ({ type: RESET_SUCCESS, payload: message });
export const failure = error => ({ type: RESET_FAIL, payload: error });

const resetPassword = data => (dispatch) => {
  // eslint-disable-next-line no-shadow
  const success = message => ({ type: RESET_SUCCESS, payload: message });
  // eslint-disable-next-line no-shadow
  const failure = error => ({ type: RESET_FAIL, payload: error });
  return urlPath
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
