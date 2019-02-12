import React from "react";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { mount, configure } from "enzyme";
import { MemoryRouter } from "react-router";
import { connectRouter } from "connected-react-router";
import { Provider } from "react-redux";
import EditProfile from "../profileEdit";
import { history } from "../../../../_helpers/history";

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("EditProfile with props: ", () => {
  it("clicks a button", () => {
    const props = {
      getProfile: {
        username: "",
        bio: "",
        company: "",
        First_name: "",
        Last_name: "",
        location: "",
        image: ""
      },
      actions: { updateProfile: () => Promise.resolve() },
      location: {
        pathname: "/profile-edit"
      }
    };
    const store = mockStore({
      router: connectRouter(history),
      login: {
        token: null,
        isLoggedIn: false,
        errors: {},
        username: null
      },
      profiles: {
        profile: {}
      }
    });
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <EditProfile {...props} />
        </MemoryRouter>
      </Provider>
    );
    const testValues = {
      username: "new",
      password: "data",
      // eslint-disable-next-line no-undef
      handleSubmit: jest.fn()
    };
    const event = {
      preventDefault() {},
      target: { value: "the-value" }
    };

    expect(wrapper.find("#form").exists()).toBe(true);
    expect(wrapper.find("#grid_system").exists()).toBe(true);
    expect(testValues.handleSubmit).toHaveBeenCalledTimes(0);

    wrapper.find("#cmp").simulate("change", event);

    const updateButton = wrapper.find("#sbmt-btn").first();
    updateButton.simulate("click");
  });
});
