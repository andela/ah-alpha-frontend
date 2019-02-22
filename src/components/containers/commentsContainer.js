/* eslint-disable no-shadow */
// Container for all comments. be rendered into Articles app
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Comment from "../comment/commentsHere";
import { fetchComments } from "../../actions/commentActions";

class CommentsContainer extends Component {
  componentDidMount() {
    const { fetchComments, slug } = this.props;
    fetchComments(slug);
  }

  render() {
    const { comments } = this.props;
    return (
      <div>
        <h3 className="ui dividing header">Comments</h3>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        )) }
      </div>
    );
  }
}

CommentsContainer.propTypes = {
  comments: PropTypes.array.isRequired,
  fetchComments: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  comments: state.commentListReducer.comments
});

export default connect(mapStateToProps, { fetchComments })(CommentsContainer);
