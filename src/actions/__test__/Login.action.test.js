import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import loginUser from "../loginActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const userData = {
  email: "malani@gmail.com",
  password: "Malan123"
};

describe("actions", () => {
  it("login a user", () => {
    const store = mockStore({});
    const actionsDispatched = store.dispatch(loginUser(userData));
    expect(actionsDispatched).toEqual(actionsDispatched);
  });
});
