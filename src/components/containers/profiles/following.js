import React, { Component } from "react";
import { Card, Image, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as followActions from "../../../actions/follow/followActions";
import FollowButton from "../Follow/followButton";
import Follow from "../Follow";

class followingProfile extends Component {
  componentDidMount() {
    const user = localStorage.getItem("username");
    const { actions } = this.props;
    actions.followersCount(user);
    actions.followingCount(user);
  }

  render() {
    const { followings } = this.props;
    const followingCards = followings.map(following => (
      <Card key={following.username}>

        <Card.Content>
          <Image floated="right" size="tiny" src={following.image} />
          <Card.Header>{following.username}</Card.Header>
          <Card.Description>{following.bio}</Card.Description>
        </Card.Content>

        <Card.Content extra>
          <FollowButton following={following.following} author={following.username} />
        </Card.Content>
      </Card>
    ));
    return (
      <div id="followersCards">
        <h3 className="username">{ localStorage.getItem("username")} is Following </h3>
        <Follow />
        <Divider inverted />
        <br />
        <Card.Group>{followingCards}</Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  followings: state.count.following
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(followActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(followingProfile);
