/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { Component } from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addComment } from "../../actions/postCommentActions";

// Need to be globally available
let elem = "";
let errorSubscript = "";
// eslint-disable-next-line no-var

class AddCommentComponent extends Component {
  state = {
    comment: "",
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
      const { addComment, slug } = this.props;
      const { comment } = this.state;
      // Format comment as API expects
      const newComment = {
        comment: {
          body: comment
        }
      };

      addComment(newComment, slug);
      this.setState({ comment: "" });
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
        this.onCommentSubmit()
      ); }
  }

  render() {
    return (
      <form
        className="ui reply form"
        action=""
        method="post"
      >
        <div className="field">
          <textarea
            // eslint-disable-next-line react/destructuring-assignment
            value={this.state.comment}
            onChange={this.onCommentInput}
            onFocus={this.onCommentInput}
            placeholder="Enter comment..."
          />
          <div>
            <br />
            {this.state.comment === "" ? (
              <button
                className="ui medium basic black button disabled"
                type="button"
              >
                <i className="sign in icon" />
                Add Comment
              </button>
            ) : (
              <button
                className="ui medium basic black button"
                onClick={this.checkUser}
                type="button"
              >
                <i className="sign in icon" />
              Add Comment
              </button>
            )}
          </div>
        </div>
      </form>
    );
  }
}

AddCommentComponent.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(AddCommentComponent);
