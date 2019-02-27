import axios from "axios";
import { BASE_URL } from "./constants";
import * as profileActions from "./profileActions";
// eslint-disable-next-line
import {
  GET_ONE_ARTICLE_SUCCESS,
  GET_ONE_ARTICLE_ERROR
} from "./types";

// eslint-disable-next-line
const getOneArticle = slug => async dispatch => {
  const token = localStorage.getItem("token");
  await axios
    .get(`${BASE_URL}/api/v1/articles/${slug}/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`
      }
    })
    .then((response) => {
      dispatch({
        type: GET_ONE_ARTICLE_SUCCESS,
        payload: response.data
      });
      dispatch(profileActions.getProfile(response.data.author.username));
    })
    .catch((err) => {
      dispatch({
        type: GET_ONE_ARTICLE_ERROR,
        payload: err.response.data
      });
    });
};

export default getOneArticle;
