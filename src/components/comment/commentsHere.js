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
    return (
      <div className="ui comments">
        <div className="comment">
          <a className="avatar">
            <img src={this.props.comment.author_profile.image} alt="commenter avatar" />
          </a>
          <div className="content">
            <a className="author"><p>{this.props.comment.author_profile.username}</p></a>
            <div className="text">
              <span className="comment-body">
                {this.props.comment.body}
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
