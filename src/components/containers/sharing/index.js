/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import ShareIcons from "./ShareIcons";

class SocialShare extends Component {
  render() {
    const { title, slug, author } = this.props;
    const shareURL = `https://ah-alpha-frontend-staging.herokuapp.com/${slug}`;
    return <ShareIcons shareURL={shareURL} title={title} author={author} />;
  }
}

export default SocialShare;
