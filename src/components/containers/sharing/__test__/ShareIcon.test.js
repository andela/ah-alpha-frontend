import React from "react";
import { shallow } from "enzyme";
import ShareIcons from "../ShareIcons";

describe("EditArticle", () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      slug: "book",
      title: "title",
      author: "bolt"
    };
    wrapper = shallow(<ShareIcons {...props} />);
  });

  it("should mach snapshots", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
