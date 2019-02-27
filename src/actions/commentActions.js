import toast from "react-toastify";
import urlPath from "../api/axiosConfig";
import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_FAILURE,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE
} from "./types";

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

export const deleteCommentsSuccess = commentId => (
  {
    type: DELETE_COMMENT_SUCCESS,
    payload: commentId
  }
);

export const deleteCommentsFailure = commentId => (
  {
    type: DELETE_COMMENT_FAILURE,
    payload: commentId
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

export const deleteComment = (articleSlug, commentId) => (dispatch) => {
  urlPath
    .request({
      method: "delete",
      url: `api/v1/articles/${articleSlug}/comments/${commentId}`
    })
    .then((res) => {
      dispatch(deleteCommentsSuccess(res.data));
      dispatch(fetchComments(articleSlug));
      toast.error("One comment deleted");
    })
    .catch((err) => {
      dispatch(deleteCommentsFailure(err.data));
    });
};
