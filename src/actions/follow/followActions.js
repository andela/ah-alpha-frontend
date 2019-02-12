import urlPath from "../../api/axiosConfig";
import { FOLLOW_UNFOLLOW_SUCCESS, FOLLOWERS_COUNT, FOLLOWING_COUNT } from "../types";

export const getFollowersSuccess = payload => ({
  type: FOLLOWERS_COUNT,
  payload
});

export const followersCount = username => (dispatch) => {
  urlPath
    .get(`/api/v1/profiles/${username}/followers`)
    .then((response) => {
      dispatch(getFollowersSuccess(response.data.profile[0]));
    })
    .catch((error) => {
      throw error;
    });
};

export const getFollowingSuccess = payload => ({
  type: FOLLOWING_COUNT,
  payload
});

export const followingCount = username => (dispatch) => {
  urlPath
    .get(`/api/v1/profiles/${username}/following`)
    .then((response) => {
      dispatch(getFollowingSuccess(response.data.profile[0]));
    })
    .catch((error) => {
      throw error;
    });
};

export const followHandlerSuccess = payload => ({
  type: FOLLOW_UNFOLLOW_SUCCESS,
  payload
});

export const followHandler = (username, currentUser) => (dispatch) => {
  urlPath
    .post(`/api/v1/profiles/${username}/follow`)
    .then((response) => {
      dispatch(followHandlerSuccess(response.data.profile[0]));
      dispatch(followingCount(currentUser));
      dispatch(followersCount(currentUser));
    })
    .catch((error) => {
      throw error;
    });
};
