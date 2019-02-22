import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import * as actions from "../forgotPassword";
import * as types from "../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const payload = { message: "Password request successfully" };

describe("Request password success action test", () => {
  it("should dispatch  request password success action", () => {
    const store = mockStore({});
    const expectedAction = {
      type: types.SEND_EMAIL,
      payload
    };
    const actionsDispatched = store.dispatch(actions.success(payload));
    expect(actionsDispatched).toEqual(expectedAction);
  });
});

describe("Request password action test", () => {
  it("should dispatch  request password success action", () => {
    const store = mockStore({});
    const expectedAction = {
      type: types.EMAIL_FAIL,
      payload
    };
    const actionsDispatched = store.dispatch(actions.failure(payload));
    expect(actionsDispatched).toEqual(expectedAction);
  });
});
