import axios from "axios";

import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR
} from "./types";

const loadingResource = () => ({
  type: GET_ARTICLES_REQUEST,
  isLoading: true
});

const errorOnLoad = errorPayload => ({
  type: GET_ARTICLES_ERROR,
  payload: errorPayload,
  isLoading: false
});

const successOnLoad = successPayload => ({
  type: GET_ARTICLES_SUCCESS,
  payload: successPayload,
  isLoading: false
});

const getArticles = () => (dispatch) => {
  dispatch(loadingResource());
  return axios
    .get("https://ah-alpha-staging.herokuapp.com/api/v1/articles/")
    .then((response) => {
      dispatch(successOnLoad(response.data.results));
    })
    .catch((err) => {
      dispatch(errorOnLoad(err.response.data));
    });
};

export default getArticles;
