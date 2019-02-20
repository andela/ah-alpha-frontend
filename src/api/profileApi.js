import urlPath from "./axiosConfig";

export default class profileApi {
  static retrieveProfile(username) {
    return urlPath
      .get(`api/v1/profiles/${username}`)
      // eslint-disable-next-line consistent-return
      .then((res) => {
        if (res.status === 200) {
          return {
            content: res.data
          };
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  static updateProfile(username, data) {
    return urlPath
      .patch(`/api/v1/profiles/${username}/edit/`, data)
      // eslint-disable-next-line consistent-return
      .then((res) => {
        if (res.status === 200) {
          return {
            success: true,
            content: res.data
          };
        }
      })
      .catch((error) => {
        throw error;
      });
  }
}
