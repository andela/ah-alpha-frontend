import reducers from "..";

describe("reducers", () => {
  it("should test the reducer", () => {
    const state = reducers(undefined, {});
    expect(state).toEqual({
      data: {
        errors: {}, isLoggedIn: false, profiles: { profile: {} }, token: null, username: null
      },
      forgotPassword: {},
      passwordReset: {},
      profiles: {
        errors: {}, isLoggedIn: false, profiles: { profile: {} }, token: null, username: null
      },
      count: {
        followers: [],
        followers_count: 0,
        following: [],
        following_count: 0,
        isUser: false
      },
      registration: {},
      socialAuth: { message: "" },
      verification: {}
    });
  });
});
