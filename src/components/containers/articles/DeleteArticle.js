import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import React from "react";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import { Confirm } from "semantic-ui-react";
import { deleteArticle } from "../../../actions/articles/deleteArticleActions";
import { Link } from "react-router-dom";

export class RemoveArticle extends React.Component {
  state = {
    open: false
  };
  show = () => this.setState({ open: true });

  handleConfirm = () => this.setState({ open: false });

  handleCancel = () => this.setState({ open: false });

  ownerDelete = () => {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("username");
    if (!token || token === undefined) {
      toast.error("Please login to acess");
    } else {
      if (!username) {
        toast.error("Please Login");
      }
      return (
        <>
          <button onClick={this.show} className="ui button" id="delete-btn">
            <Link to="#" id="links">
             Delete
            </Link>
          </button>
          <Confirm
            open={this.state.open}
            size="mini"
            header="Confirm Delete!"
            content="Are you sure?"
            onCancel={this.handleCancel}
            onConfirm={this.deleteAction}
          />
        </>
      );
    }
  };

  deleteAction = () => {
    this.handleConfirm();
    const { article } = this.props.article;
    const slug = article.slug;
    this.props.deleteArticle(slug);
    setTimeout(() => {
      window.location.href = "/your-articles";
    }, 1500);
  };

  render() {
    return <div>{this.ownerDelete()}</div>;
  }
}

RemoveArticle.defaultProps = {
  article: PropTypes.object,
  deleteArticle: PropTypes.func
};

export const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(deleteArticle, dispatch)
  };
};

export const mapStateToProps = state => {
  return {
    article: state.fetchOneArticle
  };
};

export default connect(
  mapStateToProps,
  { mapDispatchToProps, deleteArticle }
)(RemoveArticle);
