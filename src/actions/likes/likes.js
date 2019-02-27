import axios from "axios";
import { LIKE_REQUEST, LIKE_SUCCESS, LIKE_FAILURE } from "../types";
import { BASE_URL } from "../constants";
import getOneArticle from "../getOneArticleAction";

const likeArticle = data => (dispatch) => {
  const request = () => ({ type: LIKE_REQUEST });
  const success = resData => ({ type: LIKE_SUCCESS, payload: resData });
  const failure = error => ({ type: LIKE_FAILURE, payload: error });
  const { action, slug } = data;
  const url = `${BASE_URL}/api/v1/articles/${slug}/${action}/`;
  const token = localStorage.getItem("token");
  dispatch(request());
  return axios
    .post(
      url,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`
        }
      }
    )
    .then((response) => {
      dispatch(success(response.data));
      dispatch(getOneArticle(slug));
    })
    .catch((error) => {
      dispatch(failure(JSON.stringify(error.response.data)));
    });
};

export default likeArticle;
