import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import * as actions from "../followActions";
import * as types from "../../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const payload = {
  profile: {
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
};

describe("Test Followers", () => {
  it("should return followers", () => {
    const store = mockStore({});
    const expectedAction = {
      type: types.FOLLOWERS_COUNT,
      payload
    };
    const actionsDispatched = store.dispatch(
      actions.getFollowersSuccess(payload)
    );
    expect(actionsDispatched).toEqual(expectedAction);
  });
});

describe("Test Following", () => {
  it("should return followings", () => {
    const store = mockStore({});
    const expectedAction = {
      type: types.FOLLOWING_COUNT,
      payload
    };
    const actionsDispatched = store.dispatch(
      actions.getFollowingSuccess(payload)
    );
    expect(actionsDispatched).toEqual(expectedAction);
  });
});

describe("Test Follow and Unfollow", () => {
  it("should follow or unfollow", () => {
    const store = mockStore({});
    const expectedAction = {
      type: types.FOLLOW_UNFOLLOW_SUCCESS,
      payload
    };
    const actionsDispatched = store.dispatch(
      actions.followHandlerSuccess(payload)
    );
    expect(actionsDispatched).toEqual(expectedAction);
  });
});
