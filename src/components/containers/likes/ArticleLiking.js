/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { Icon, Label, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import likeArticle from "../../../actions/likes/likes";

class ArticleLiking extends Component {
  state = {
    like_count: null,
    dislike_count: null,
    status: ""
  };

  componentDidMount() {
    this.setState({
      like_count: this.props.like_count,
      dislike_count: this.props.dislike_count,
      status: this.props.status
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.likesData !== this.props.likesData) {
      this.setState({ ...nextProps.likesData });
    }
  }

  handleLike = () => {
    const data = {
      slug: this.props.slug,
      action: "like"
    };
    this.props.likeArticle(data);
  };

  handleDislike = () => {
    const data = {
      slug: this.props.slug,
      action: "dislike"
    };
    this.props.likeArticle(data);
  };

  render() {
    let likeColor = "";
    let dislikeColor = "";
    switch (this.state.status) {
      case "Liked":
        likeColor = "blue";
        dislikeColor = "";
        break;
      case "Disliked":
        dislikeColor = "blue";
        likeColor = "";
        break;
      default:
        dislikeColor = "";
        likeColor = "";
    }

    return (
      <div>
        <Button as="div" labelPosition="right" className="like-buttton" onClick={this.handleLike}>
          <Button color={likeColor}>
            <Icon name="thumbs up" />
            Like
          </Button>
          <Label as="a" basic color={likeColor} pointing="left">
            {this.state.like_count ? this.state.like_count : ""}
          </Label>
        </Button>
        <Button
          as="div"
          labelPosition="right"
          className="dislike-button"
          onClick={this.handleDislike}
        >
          <Button color={dislikeColor}>
            <Icon name="thumbs down" />
            Dislike
          </Button>
          <Label as="a" basic color={dislikeColor} pointing="left">
            {this.state.dislike_count ? this.state.dislike_count : ""}
          </Label>
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  likeArticle: data => dispatch(likeArticle(data))
});

const mapStateToProps = state => ({
  article: state.fetchOneArticle.article,
  likesData: state.likesReducer.data
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleLiking);
