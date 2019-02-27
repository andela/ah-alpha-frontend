/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
// Component to house each comment
import React, { Component } from "react";
import { connect } from "react-redux";
import { Confirm } from "semantic-ui-react";
import PropTypes from "prop-types";
import moment from "moment";
import { deleteComment } from "../../actions/commentActions";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  onDeleteClick = () => {
    // eslint-disable-next-line no-shadow
    const { deleteComment, comment, slug } = this.props;
    deleteComment(slug, comment.id);
    this.handleConfirm();
  }

  show = () => this.setState({ open: true })

  handleConfirm = () => this.setState({ open: false })

  handleCancel = () => this.setState({ open: false })

  render() {
    const { comment } = this.props;
    const { body, author_profile: { image, username } } = comment;
    const { open } = this.state;
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
                {moment(this.props.comment.created_at).calendar()}
              </span>
            </div>
            {!localStorage.getItem("token")
                    || localStorage.getItem("token") === undefined ? (
                      <div />
              ) : localStorage.getItem("username")
                      !== username ? (
                        <div />
                ) : (
                  <div>
                    <i
                      onClick={this.show}
                      className="trash alternate outline icon"
                    />
                    <Confirm
                      open={open}
                      size="mini"
                      header="Confirm Delete!"
                      content="Are you sure you want to delete this comment?"
                      onCancel={this.handleCancel}
                      onConfirm={this.onDeleteClick}
                    />
                  </div>
                )}
          </div>
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export const mapDispatchToProps = dispatch => ({
  deleteComment: (slug, commentId) => dispatch(deleteComment(slug, commentId))
});

export default connect(
  mapDispatchToProps,
  { deleteComment }
)(Comment);
