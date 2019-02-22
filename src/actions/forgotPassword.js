import { SEND_EMAIL, EMAIL_FAIL } from "./types";
import urlPath from "../api/axiosConfig";

export const success = message => ({ type: SEND_EMAIL, payload: message });
export const failure = error => ({ type: EMAIL_FAIL, payload: error });

const forgotPassword = data => (dispatch) => {
  // eslint-disable-next-line no-shadow
  const success = message => ({ type: SEND_EMAIL, payload: message });
  // eslint-disable-next-line no-shadow
  const failure = error => ({ type: EMAIL_FAIL, payload: error });
  return urlPath
    .request({
      method: "post",
      url: "/users/password_request/",
      data: {
        email: data.emailData,
        site: data.website
      }
    })
    .then((res) => {
      if (res.data) {
        dispatch(success(res.data.Message));
      }
    })
    .catch((err) => {
      dispatch(failure(err.response.data.message));
    });
};
export default forgotPassword;
