import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Loader from "react-loaders";
import { Card, Rating, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

import getArticles from "../../../actions/getArticlesAction";
import { database } from "firebase";

export class GetArticles extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      articles: []
    };
    this.carouselImages = this.carouselImages.bind(this);
  }
  componentDidMount() {
    this.props.getArticles();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        isLoading: nextProps.state.fetchArticles.isLoading,
        articles: nextProps.state.fetchArticles.articles
      });
    }
  }

  carouselImages(dataset) {
    dataset.map(data => (
      <div>
        <img src={data.image_path} />
        <p className="legend">{data.title}</p>
      </div>
    ));
  }

  render() {
    return (
      <div>
        {!this.state.isLoading ? (
          <div>
            {this.state.articles.length === 0 ? (
              <p>No articles yet</p>
            ) : (
              <div>
                <Carousel autoPlay infiniteLoop interval={1000}>
                  {this.state.articles.map(article => (
                    <div>
                      <img src={article.image_path} />
                      <h1 className="legend" id="carousel-title">
                        <Link
                          to={{
                            pathname: `/${article.slug}`,
                            article: { ...article }
                          }}
                          id="linking"
                        >
                          {article.title}
                        </Link>
                      </h1>
                    </div>
                  ))}
                </Carousel>
                <div className="article-content">
                  <div className="ui four column grid">
                    {this.state.articles.map(article => (
                      <div className="single-card">
                        <div className="column fluid" key={article.slug}>
                          <Card size="massive">
                            <Image src={article.image_path} />
                            <Card.Content>
                              <Card.Header>
                                <Link
                                  to={{
                                    pathname: `/${article.slug}`,
                                    article: { ...article }
                                  }}
                                >
                                  {article.title}
                                </Link>
                              </Card.Header>
                              <Card.Meta>
                                <span className="small date">
                                  {article.created_at}
                                </span>
                              </Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                              <div>
                                {article.like_count} likes{" "}
                                {article.dislike_count} dislikes
                              </div>
                              <br />
                              <div>
                                <Rating
                                  maxRating={5}
                                  defaultRating={article.rating}
                                  disabled
                                  icon="star"
                                  size="large"
                                />
                              </div>
                            </Card.Content>
                            <Card.Content extra>
                              <ul className="tags">
                                {article.tags.length === 0 ? (
                                  <li>No tags</li>
                                ) : (
                                  article.tags.map(tag => (
                                    <li key={tag} className="tag">
                                      {tag}
                                    </li>
                                  ))
                                )}
                              </ul>
                            </Card.Content>
                          </Card>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Loader type="pacman" />
        )}
      </div>
    );
  }
}

GetArticles.propTypes = {
  getArticles: PropTypes.func.isRequired,
  errors: PropTypes.object,
  articles: PropTypes.array,
  isLoading: PropTypes.bool
};

GetArticles.defaultProps = {
  errors: {},
  articles: [],
  isLoading: true
};

const mapStateToProps = state => ({
  state,
  isLoading: state.isLoading,
  articles: state.articles,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getArticles }
)(GetArticles);
