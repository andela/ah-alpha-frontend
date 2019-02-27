// eslint-disable-next-line import/named
import commentListReducer, { initialState } from "../commentReducer";
import * as types from "../../../actions/types";

const fakeComment = {
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
  },
  body: "fake coment body",
  id: 28
};
const fakeCommenttwo = {
  author_profile: {
  }
};
const fakeComments = {
  errors: "error"
};
const fetchCommentsAction = {
  type: types.FETCH_COMMENTS,
  payload: [fakeComment]
};
const failureCommentsAction = {
  type: types.FETCH_COMMENTS_FAILURE,
  payload: [fakeComments]
};

const addCommentAction = {
  type: types.ADD_COMMENT,
  payload: fakeComment

};
const FailedCommentAction = {
  type: types.ADD_COMMENT_FAILURE,
  payload: fakeCommenttwo

};
const deleteCommentsAction = {
  type: types.DELETE_COMMENT_SUCCESS
};
const faildeleteComments = {
  type: types.DELETE_COMMENT_FAILURE
};

it("should handle FETCH_COMMENTS by inserting all existing comments into state", () => {
  expect(commentListReducer(initialState, fetchCommentsAction)).toEqual({
    ...initialState,
    comments: [fakeComment]
  });
});

it("should handle ADD_COMMENT by inserting a comment into state", () => {
  expect(commentListReducer(initialState, addCommentAction)).toEqual({
    ...initialState,
    comments: [fakeComment]
  });
});

it("should handle ADD_COMMENT_FAILURE by raising an error", () => {
  expect(commentListReducer(initialState, FailedCommentAction)).toEqual({
    ...initialState,
    errors: fakeCommenttwo
  });
});
it("should handle FETCH_COMMENTS_FAILURE by raising an error", () => {
  expect(commentListReducer(initialState, failureCommentsAction)).toEqual({
    ...initialState,
    comments: [],
    errors: [{ errors: "error" }]
  });
});
it("should handle DELETE_COMMENT_SUCCESS ", () => {
  expect(commentListReducer(initialState, deleteCommentsAction)).toEqual({
    ...initialState,
    comments: []
  });
});
it("should handle DELETE_COMMENT_FAILURE ", () => {
  expect(commentListReducer(initialState, faildeleteComments)).toEqual({
    ...initialState,
    comments: []
  });
});
