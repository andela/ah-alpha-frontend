/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { BASE_URL } from "../constants";
import getOneArticle from "../getOneArticleAction";
import { RATING_FAILURE, RATING_REQUEST, RATING_SUCCESS } from "../types";

export const rateArticle = ratingData => (dispatch) => {
  function request() {
    return { type: RATING_REQUEST };
  }
  function success(ratingData) {
    return { type: RATING_SUCCESS, payload: ratingData };
  }
  function failure(error) {
    return { type: RATING_FAILURE, payload: error };
  }
  const slug = ratingData.slug;
  const url = `${BASE_URL}/api/v1/rate/${slug}/`;
  dispatch(request());
  const data = {
    your_rating: ratingData.rating
  };
  const token = localStorage.getItem("token");
  return axios
    .post(url, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`
      }
    })
    .then((response) => {
      dispatch(success(response.data.data));
      dispatch(getOneArticle(slug));
    })
    .catch((error) => {
      dispatch(failure(JSON.stringify(error.response.data)));
    });
};
