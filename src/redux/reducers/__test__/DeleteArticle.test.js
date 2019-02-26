import deleteArticleReducer from "../articles/deleteArticleReducer";
import * as types from "../../../actions/types";

const initialState = {};

it("should handle delete success article", () => {
  expect(
    deleteArticleReducer(initialState, {
      type: types.DELETE_ARTICLE_SUCCESS
    })
  ).toEqual({
    ...initialState
  });
});

it("should handle delete error article", () => {
  expect(
    deleteArticleReducer(initialState, {
      type: types.DELETE_ARTICLE_ERROR
    })
  ).toEqual({
    ...initialState
  });
});

it("should handle delete loading an article", () => {
  expect(
    deleteArticleReducer(initialState, {
      type: types.DELETE_ARTICLE_REQUEST,
      isLoading: true
    })
  ).toEqual({
    ...initialState,
    isLoading: true
  });
});
