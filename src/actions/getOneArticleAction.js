import axios from "axios";
import * as profileActions from "./profileActions";

// eslint-disable-next-line
import {
  GET_ONE_ARTICLE_SUCCESS,
  GET_ONE_ARTICLE_ERROR
} from "./types";

// eslint-disable-next-line
const getOneArticle = slug => dispatch => {
  axios
    .get(`https://ah-alpha-staging.herokuapp.com/api/v1/articles/${slug}/`)
    .then((response) => {
      dispatch({
        type: GET_ONE_ARTICLE_SUCCESS,
        payload: response.data
      });
      dispatch(profileActions.getProfile(response.data.author["username"]));
    })
    .catch((err) => {
      dispatch({
        type: GET_ONE_ARTICLE_ERROR,
        payload: err.response.data
      });
    });
};

export default getOneArticle;
