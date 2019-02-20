import { shallow, configure } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import createArticles, {
  mapStateToProps
} from "../CreateArticles";

configure({ adapter: new Adapter() });

describe("Create Article container being rendered", () => {
  it("should be create article container", () => {
    const tree = shallow(<createArticles />);
    expect(tree).toMatchSnapshot();
  });
});

describe("ArticleDetail", () => {
  let props;
  let state;

  beforeEach(() => {
    props = {
      title: "",
      body: "",
      tags: [],
      image: "/"
    };

    state = {
      articles: undefined,
      tags: undefined,
      errors: undefined
    };
  });

  it("should map the state to props", () => {
    props = mapStateToProps(state);
    expect(props).toEqual(state);
  });
});
