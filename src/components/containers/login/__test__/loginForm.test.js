import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import React from "react";
import LoginForm from "../LoginForm";

configure({ adapter: new Adapter() });

describe("Profile: ", () => {
  let profileContainer;
  beforeEach(() => {
    profileContainer = shallow(<LoginForm />);
  });

  it("gets login: ", () => expect(profileContainer.exists()).toEqual(true));
  it("renders props:", () => {
    const profile = shallow(<LoginForm data="login" />);
    expect(profile.instance().props.data).toBe("login");
  });
});
