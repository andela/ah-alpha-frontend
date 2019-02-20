import { toast } from "react-toastify";
import urlPath from "../../api/axiosConfig";
import {
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_ERROR,
  GET_TAGS_SUCCESS
} from "../types";

export const createArticleSuccess = payload => ({
  type: CREATE_ARTICLE_SUCCESS,
  payload
});

export const createArticleError = payload => ({
  type: CREATE_ARTICLE_ERROR,
  payload
});

// eslint-disable-next-line import/prefer-default-export
export const createArticle = data => (dispatch) => {
  urlPath
    .post("/api/v1/articles/", data)
    .then((response) => {
      dispatch(createArticleSuccess(response.data));
      toast.success("Article Created Successfully");

      // eslint-disable-next-line no-restricted-globals
      setTimeout(() => { location.href = `/${response.data.slug}`; }, 2500);
    })
    .catch((error) => {
      dispatch(createArticleError(error.response.data));
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

export const getTagSuccess = payload => ({
  type: GET_TAGS_SUCCESS,
  payload
});

export const getTags = () => (dispatch) => {
  urlPath
    .get("/api/v1/tags/")
    .then((response) => {
      dispatch(getTagSuccess(response.data));
    })
    .catch((error) => {
      throw error;
    });
};
