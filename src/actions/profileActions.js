import { toast } from "react-toastify";
import profileApi from "../api/profileApi";

export const getProfileSuccess = data => ({
  type: "GET_PROFILE_SUCCESS",
  data
});

// eslint-disable-next-line import/prefer-default-export
export const getProfile = username => (dispatch) => {
  profileApi.retrieveProfile(username).then((res) => {
    dispatch(getProfileSuccess(res.content.profile[0]));
  });
};

export const updateProfileSuccess = data => ({
  type: "UPDATE_PROFILE_SUCCESS",
  data
});

export const updateProfile = (username, data) => (dispatch) => {
  profileApi.updateProfile(username, data)
    .then((res) => {
      if (res.success) {
        dispatch(updateProfileSuccess(res.content.profile[0]));
        toast.success("Profile Updated Successfully");
        // eslint-disable-next-line func-names
        // eslint-disable-next-line no-restricted-globals
        setTimeout(() => { location.href = "/profile"; }, 2500);
      }
    })
    // eslint-disable-next-line consistent-return
    .catch((response) => {
      const res = {
        success: false,
        error: {
          status: response.response.status
        }
      };
      // eslint-disable-next-line default-case
      switch (response.response.data) {
        case 403: {
          toast.error("You cannot edit this profile");
          return res;
        }
      }
    });
};
