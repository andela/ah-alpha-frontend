/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/destructuring-assignment */
import Parser from "html-react-parser";
import moment from "moment";
import { PropTypes } from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import FollowButton from "../Follow/followButton";
import getOneArticle from "../../../actions/getOneArticleAction";
import ArticleRating from "../rating/Rating";
import CommentsContainer from "../commentsContainer";
import ArticleLiking from "../likes/ArticleLiking";
import SocialShare from "../sharing";

export class GetOneArticle extends Component {
  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      article: {},
      isLoading: true
    };
  }

  componentWillMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getOneArticle(this.props.props.match.params.slug);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        article: nextProps.fetchOneArticle.article,
        isLoading: nextProps.fetchOneArticle.isLoading
      });
    }
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (Object.keys(this.props.fetchOneArticle).length === 0) {
      return <div> Article not found </div>;
    }
    // eslint-disable-next-line react/destructuring-assignment
    const { article } = this.props.fetchOneArticle;
    const loggedOut = !localStorage.getItem("token") || localStorage.getItem("token") === undefined;
    return (
      <div>
        {this.state.isLoading ? (
          <h1> Loading </h1>
        ) : (
          <div>
            <div className="single-article">
              <div className="intro-header">
                <div className="intro-title" />
                <div className="intro-profile">
                  <div className="avatar">
                    <div className="profile">
                      <img
                        src="https://res.cloudinary.com/dxecwuaqd/image/upload/c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1550079584/o75xgubltk4hso90l9jt.png"
                        alt=""
                        style={{
                          borderRadius: `${50}%`,
                          height: "65px"
                        }}
                      />
                      <div className="name-follow">
                        <h4 className="user-username"> {article.author.username}</h4>
                        {loggedOut ? (
                          <div />
                        ) : localStorage.getItem("username") === article.author.username ? (
                          <Link to={`/${this.props.props.match.params.slug}/edit`} id="the-btn">
                            <button className="ui black medium button follow-button edit-button">
                              Edit
                            </button>
                          </Link>
                        ) : (
                          <FollowButton
                            following={this.props.following}
                            author={article.author.username}
                          />
                        )}
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
                <div className="title">
                  <h1 className="header"> {article.title}</h1>
                </div>
                <div className="star-rating">
                  <br />
                  <Icon name="star" size="large" className="star-icon" />
                  {article.rating ? parseFloat(article.rating).toFixed(1) : <span />}
                  <br />
                  <br />
                  <Icon name="clock" size="large" id="clock" />
                  <span id="read">
                    {article.read_time.substr(3, 1)}
                    min
                  </span>
                  <span className="read-time"> {moment(article.created_at).format("MMM Do")}</span>
                  <br />
                  <br />
                </div>
                <SocialShare slug={article.slug} title={article.title} author={article.author.username} />
              </div>
              <div className="intro-image">
                {!article.image_path ? (
                  <div />
                ) : (
                  <img
                    src={article.image_path}
                    alt=""
                    style={{
                      paddingLeft: "200px",
                      width: "850px",
                      height: "450px"
                    }}
                  />
                )}
              </div>
              <br />
              <div className="intro-content">
                <br />
                <div className="body"> {Parser(article.body)}</div>
                <ul className="mini-tags">
                  {
                    article.tags.map(tag => <li className="mini-tag"> {tag}</li>)
                  }
                </ul> <br />
                <br />
                <div className="rate-like">
                  <span>
                    {loggedOut ? (
                      <div />
                    ) : localStorage.getItem("username") === article.author.username ? (
                      <div className="no-rating" />
                    ) : (
                      <span className="rating-bar">
                        <ArticleRating
                          slug={article.slug}
                          size="massive"
                          rating={article.my_rating}
                        />
                      </span>
                    )}
                  </span>
                  <span className="like-dislike-buttons">
                    {!loggedOut ? (
                      <ArticleLiking
                        slug={article.slug}
                        status={article.like_status}
                        dislike_count={article.dislike_count}
                        like_count={article.like_count}
                      />
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <br />
                <CommentsContainer slug={this.props.props.match.params.slug} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

GetOneArticle.propTypes = {
  getOneArticle: PropTypes.func.isRequired,
  errors: PropTypes.object,
  articles: PropTypes.array,
  isLoading: PropTypes.bool
};

GetOneArticle.defaultProps = {
  errors: {},
  article: [],
  isLoading: true
};

const mapStateToProps = state => ({
  fetchOneArticle: state.fetchOneArticle,
  isLoading: state.isLoading,
  article: state.article,
  errors: state.message,
  following: state.profiles.profile.following,
  image_path: state.profiles.profile.image
});

const mapDispatchToProps = dispatch => ({
  getOneArticle: data => dispatch(getOneArticle(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetOneArticle);
