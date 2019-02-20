import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as followActions from "../../../actions/follow/followActions";

class FollowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  dispatchFollow = (e) => {
    e.preventDefault();
    const currentUser = localStorage.getItem("username");
    const { actions, author } = this.props;
    actions.followHandler(author, currentUser);
  };

  render() {
    const { following } = this.props;
    return (
      <Button
        color="black"
        size="medium"
        className="follow-button"
        onClick={this.dispatchFollow}
      >
        { following ? "Unfollow" : "Follow"}
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  following_count: JSON.stringify(state.count.following_count),
  followers_count: JSON.stringify(state.count.followers_count)
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(followActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);
