/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
// Component to house each comment
import React, { Component } from "react";
import PropTypes from "prop-types";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { comment } = this.props;
    const { body, author_profile: { image, username } } = comment;
    return (
      <div className="ui comments">
        <div className="comment">
          <a href="#" className="avatar">
            <img src={image} alt="commenter avatar" />
          </a>
          <div className="content">
            <a href="#" className="author"><p>{username}</p></a>
            <div className="text">
              <span className="comment-body">
                { body }
              </span>
            </div>
            <div className="metadata">
              <span className="timeStamp">
                {this.props.comment.created_at}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};
export default Comment;
