import React from "react";
import { shallow } from "enzyme";

import ArticleRating from "../Rating";

const handleRate = jest.fn();
describe("ArticleRating component", () => {
  it("should render correctly", () => {
    const component = shallow(<ArticleRating />);
    expect(component).toMatchSnapshot();
  });

  it("should call the rating function on click", () => {
    const component = shallow(<ArticleRating onRate={handleRate} />);
    component.simulate("click");
    expect(handleRate).toHaveBeenCalled();
  });
});
