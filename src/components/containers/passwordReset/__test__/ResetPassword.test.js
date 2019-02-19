import { shallow, configure } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import ResetPassword from "../../../../actions/resetPasswd";

configure({ adapter: new Adapter() });

describe("ResetPassword component", () => {
  it("should be a reset component", () => {
    const tree = shallow(<ResetPassword />);
    expect(tree).toMatchSnapshot();
  });
});
