import reducers from "..";

describe("reducers", () => {
  it("should test the reducer", () => {
    const state = reducers(undefined, {});
    expect(state).toEqual({
      data: {
        errors: {},
        isLoggedIn: false,
        profiles: { profile: {} },
        token: null,
        username: null
      },
      profiles: {
        errors: {},
        isLoggedIn: false,
        profiles: { profile: {} },
        token: null,
        username: null
      },
      registration: {},
      verification: {},
      socialAuth: { message: "" }
    });
  });
});
