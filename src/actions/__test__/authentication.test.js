import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";
import { registerUser, verifyUser } from "../authentication";
import { userConstants } from "../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async registration actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("creates REGISTER_SUCCESS when registration is successful", () => {
    const data = {
      user: {
        username: "dan",
        token: "xyz"
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
      userConstants.REGISTER_REQUEST,
      userConstants.REGISTER_SUCCESS
    ];
    const store = mockStore({});
    return store.dispatch(registerUser()).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);

      // return of async actions
      expect(actionTypes).toEqual(expectedActions);
    });
  });
});

describe("async verification actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
    // fetchMock.restore();
  });

  it("creates VERIFY_SUCCESS when registration is successful", () => {
    const data = {
      site: "haha.com"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      });
    });

    const expectedActions = [
      userConstants.VERIFY_REQUEST,
      userConstants.VERIFY_SUCCESS
    ];
    const store = mockStore({});

    return store.dispatch(verifyUser()).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);

      // return of async actions
      expect(actionTypes).toEqual(expectedActions);
    });
  });
});
