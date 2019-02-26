import React from "react";
import { shallow } from "enzyme";
import {
  mapStateToProps,
  RemoveArticle
} from "../DeleteArticle";

describe("Delete Article", () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      article: {
        id: 1,
        title: "title",
        body: "body",
        image: "fghjk",
        tags: []
      }
    };
    wrapper = shallow(<RemoveArticle {...props} />);
  });

  it("should match snaptshots", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should mapStateTOProps", () => {
    props = mapStateToProps(props);
    expect(props.article).toBeUndefined();
  });
});
