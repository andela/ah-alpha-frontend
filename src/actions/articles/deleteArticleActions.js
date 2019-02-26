import { toast } from "react-toastify";
import urlPath from "../../api/axiosConfig";
import {
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_ERROR
} from "../types";

const deleteArticleSuccess = () => ({
  type: DELETE_ARTICLE_SUCCESS
});

const deleteArticleError = payload => ({
  type: DELETE_ARTICLE_ERROR,
  payload: payload
});

const deleteArticleRequest = () => ({
  type: DELETE_ARTICLE_REQUEST,
  isLoading: true
});

export const deleteArticle = (slug) => (dispatch) => {
  dispatch(deleteArticleRequest());
  urlPath
    .delete(`/api/v1/articles/${slug}/`)
    .then(response => {
      dispatch(deleteArticleSuccess());
      toast.success("Article Deleted Successfully");
    })
    .catch(err => {
      dispatch(deleteArticleError(err.response.data));
      if (err.response.data) {
        toast.error(err.response.data.message);
      }
    });
};
