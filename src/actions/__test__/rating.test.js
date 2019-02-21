import expect from "expect";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { rateArticle } from "../rating/rating";
import { RATING_FAILURE, RATING_REQUEST, RATING_SUCCESS } from "../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async post rating actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("creates RATING_SUCCESS when rating has been posted successfully", () => {
    const data = {
      message: "Article rated successfully",
      data: {
        article: "what-is-lorem-ipsum",
        average_rating: 3,
        rate_count: 1,
        your_rating: 3
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      });
    });

    const expectedActions = [
      { type: RATING_REQUEST },
      {
        type: RATING_SUCCESS,
        payload: {
          article: "what-is-lorem-ipsum",
          average_rating: 3,
          rate_count: 1,
          your_rating: 3
        }
      }
    ];
    const store = mockStore({});
    return store.dispatch(rateArticle(data)).then(() => {
      const dispatchedActions = store.getActions();

      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it("creates RATING_SUCCESS when rating has been posted successfully", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {}
      });
    });

    const expectedActions = [
      { type: RATING_REQUEST },
      {
        type: RATING_FAILURE,
        payload: JSON.stringify({})
      }
    ];
    const store = mockStore({});
    const data = {
      your_rating: 1,
      slug: "test"
    };
    return store.dispatch(rateArticle(data)).then(() => {
      const dispatchedActions = store.getActions();

      expect(dispatchedActions).toEqual(expectedActions);
    });
  });
});
