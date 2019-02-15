import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import thunk from "redux-thunk";
import RegistrationForm from "../RegistrationForm";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// eslint-disable-next-line
const func = jest.fn();

describe("RegistrationForm", () => {
  let store;
  const props = {
    state: {
      user: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      errors: {
        usernameError: "",
        emailError: "",
        passwordError: "",
        verifyPasswordError: ""
      }
    },
    registering: true,
    regErrored: true,
    handleChange: func,
    validateUserName: func,
    validateEmail: func,
    validatePassword: func,
    verifyPassword: func,
    handleSubmit: func,
    showErrors: func
  };
  beforeEach(() => {
    store = mockStore({});
  });
  it("always renders RegistrationForm", () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <RegistrationForm {...props} />
        </BrowserRouter>
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
