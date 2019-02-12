import React, { Component } from "react";
import { Card, Image, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as followActions from "../../../actions/follow/followActions";
import FollowButton from "../Follow/followButton";
import Follow from "../Follow";
import "../../../assets/css/follow.scss";

class followersProfile extends Component {
  componentDidMount() {
    const user = localStorage.getItem("username");
    const { actions } = this.props;
    actions.followersCount(user);
    actions.followingCount(user);
  }

  render() {
    const { followers } = this.props;
    const followersCards = followers.map(follower => (
      <Card key={follower.username}>
        <Card.Content>
          <Image floated="right" size="tiny" src={follower.image} />
          <Card.Header>{follower.username}</Card.Header>
          <Card.Description>{follower.bio}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <FollowButton
            following={follower.following}
            author={follower.username}
          />
        </Card.Content>
      </Card>
    ));
    return (
      <div id="followersCards">
        <h3 className="username"> {localStorage.getItem("username")} followers</h3>
        <Follow />
        <Divider inverted />
        <br />
        <Card.Group>{followersCards}</Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  followers: state.count.followers
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(followActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(followersProfile);
