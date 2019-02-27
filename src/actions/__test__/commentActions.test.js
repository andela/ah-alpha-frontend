import expect from "expect";

import * as types from "../types";
import * as actions from "../commentActions";
import * as actiontest from "../postCommentActions";

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
  it("should dispatch ADD_COMMENT on successfully posting comment", () => {
    // List of comments
    const comment = {
      id: 100,
      body: "body tu flani",
      author_profile: {
        First_name: "Malani",
        Last_name: "Wachira",
        bio: "Am a software developer",
        company: "Andela",
        created_at: "2019-02-21T15:40:59.667893Z",
        following: false,
        image: "https://res.cloudinary.com/dxecwuaqd/image/upload/v1550764707/mascot_16_re1khd",
        location: "Kenya",
        updated_at: "2019-02-21T15:58:31.008946Z",
        username: "Malani"
      }
    };

    const expectedAction = {
      type: types.ADD_COMMENT,
      payload: comment
    };
    expect(actiontest.addCommentSuccess(comment)).toEqual(expectedAction);
  });
  it("should dispatch ADD_COMMENT_FAILURE on error when posting comment fails", () => {
    // List of comments
    const errors = {};

    const expectedAction = {
      type: types.ADD_COMMENT_FAILURE,
      payload: errors
    };
    expect(actiontest.addCommentFailure(errors)).toEqual(expectedAction);
  });
  it("should dispatch DELETE_COMMENT_SUCCESS after successfuly deleting a comment", () => {
    // display empty list after deleting comment
    const comments = [];
    const expectedAction = {
      type: types.DELETE_COMMENT_SUCCESS,
      payload: comments
    };
    expect(actions.deleteCommentsSuccess(comments)).toEqual(expectedAction);
  });
  it("should dispatch DELETE_COMMENT_FAILURE after failing to delete a comment", () => {
    const comments = [];
    const expectedAction = {
      type: types.DELETE_COMMENT_FAILURE,
      payload: comments
    };
    expect(actions.deleteCommentsFailure(comments)).toEqual(expectedAction);
  });

  it("should dispatch EDIT_COMMENT_SUCCESS after successfuly editing a comment", () => {
    // display empty list after deleting comment
    const comments = [];
    const expectedAction = {
      type: types.EDIT_COMMENT,
      payload: comments,
      isEdit: true
    };
    expect(actiontest.editCommentSuccess(comments)).toEqual(expectedAction);
  });
  it("should dispatch EDIT_COMMENT_FAILURE after failing to edit a comment", () => {
    const comments = [];
    const expectedAction = {
      type: types.EDIT_COMMENT_FAILURE,
      payload: comments

    };
    expect(actiontest.editCommentFailure(comments)).toEqual(expectedAction);
  });
});
