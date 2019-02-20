import axios from "axios";
import { history } from "../_helpers/history";

// eslint-disable-next-line
import {
  GET_ONE_ARTICLE_SUCCESS,
  GET_ONE_ARTICLE_ERROR,
  GET_ARTICLES_REQUEST
} from "./types";

// eslint-disable-next-line
const getOneArticle = slug => dispatch => {
  axios
    .get(`https://ah-alpha-staging.herokuapp.com/api/v1/articles/${slug}/`)
    .then(response => {
      dispatch({
        type: GET_ONE_ARTICLE_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ONE_ARTICLE_ERROR,
        payload: err.response.data
      });
    });
};

export default getOneArticle;
