/* eslint-disable no-shadow */
// Container for all comments. Will be imported into Articles app

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Comment from "../comment/commentsHere";
import { fetchComments } from "../../actions/commentActions";
import AddCommentComponent from "../comment/addComment";

class CommentsContainer extends Component {
  componentDidMount() {
    const { fetchComments, slug } = this.props;
    fetchComments(slug);
  }

  render() {
    const { comments, slug } = this.props;
    return (
      <div>
        <h3 className="ui dividing header">Comments</h3>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        )) }
        <AddCommentComponent slug={slug} />
      </div>
    );
  }
}

CommentsContainer.propTypes = {
  comments: PropTypes.array.isRequired,
  fetchComments: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
  comments: state.commentListReducer.comments
});

export const mapDispatchToProps = dispatch => ({
  fetchComments: slug => dispatch(fetchComments(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
