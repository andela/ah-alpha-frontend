import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import React from "react";
import Profile from "../profiles";

configure({ adapter: new Adapter() });

describe("Profile: ", () => {
  let profileContainer;
  beforeEach(() => {
    profileContainer = shallow(<Profile />);
  });

  it("gets profile: ", () => expect(profileContainer.exists()).toEqual(true));
  it("renders props:", () => {
    const profile = shallow(<Profile data="alpha" />);
    expect(profile.instance().props.data).toBe("alpha");
  });
});
