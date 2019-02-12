// import React from "react";
// import configureMockStore from "redux-mock-store";
// import thunk from "redux-thunk";
// import { shallow } from "enzyme";
// import { Provider } from "react-redux";
// import { MemoryRouter } from "react-router";

// import LoginForm from "../login/LoginForm";
// import { loginUser } from "../login/actions/loginActions";
// import { LOGIN_SUCCESS } from "../login/actions/types";

// const middleware = [thunk];
// const mockStore = configureMockStore(middleware);

// const store = mockStore({
//   token: null,
//   isLoggedIn: false,
//   errors: {},
//   username: null
// });

// // const store = mockStore;

// describe("when a user logs in", () => {
//   it("fires a login request action", () =>
//     store
//       .dispatch(
//         loginUser({
//           user: {
//             email: "malani@gmail.com",
//             password: "Malani123"
//           }
//         })
//       )
//       .then(() =>
//         expect(store.getActions()).toContainEqual({
//           type: LOGIN_SUCCESS
//         })
//       ));
// });

import reducers from "../../../redux/reducers";

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

// eslint-disable-next-line no-undef
test("login", () => {
  let state;
  // eslint-disable-next-line no-unused-expressions
  state;
});
