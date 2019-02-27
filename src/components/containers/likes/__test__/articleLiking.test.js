import React from "react";
import { shallow } from "enzyme";

import ArticleLiking from "../ArticleLiking";

describe("ArticleLiking component", () => {
  it("should render correctly", () => {
    const component = shallow(<ArticleLiking />);
    expect(component).toMatchSnapshot();
  });
});
