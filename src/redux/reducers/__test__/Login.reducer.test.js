import reducers from "..";

describe("reducers", () => {
  it("should test the reducer", () => {
    const state = reducers(undefined, {});
    expect(state).toEqual({
      data: {
        errors: {},
        isLoggedIn: false,
        token: null,
        username: null
      },
      socialAuth: { message: "" }
    });
  });
});
