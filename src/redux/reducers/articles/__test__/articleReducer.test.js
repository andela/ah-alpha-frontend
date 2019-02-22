import createArticlesReducer from "../createArticlesReducer";
import * as types from "../../../../actions/types";

const payload = {
  id: 17,
  author: {
    username: "jane",
    email: "jane.doe@gmail.com",
    favorites: []
  },
  image_path: null,
  title: "this a title",
  body: "this is a body",
  tags: ["One", "Two"],
  like_count: 0,
  dislike_count: 0,
  like_status: "Null",
  rating: 0,
  read_time: "0:01:00",
  slug: "this-a-title",
  created_at: "2019-02-21T04:45:52.330862Z",
  updated_at: "2019-02-21T04:45:52.330985Z",
  favourites: false
};

const tagPayload = ["One", "Two"];

describe("Create article reducer", () => {
  it("should return the initial state", () => {
    expect(createArticlesReducer(undefined, {})).toEqual({
      article: [],
      error: [],
      tags: []
    });
  });
  it("should return created article", () => {
    expect(
      createArticlesReducer([], {
        type: types.CREATE_ARTICLE_SUCCESS,
        payload
      })
    ).toEqual({
      article: payload
    });
  });
  it("should return all tags", () => {
    expect(
      createArticlesReducer([], {
        type: types.GET_TAGS_SUCCESS,
        payload
      })
    ).toEqual({
      tags: tagPayload
    });
  });
});
