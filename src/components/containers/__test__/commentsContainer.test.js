import React from "react";
import { shallow } from "enzyme";
import jest from "jest-mock";
import CommentsContainer, { mapStateToProps, mapDispatchToProps } from "../commentsContainer";

describe("CommentsContainer", () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      comments: {},
      fetchComments: jest.fn()
    };
    wrapper = shallow(<CommentsContainer {...props} />);
  });

  const state = {
    commentListReducer: {
      comments: {
      }
    }
  };

  const dispatch = jest.fn(() => Promise.resolve());
  const dispatchProps = mapDispatchToProps(dispatch);

  it("should mach snapshots", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should mapStateToProps", () => {
    props = mapStateToProps(state);
    expect(props.comments).toEqual(state.commentListReducer.comments);
  });

  it("should mapDispatchToProps for getTags", () => {
    dispatchProps.fetchComments();
    expect(dispatch).toHaveBeenCalled();
  });
});
