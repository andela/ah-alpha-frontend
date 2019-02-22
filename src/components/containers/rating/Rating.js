import React, { Component } from "react";
import { connect } from "react-redux";
import { Rating } from "semantic-ui-react";
import { rateArticle } from "../../../actions/rating/rating";

class ArticleRating extends Component {
  state = {
    maxRating: 5,
    myRating: 0
  };

  handleRate = (e, { rating }) => {
    const data = { rating, slug: this.props.slug };
    this.setState({ myRating: rating });
    this.props.rateArticle(data);
  };

  render() {
    return (
      <Rating
        defaultRating={this.state.myRating}
        disabled={this.props.disabled || false}
        maxRating={this.state.maxRating}
        onRate={this.handleRate}
        size={this.props.size}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  rateArticle: data => dispatch(rateArticle(data))
});

const mapStateToProps = state => ({ state: state.ratingReducer });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleRating);
