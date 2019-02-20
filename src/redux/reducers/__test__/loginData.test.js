import initialState from "../../store/initialState";
import loginReducer from "../loginReducer";
import * as type from "../../../actions/types";

const payload = undefined;
const data = undefined;
const user = "ruiru";

describe("profile reducer test ", () => {
  it("returns initialState ", () => {
    expect(loginReducer(initialState, {})).toEqual(initialState);
  });

  it("gets profile ", () => {
    const obj = {
      type: type.LOGIN_REQUEST,
      payload
    };
    expect(loginReducer(initialState, obj).login).toEqual(payload);
  });

  it("returns intital state ", () => {
    const obj = {
      type: type.LOGIN_ERROR,
      data
    };
    expect(loginReducer(initialState, obj).profile).toEqual(data);
  });
});
