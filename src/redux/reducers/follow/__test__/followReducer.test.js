import followReducer from "../followReducer";
import * as types from "../../../../actions/types";

const payload = [
  [
    {
      username: "jane",
      image:
        "https://res.cloudinary.com/dxecwuaqd/image/upload/v1548231850/jrp16w4auxhj0da6jcbk",
      bio: "",
      location: "",
      First_name: "",
      Last_name: "",
      following: true,
      company: "",
      created_at: "2019-02-13T14:17:05.448780Z",
      updated_at: "2019-02-13T14:17:05.448841Z"
    }
  ]
];

describe("Follow reducer", () => {
  it("should return the initial state", () => {
    expect(followReducer(undefined, {})).toEqual({
      following_count: 0,
      followers_count: 0,
      followers: [],
      following: [],
      isUser: false
    });
  });
  it("should return followers and count", () => {
    expect(
      followReducer([], {
        type: types.FOLLOWERS_COUNT,
        payload
      })
    ).toEqual({
      followers: payload,
      followers_count: 1
    });
  });
  it("should return following and count", () => {
    expect(
      followReducer([], {
        type: types.FOLLOWING_COUNT,
        payload
      })
    ).toEqual({
      following: payload,
      following_count: 1
    });
  });
});
