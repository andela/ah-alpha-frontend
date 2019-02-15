import { registration, verification } from "../registration";
import { userConstants } from "../../../actions/constants";

describe("registration reducer", () => {
  it("should return the initial state", () => {
    expect(registration(undefined, {})).toEqual({});
  });

  it("should handle registration request", () => {
    expect(
      registration(
        {},
        {
          type: userConstants.REGISTER_REQUEST
        }
      )
    ).toEqual({
      registering: true
    });

    expect(
      registration(
        {},
        {
          type: userConstants.REGISTER_SUCCESS
        }
      )
    ).toEqual({
      registered: true,
      registering: false
    });
    expect(
      registration(
        {},
        {
          type: userConstants.REGISTER_FAILURE,
          payload: undefined
        }
      )
    ).toEqual({
      regErrored: registration.payload,
      registering: false
    });
  });
});

describe("verification reducer", () => {
  it("should return the initial state", () => {
    expect(verification(undefined, {})).toEqual({});
  });

  it("should handle registration request", () => {
    expect(
      verification(
        {},
        {
          type: userConstants.VERIFY_REQUEST
        }
      )
    ).toEqual({
      verifying: true
    });

    expect(
      verification(
        {},
        {
          type: userConstants.VERIFY_SUCCESS,
          payload: undefined
        }
      )
    ).toEqual({
      verified: true,
      verifying: false,
      token: verification.payload
    });
    expect(
      verification(
        {},
        {
          type: userConstants.VERIFY_FAILURE,
          payload: undefined
        }
      )
    ).toEqual({
      verificationError: verification.payload,
      verifying: false
    });
  });
});
