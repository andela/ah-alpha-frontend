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
const fetchCommentsAction = {
  type: types.FETCH_COMMENTS,
  payload: [fakeComment]
};
const addCommentAction = {
  type: types.ADD_COMMENT,
  payload: [fakeComment]
};
it("should handle FETCH_COMMENTS by inserting all existing comments into state", () => {
  expect(commentListReducer(initialState, fetchCommentsAction)).toEqual({
    ...initialState,
    comments: [fakeComment]
  });
  it("should handle ADD_COMMENT by inserting a comment into state", () => {
    // eslint-disable-next-line no-undef
    expect(commentListReducer(initialState, addCommentAction)).toEqual({
      // eslint-disable-next-line no-undef
      ...initialState,
      comments: [fakeComment]
    });
  });
});
