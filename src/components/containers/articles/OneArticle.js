import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Loader from "react-loaders";
import Parser from "html-react-parser";
import moment from "moment";
import getOneArticle from "../../../actions/getOneArticleAction";

export class GetOneArticle extends Component {
  constructor() {
    super();
    this.state = {
      article: {},
      isLoading: true
    };
  }
  componentWillMount() {
    this.props.getOneArticle(this.props.props.match.params.slug);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        article: nextProps.fetchOneArticle.article,
        isLoading: nextProps.fetchOneArticle.isLoading
      });
    }
  }

  render() {
    if (Object.keys(this.props.fetchOneArticle).length === 0) {
      return <div>Article not found</div>;
    } else {
      const { article } = this.props.fetchOneArticle;
      return (
        <div>
          {this.state.isLoading ? (
            <h1>Loading</h1>
          ) : (
            <div>
              <div className="single-article">
                <div className="intro-header">
                  <div className="intro-title">
                    <div className="title">
                      <h1 className="header">{article.title}</h1>
                    </div>
                  </div>
                  <div className="intro-profile">
                    <div className="avatar">
                      <img
                        src="https://res.cloudinary.com/dxecwuaqd/image/upload/c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1550079584/o75xgubltk4hso90l9jt.png"
                        alt=""
                        style={{ borderRadius: 50 + "%", height: "65px" }}
                      />

                      <h4 className="user-username">
                        {article.author.username}
                      </h4>
                      {!localStorage.getItem("token") ||
                      localStorage.getItem("token") === undefined ? (
                        <div />
                      ) : localStorage.getItem("username") ===
                        article.author.username ? (
                        <div />
                      ) : (
                        <button
                          className="ui basic large button"
                          id="user-follow-btn"
                        >
                          Follow
                        </button>
                      )}
                      <br />
                      <div className="date-time">
                        {moment(article.created_at).format("MMM Do")}
                      </div>
                    </div>
                  </div>
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
                  <div className="body">{Parser(article.body)}</div>
                  <ul className="mini-tags">
                    {article.tags.length === 0 ? (
                      <div>No tags</div>
                    ) : (
                      article.tags.map(tag => (
                        <li className="mini-tag">{tag}</li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
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
  errors: state.message
});

export default connect(
  mapStateToProps,
  { getOneArticle }
)(GetOneArticle);
