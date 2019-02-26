import React from "react";
import { shallow } from "enzyme";
import jest from "jest-mock";
import {
  mapStateToProps,
  mapDispatchToProps,
  UserArticles
} from "../UserArticles";

describe("EditArticle", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      getAuthorsArticles: jest.fn()
    };
    wrapper = shallow(<UserArticles {...props} />);
  });

  const state = {
    userArticles: {
      userArticles: {},
      isFetching: ""
    }
  };

  const dispatch = jest.fn(() => Promise.resolve());
  const dispatchProps = mapDispatchToProps(dispatch);

  it("should mach snapshots", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should mapStateToProps", () => {
    props = mapStateToProps(state);
    expect(props.articles).toEqual(state.userArticles.userArticles);
    expect(props.isFetching).toEqual(state.userArticles.isFetching);
  });

  it("should mapDispatchToProps", () => {
    dispatchProps.getAuthorsArticles();
    expect(dispatch).toHaveBeenCalled();
  });
});
