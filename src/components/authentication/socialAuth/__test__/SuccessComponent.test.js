import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SuccessComponent from "../SuccessComponent";

configure({ adapter: new Adapter() });

describe("SuccessComponent", () => {
  it("checks that SemanticToastContainer is rendered", () => {
    const wrapper = shallow(<SuccessComponent success />);
    expect(wrapper.find("SemanticToastContainer").length).toEqual(1);
  });
});
