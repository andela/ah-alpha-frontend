import urlPath from "../api/axiosConfig";
import { ADD_COMMENT, ADD_COMMENT_FAILURE, EDIT_COMMENT, EDIT_COMMENT_FAILURE, EDIT_COMMENT_REQUEST } from "./types";
import { fetchComments } from "./commentActions";

const editRequest = () => ({
  type: EDIT_COMMENT_REQUEST,
  isEdit: false
});

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

export const editCommentSuccess = payload => (
  {
    type: EDIT_COMMENT,
    payload,
    isEdit: true
  }
);

export const editCommentFailure = errors => (
  {
    type: EDIT_COMMENT_FAILURE,
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

export const editComment = (editedcomment, articleSlug, commentId) => (dispatch) => {
  dispatch(editRequest());
  urlPath
    .request({
      method: "put",
      data: editedcomment,
      url: `api/v1/articles/${articleSlug}/comments/${commentId}/`
    })
    .then((response) => {
      dispatch(editCommentSuccess(response.data));
      dispatch(fetchComments(articleSlug));
    })
    .catch((err) => {
      dispatch(editCommentFailure(err.data));
    });
};
