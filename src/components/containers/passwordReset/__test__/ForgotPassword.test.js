import { shallow, configure } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import ResetForm from "../../../../actions/forgotPassword";

configure({ adapter: new Adapter() });

describe("forgotPassword component", () => {
  it("should be a login component", () => {
    const tree = shallow(<ResetForm />);
    expect(tree).toMatchSnapshot();
  });
});
