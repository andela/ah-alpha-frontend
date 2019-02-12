import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actionCreators from "../profileActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const profileDetails = {
  bio: "i am a lover of nature",
  company: "safaricom",
  First_name: "John",
  Last_name: "Doe",
  location: "Nairobi",
  image:
    "https://res.cloudinary.com/dxecwuaqd/image/upload/v1550213877/DEV_ozyx26.jpg"
};

const updateProfileDetails = {
  bio: "i am a lover of nature",
  company: "Star city",
  First_name: "Smith",
  Last_name: "John",
  location: "Canada",
  image:
    "https://res.cloudinary.com/dxecwuaqd/image/upload/v1550213877/DEV_ozyx26.jpg"
};

describe("actions", () => {
  it("should return a get action", () => {
    const store = mockStore({});
    const expectedAction = {
      type: "GET_PROFILE_SUCCESS",
      profileDetails
    };
    const actionsDispatched = store.dispatch(
      actionCreators.getProfileSuccess(profileDetails)
    );
    expect(actionsDispatched.data).toEqual(expectedAction.profileDetails);
  });

  it("it should return a patch action", () => {
    const store = mockStore({});
    const expectedAction = {
      type: "UPDATE_PROFILE_SUCCESS",
      updateProfileDetails
    };
    const actionsDispatched = store.dispatch(
      actionCreators.updateProfileSuccess(updateProfileDetails)
    );
    expect(actionsDispatched.data).toEqual(expectedAction.updateProfileDetails);
  });
});
