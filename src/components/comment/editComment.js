/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { Component } from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { editComment } from "../../actions/postCommentActions";

// Need to be globally available
let elem = "";
let errorSubscript = "";
// eslint-disable-next-line no-var

class EditCommentComponent extends Component {
  state = {
    comment: this.props.body,
    onEditClick: this.props.onEditClick,
    // eslint-disable-next-line react/no-unused-state
    isDisabled: true
  }

  onCommentInput = (e) => {
    this.setState({ comment: e.target.value });
    elem = e.target;
    errorSubscript = elem.parentElement.parentElement.parentElement.querySelector("p");
    this.setState.isDisabled = false;
  }

  onCommentSubmit = () => {
    // Validate input
    if (elem.value !== "") {
      // eslint-disable-next-line no-shadow
      const { editComment, slug, commentID } = this.props;
      const { comment } = this.state;
      // Format comment as API expects
      const newComment = {
        comment: {
          body: comment
        }
      };

      editComment(newComment, slug, commentID);
      this.state.onEditClick();
    } else {
      errorSubscript.innerHTML = "This field may not be blank";
    }
  }

  checkUser = () => {
    // Validate input
    { !localStorage.getItem("token")
      || localStorage.getItem("token") === undefined ? (
        toast.error("Login to Comment")
      ) : (
        this.onCommentSubmit(),
        this.state.onEditClick()
      ); }
  }

  render() {
    return (
      <form
        className="ui reply form"
        action=""
        method="put"
      >
        <div className="field">
          <textarea
            // eslint-disable-next-line react/destructuring-assignment
            value={this.state.comment}
            onChange={this.onCommentInput}
            onFocus={this.onCommentInput}
          />
          <div>
            <br />
            <button
              className="ui medium basic black button"
              type="button"
              onClick={this.onCommentSubmit}
            >
              <i className="sign in icon" />
              Edit Comment
            </button>
          </div>
        </div>
      </form>
    );
  }
}

EditCommentComponent.propTypes = {
  editComment: PropTypes.func.isRequired
};

export default connect(null, { editComment })(EditCommentComponent);
