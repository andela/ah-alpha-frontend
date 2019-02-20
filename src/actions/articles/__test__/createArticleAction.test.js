import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import * as actions from "../createArticleActions";
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

describe("Create article success action test", () => {
  it("should dispatch create article success action", () => {
    const store = mockStore({});
    const expectedAction = {
      type: types.CREATE_ARTICLE_SUCCESS,
      payload
    };
    const actionsDispatched = store.dispatch(
      actions.createArticleSuccess(payload)
    );
    expect(actionsDispatched).toEqual(expectedAction);
  });
});

describe("Create article error action test", () => {
  it("should dispatch create article error action", () => {
    const store = mockStore({});
    const expectedAction = {
      type: types.CREATE_ARTICLE_ERROR,
      payload
    };
    const actionsDispatched = store.dispatch(
      actions.createArticleError(payload)
    );
    expect(actionsDispatched).toEqual(expectedAction);
  });
});

describe("Get tags action test", () => {
  it("should dispatch get tags action", () => {
    const store = mockStore({});
    const expectedAction = {
      type: types.GET_TAGS_SUCCESS,
      payload
    };
    const actionsDispatched = store.dispatch(
      actions.getTagSuccess(payload)
    );
    expect(actionsDispatched).toEqual(expectedAction);
  });
});
