import reducers from "..";

describe("reducers", () => {
  it("should test the reducer", () => {
    const state = reducers(undefined, {});
    expect(state).toEqual({
      count: {
        followers: [],
        followers_count: 0,
        following: [],
        following_count: 0,
        isUser: false
      },
      data: {
        errors: {},
        isLoggedIn: false,
        profiles: { profile: {} },
        token: null,
        username: null
      },
      fetchArticles: {},
      fetchOneArticle: {},
      forgotPassword: {},
      passwordReset: {},
      profiles: {
        errors: {},
        isLoggedIn: false,
        profiles: { profile: {} },
        token: null,
        username: null
      },
      ratingReducer: {},
      registration: {},
      verification: {},
      socialAuth: { message: "" },
      createArticles: {
        article: [],
        error: [],
        tags: []
      }
    });
  });
});
