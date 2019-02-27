import expect from "expect";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import likeArticle from "../likes/likes";
import { LIKE_REQUEST, LIKE_SUCCESS, LIKE_FAILURE } from "../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async liking actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("creates LIKE_SUCCESS when a like has been posted successfully", () => {
    const response = {
      result: "Great, you've liked this",
      status: "Liked",
      like_count: 1,
      dislike_count: 0
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        data: response
      });
    });

    const expectedActions = [
      { type: LIKE_REQUEST },
      {
        type: LIKE_SUCCESS
      }
    ];
    const store = mockStore({});
    const data = {
      slug: "test",
      action: "like"
    };
    return store.dispatch(likeArticle(data)).then(() => {
      const dispatchedActions = store.getActions();

      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it("creates LIKE_SUCCESS when a dislike has been posted successfully", () => {
    const response = {
      result: "Okay, you've disliked this",
      status: "Disliked",
      like_count: 1,
      dislike_count: 0
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        data: response
      });
    });

    const expectedActions = [
      { type: LIKE_REQUEST },
      {
        type: LIKE_SUCCESS
      }
    ];
    const store = mockStore({});
    const data = {
      slug: "test",
      action: "dislike"
    };
    return store.dispatch(likeArticle(data)).then(() => {
      const dispatchedActions = store.getActions();

      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it("creates LIKE_FAILURE when liking/disliking has failed", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {}
      });
    });

    const expectedActions = [
      { type: LIKE_REQUEST },
      {
        type: LIKE_FAILURE,
        payload: JSON.stringify({})
      }
    ];
    const store = mockStore({});
    const data = {
      slug: "test",
      action: "dislike"
    };
    return store.dispatch(likeArticle(data)).then(() => {
      const dispatchedActions = store.getActions();

      expect(dispatchedActions).toEqual(expectedActions);
    });
  });
});
