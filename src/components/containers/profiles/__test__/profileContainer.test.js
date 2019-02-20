import React from "react";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { mount, configure } from "enzyme";
import { MemoryRouter } from "react-router";
import { connectRouter } from "connected-react-router";
import { Provider } from "react-redux";
import Profile from "../profiles";
import { history } from "../../../../_helpers/history";

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Profile with props: ", () => {
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
      actions: { getProfile: () => Promise.resolve() },
      location: {
        pathname: "/profile"
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
          <Profile {...props} />
        </MemoryRouter>
      </Provider>
    );
    const updateButton = wrapper.find("#profile-edit");
    updateButton.simulate("click");
  });
});
