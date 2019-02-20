import { shallow, configure } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import FollowButton from "../followButton";
import Follow from "../index";

configure({ adapter: new Adapter() });

describe("Follow button component being rendered", () => {
  it("should be a follow button", () => {
    const tree = shallow(<FollowButton />);
    expect(tree).toMatchSnapshot();
  });
});

describe("Follow component being rendered", () => {
  it("should be a follow component", () => {
    const tree = shallow(<Follow />);
    expect(tree).toMatchSnapshot();
  });
});
