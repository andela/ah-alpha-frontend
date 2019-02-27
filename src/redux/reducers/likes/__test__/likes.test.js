import likesReducer from "../likes";
import { LIKE_REQUEST, LIKE_SUCCESS, LIKE_FAILURE } from "../../../../actions/types";

describe("likes reducer", () => {
  it("should return the initial state", () => {
    expect(likesReducer(undefined, {})).toEqual({});
  });

  it("should handle liking or disliking request", () => {
    expect(likesReducer(
      {},
      {
        type: LIKE_REQUEST
      }
    )).toEqual({ sending_like: true });

    expect(likesReducer(
      {},
      {
        type: LIKE_SUCCESS,
        payload: {}
      }
    )).toEqual({ sending_like: false });
    expect(likesReducer({}, { type: LIKE_FAILURE })).toEqual({
      sending_like: false,
      failed: true
    });
  });
});
