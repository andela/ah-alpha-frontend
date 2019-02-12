import initialState from "../../../store/initialState";
import profileReducer from "../profileReducer";

const data = "User profile";

describe("profile reducer test ", () => {
  it("returns initialState ", () => {
    expect(profileReducer(initialState, {})).toEqual(initialState);
  });

  it("gets profile ", () => {
    const obj = {
      type: "GET_PROFILE_SUCCESS",
      data
    };
    expect(profileReducer(initialState, obj).profile).toEqual(data);
  });

  it("updates profile", () => {
    const obj = {
      type: "UPDATE_PROFILE_SUCCESS",
      data
    };
    expect(profileReducer(initialState, obj).profile).toEqual(data);
  });
});
