import expect from "expect";

import * as types from "../types";
import * as actions from "../commentActions";

describe("Comment Actions", () => {
  it("should dispatch FETCH_COMMENTS after successfuly fetching comments", () => {
    // List of comments
    const comments = [];
    const expectedAction = {
      type: types.FETCH_COMMENTS,
      payload: comments
    };
    expect(actions.fetchCommentsSuccess(comments)).toEqual(expectedAction);
  });

  it("should dispatch FETCH_COMMENTS_FAILURE on error when fetching comments", () => {
    // List of comments
    const errors = {};
    const expectedAction = {
      type: types.FETCH_COMMENTS_FAILURE,
      payload: errors
    };
    expect(actions.fetchCommentsFailure(errors)).toEqual(expectedAction);
  });
});
