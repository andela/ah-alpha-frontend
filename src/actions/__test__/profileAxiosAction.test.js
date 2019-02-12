import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getProfile, updateProfile } from "../profileActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const userData = {
  bio: "i am a lover of nature",
  company: "safaricom",
  First_name: "John",
  Last_name: "Doe",
  location: "Nairobi",
  image:
    "https://res.cloudinary.com/dxecwuaqd/image/upload/v1550213877/DEV_ozyx26.jpg"
};

const newUser = {
  bio: "i am a lover of nature",
  company: "safaricom",
  First_name: "John",
  Last_name: "Doe",
  location: "Nairobi",
  image:
    "https://res.cloudinary.com/dxecwuaqd/image/upload/v1550213877/DEV_ozyx26.jpg"
};

describe("actions", () => {
  it("gets a user profile", () => {
    const store = mockStore({});
    const actionsDispatched = store.dispatch(getProfile(userData));
    expect(actionsDispatched).toEqual(actionsDispatched);
  });
  it("gets an update", () => {
    const store = mockStore({});
    const actionsDispatched = store.dispatch(updateProfile(newUser));
    expect(actionsDispatched).toEqual(actionsDispatched);
  });
  it("returns empty", () => {
    const store = mockStore({});
    const actionsDispatched = store.dispatch(updateProfile());
    expect(actionsDispatched).toEqual(actionsDispatched);
  });
});
