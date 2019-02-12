import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { LoginForm } from "../LoginForm";

const middlewares = [];
const mockStore = configureStore(middlewares);

configure({ adapter: new Adapter() });

describe("LoginForm", () => {
  let store;
  const props = {
    errors: {
      errors: {
        error: []
      }
    }
  };
  beforeEach(() => {
    store = mockStore({});
  });
  it("always renders LoginForm", () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm {...props} />
        </BrowserRouter>
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
