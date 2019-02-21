import React from "react";
import { shallow } from "enzyme";

import ArticleRating from "../Rating";

describe("ArticleRating component", () => {
  it("should render correctly", () => {
    const component = shallow(<ArticleRating />);
    expect(component).toMatchSnapshot();
  });
});
