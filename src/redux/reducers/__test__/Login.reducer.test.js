import reducers from "..";

describe("reducers", () => {
  it("should test the reducer", () => {
    const state = reducers(undefined, {});
    expect(state).toEqual({
      data: {
        token: null,
        isLoggedIn: false,
        errors: {},
        username: null
      }
    });
  });
});
