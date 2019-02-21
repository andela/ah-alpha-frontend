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

const getArticles = (page = 1, page_size = 15) => async (dispatch) => {
  dispatch(loadingResource());
  try {
    const response = await axios.get(
      // eslint-disable-next-line camelcase
      `https://ah-alpha-staging.herokuapp.com/api/v1/articles/?page=${page}&page_size=${page_size}`
    );
    dispatch(successOnLoad(response.data));
  } catch (err) {
    dispatch(errorOnLoad(err.response.data));
  }
};

export default getArticles;
