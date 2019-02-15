import React from "react";
import { shallow } from "enzyme";

import RegistrationModal from "../Registration";

describe("RegistrationModal", () => {
  it("should render correctly", () => {
    const component = shallow(<RegistrationModal />);
    expect(component).toMatchSnapshot();
  });
});
