import reducers from "../../../../redux/reducers";

// eslint-disable-next-line no-undef
test("reducers", () => {
  let state;
  // eslint-disable-next-line prefer-const
  state = reducers(undefined, {});
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
    }
  });
});
