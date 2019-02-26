import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Card, Image, Pagination, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import moment from "moment";

import getArticles from "../../../actions/getArticlesAction";

export class GetArticles extends Component {
  constructor() {
    super();
    this.state = {
      page_size: 9,
      activePage: 1,
      isLoading: true,
      articles: [],
      defaultActivePage: 1
    };
  }
  componentDidMount() {
    this.props.getArticles(1, this.state.page_size);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activePage !== this.state.activePage) {
      this.props.getArticles(this.state.activePage, this.state.page_size);
    }
  }

  handlePaginationChange = (event, { activePage }) => {
    event.preventDefault();
    this.setState({
      activePage
    });
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
    const pageNumbers = Math.ceil(this.state.count / this.state.page_size);
    return (
      <div >
        {!this.state.isLoading ? (
          <div>
            {this.state.articles.length === 0 ? (
              <p>No articles yet</p>
            ) : (
              <div>
                <Carousel autoPlay infiniteLoop interval={1000} id="slider">
                  {this.state.articles.map(article => (
                    <div>
                      <img
                        src={article.image_path}
                        style={{ height: "auto" }}
                        alt=""
                      />
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
                          <Card size="massive" id="cd-size">
                            <Image id="cardsize" src={article.image_path} />
                            <Card.Content id="cd-content">
                              <Card.Header>
                                <Link
                                  to={{
                                    pathname: `/${article.slug}`,
                                    article: { ...article }
                                  }}
                                >
                                  {article.title}
                                </Link><br /><br />
                              </Card.Header>
                              <Card.Meta>
                                <span className="small date">
                                  by {article.author.username},{" "}
                                  {moment(
                                    article.created_at,
                                    "YYYYMMDD"
                                  ).fromNow()}
                                </span>
                                <br /><br />
                                <Icon name="clock" size="large" />
                                <span className="read">
                                  {article.read_time.substr(3, 1)}
                                  min read
                                </span>
                                <div className="pull-right">
                                  {parseFloat(article.rating).toFixed(1)}
                                  <i className="yellow star icon" />
                                </div>
                              </Card.Meta>
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
          <div className="ui segment">
            <div className="ui active inverted dimmer">
              <div className="ui large text loader">Loading</div>
            </div>
            <p />
            <p />
            <p />
          </div>
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
