import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Loader from "react-loaders";
import { Card, Rating, Image, Pagination, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import alphaLoader from "../../common/loader"

import getArticles from "../../../actions/getArticlesAction";


export class GetArticles extends Component {
  constructor() {
    super();
    this.state = {
      page_size: 9,
      activePage: 1,
      isLoading: true,
      articles: [],
      defaultActivePage: 1,
    };
  }
  componentDidMount() {
    this.props.getArticles(1, this.state.page_size);
  }
  
  componentDidUpdate(prevProps, prevState){
    if (prevState.activePage !== this.state.activePage){
      this.props.getArticles(this.state.activePage, this.state.page_size);
    }
    
  }

  handlePaginationChange = (event, {activePage}) => {
    event.preventDefault();
    this.setState({
      activePage
    })

    // this.props.getArticles(activePage, this.state.page_size);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        isLoading: nextProps.state.fetchArticles.isLoading,
        articles: nextProps.state.fetchArticles.articles,
        count: nextProps.state.fetchArticles.count
      });
    }
  }

  render() {
    const pageNumbers = Math.ceil(
      this.state.count / this.state.page_size
);
    return (
      <div className="article-content">
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
          <alphaLoader />
        )}
        {this.state.count > this.state.page_size && (
          <div className="footer" id="pagination">
            <Pagination
              onPageChange={this.handlePaginationChange}
              defaultActivePage={this.state.defaultActivePage}
              ellipsisItem={{
                content: <Icon name="ellipsis horizontal" />,
                icon: true
              }}
              firstItem={{
                content: <Icon name="angle double left" />,
                icon: true
              }}
              lastItem={{
                content: <Icon name="angle double right" />,
                icon: true
              }}
              prevItem={{ content: <Icon name="angle left" />, icon: true }}
              nextItem={{ content: <Icon name="angle right" />, icon: true }}
              totalPages={pageNumbers}
            />
          </div>
        )}
      </div>
    );
  }
}

GetArticles.propTypes = {
  getArticles: PropTypes.func.isRequired,
  errors: PropTypes.object,
  articles: PropTypes.array,
  isLoading: PropTypes.bool,
  count: PropTypes.number
};

GetArticles.defaultProps = {
  errors: {},
  articles: [],
  isLoading: true,
  count: 0
};

const mapStateToProps = state => ({
  state,
  isLoading: state.isLoading,
  articles: state.articles,
  errors: state.errors,
  count: state.count
});

export default connect(
  mapStateToProps,
  { getArticles }
)(GetArticles);
