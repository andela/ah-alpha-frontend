import urlPath from "../api/axiosConfig";
import { ADD_COMMENT, ADD_COMMENT_FAILURE } from "./types";

// eslint-disable-next-line prefer-destructuring
export const addCommentSuccess = payload => (
  {
    type: ADD_COMMENT,
    payload
  }
);

export const addCommentFailure = errors => (
  {
    type: ADD_COMMENT_FAILURE,
    payload: errors
  }
);
export const addComment = (comment, articleSlug) => (dispatch) => {
  urlPath
    .request({
      method: "post",
      data: comment,
      url: `api/v1/articles/${articleSlug}/comments/`
    })
    .then((response) => {
      dispatch(addCommentSuccess(response.data));
    })
    .catch((err) => {
      dispatch(addCommentFailure(err.reponse.data));
    });
};
