import React, { Component } from "react";
import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon
} from "react-share";

class ShareIcons extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const template = "Highlights from Author's Haven";
    const { shareURL, title, author } = this.props;
    const shareTitle = `Take a look at this:  ${title}`;
    const articleAuthor = `${author.charAt(0).toUpperCase() + author.substr(1).toLowerCase()}`;
    const emailBody = `Hello\nTake a look at this article by ${articleAuthor} \n ${shareURL}`;

    return (
      <div id="social-sharing">
        <TwitterShareButton
          url={shareURL}
          title={shareTitle}
          className="share-icons"
        >
          <TwitterIcon className="socialIcon" size={40} round />
        </TwitterShareButton>

        <FacebookShareButton
          url={shareURL}
          quote={shareTitle}
          className="share-icons"
        >
          <FacebookIcon className="socialIcon" size={40} round />
        </FacebookShareButton>

        <EmailShareButton
          body={emailBody}
          subject={template}
          className="share-icons"
        >
          <EmailIcon className="socialIcon email " size={40} round />
        </EmailShareButton>
      </div>
    );
  }
}

export default ShareIcons;
