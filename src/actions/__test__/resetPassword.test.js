import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import * as actions from "../resetPasswd";
import * as types from "../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const payload = { message: "Password reset successfully" };

describe("Reset password action test", () => {
  it("should dispatch reset password success action", () => {
    const store = mockStore({});
    const expectedAction = {
      type: types.RESET_SUCCESS,
      payload
    };
    const actionsDispatched = store.dispatch(actions.success(payload));
    expect(actionsDispatched).toEqual(expectedAction);
  });
});

describe("Create article error action test", () => {
  it("should dispatch reset password fail action", () => {
    const store = mockStore({});
    const expectedAction = {
      type: types.RESET_FAIL,
      payload
    };
    const actionsDispatched = store.dispatch(actions.failure(payload));
    expect(actionsDispatched).toEqual(expectedAction);
  });
});
