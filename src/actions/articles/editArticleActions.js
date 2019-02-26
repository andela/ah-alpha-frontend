import { toast } from "react-toastify";
import urlPath from "../../api/axiosConfig";
import {
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_ERROR,
  GET_USER_ARTICLES_SUCCESS
} from "../types";

export const editArticleSuccess = payload => ({
  type: EDIT_ARTICLE_SUCCESS,
  payload
});

export const editArticleError = payload => ({
  type: EDIT_ARTICLE_ERROR,
  payload
});

export const userArticleSuccess = payload => ({
  type: GET_USER_ARTICLES_SUCCESS,
  payload
});

export const editArticle = (slug, data) => (dispatch) => {
  urlPath
    .put(`/api/v1/articles/${slug}/`, data)
    .then((response) => {
      dispatch(editArticleSuccess(response.data));
      toast.success("Article Edited Successfully");

      // eslint-disable-next-line no-restricted-globals
      setTimeout(() => { location.href = `/${slug}`; }, 2500);
    })
    .catch((error) => {
      dispatch(editArticleError(error.response.data));
      if (
        error.response.data.tags === undefined
      ) {
        toast.error("Title or Body should not be blank");
      } else if (
        error.response.data.title === undefined
        && error.response.data.body === undefined
      ) {
        toast.error("Tag can not have special characters");
      } else {
        toast.error("Title or Body should not be blank");
      }
    });
};

export const getAuthorsArticles = (pageSize = 100) => (dispatch) => {
  urlPath
    .get(`/api/v1/articles/?&page_size=${pageSize}`)
    .then((response) => {
      dispatch(userArticleSuccess(response.data));
    })
    .catch((error) => {
      throw error;
    });
};
