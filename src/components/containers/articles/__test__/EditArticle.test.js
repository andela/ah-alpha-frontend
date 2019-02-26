import React from "react";
import { shallow } from "enzyme";
import jest from "jest-mock";
import {
  mapStateToProps,
  mapDispatchToProps,
  EditArticle
} from "../EditArticle";

describe("EditArticle", () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      slug: "book",
      title: "title",
      body: "body",
      image: "image_path",
      tags: [],
      allTags: {
        tags: []
      },
      getTags: jest.fn()
    };
    wrapper = shallow(<EditArticle {...props} />);
  });

  const state = {
    fetchOneArticle: {
      article: {
        slug: "",
        title: "",
        body: "",
        image: undefined,
        tags: []
      }
    },
    createArticles: []
  };

  const dispatch = jest.fn(() => Promise.resolve());
  const dispatchProps = mapDispatchToProps(dispatch);

  it("should mach snapshots", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should mapStateToProps", () => {
    props = mapStateToProps(state);
    expect(props.slug).toEqual(state.fetchOneArticle.article.slug);
    expect(props.title).toEqual(state.fetchOneArticle.article.title);
    expect(props.body).toEqual(state.fetchOneArticle.article.body);
    expect(props.image).toEqual(state.fetchOneArticle.article.image);
    expect(props.tags).toEqual(state.fetchOneArticle.article.tags);
    expect(props.allTags).toEqual(state.createArticles);
  });

  it("should mapDispatchToProps for getTags", () => {
    dispatchProps.getTags();
    expect(dispatch).toHaveBeenCalled();
  });

  it("should mapDispatchToProps for getTags", () => {
    dispatchProps.editArticle();
    expect(dispatch).toHaveBeenCalled();
  });
});
