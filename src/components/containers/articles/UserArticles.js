/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Image, Grid, Divider, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

import { getAuthorsArticles } from "../../../actions/articles/editArticleActions";

export class UserArticles extends Component {
  componentDidMount() {
    const { getAuthorsArticles } = this.props;
    getAuthorsArticles();
  }

  render() {
    const loggedOut =
      !localStorage.getItem("token") ||
      localStorage.getItem("token") === undefined;
    const { isFetching, articles } = this.props;

    let articleCards;
    const currentUser = localStorage.getItem("username");
    if (isFetching) {
      const results = articles.filter(
        article => article.author.username === currentUser
      );
      articleCards = results.map(article => (
        <Grid.Column className="articleCard" key={article.slug}>
          <Card>
            <Image className="imageCard" src={article.image_path} />
            <Card.Content>
              <Card.Meta>
                <span className="date">
                  {" "}
                  {moment(article.created_at, "YYYYMMDD").fromNow()}
                </span>
              </Card.Meta>
              <Card.Description className="titleCard">
                <Link
                  to={{
                    pathname: `/${article.slug}`,
                    article: { ...article }
                  }}
                >
                  {article.title}
                </Link>
                {loggedOut ? (
                  <div />
                ) : localStorage.getItem("username") ===
                  article.author.username ? (
                  <div className="right floated">
                    {/* <ul className="user-actions">
                      <li className="user-action">
                        <Link to={{ pathname:`/${article.slug}/edit`}} id="the-btn">
                          <i className="ui blue edit icon" />
                        </Link>
                      </li>
                      <li className="user-action">
                        <RemoveArticle />
                      </li>
                    </ul> */}
                    {/* <Dropdown item simple trigger={trigger} options={options(`/${article.slug}/edit`, <RemoveArticle/>)} icon="caret down" /> */}
                  </div>
                ) : (
                  <div />
                )}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      ));
    }

    return (
      <div className="userArticlesCards">
        <h1>Your Articles</h1>
        <Divider inverted />
        <br />
        <Grid className="articleCards">
          <Grid.Row container columns={4}>
            {articleCards}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  articles: state.userArticles.userArticles,
  isFetching: state.userArticles.isFetching
});

export const mapDispatchToProps = dispatch => ({
  getAuthorsArticles: () => dispatch(getAuthorsArticles())
});

export default connect(
  mapStateToProps,
  { getAuthorsArticles }
)(UserArticles);
