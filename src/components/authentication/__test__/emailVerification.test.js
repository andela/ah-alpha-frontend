
import React from "react";
import { shallow } from "enzyme";

import VerifyEmail from "../EmailVerification";

describe("Email Verification", () => {
  it("should render correctly", () => {
    const component = shallow(<VerifyEmail />);
    expect(component).toMatchSnapshot();
  });
});
