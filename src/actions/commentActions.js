import urlPath from "../api/axiosConfig";
import { FETCH_COMMENTS, FETCH_COMMENTS_FAILURE } from "./types";

export const fetchCommentsSuccess = comments => (
  {
    type: FETCH_COMMENTS,
    payload: comments
  }
);

export const fetchCommentsFailure = errors => (
  {
    type: FETCH_COMMENTS_FAILURE,
    payload: errors
  }
);

export const fetchComments = articleSlug => (dispatch) => {
  urlPath
    .request({
      method: "get",
      url: `api/v1/articles/${articleSlug}/comments/`
    })
    .then((res) => {
      dispatch(fetchCommentsSuccess(res.data.comments));
    })
    .catch((err) => {
      dispatch(fetchCommentsFailure(err));
    });
};

export default fetchComments;
