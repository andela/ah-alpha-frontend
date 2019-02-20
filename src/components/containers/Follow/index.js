import React, { Component } from "react";
import { Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as followActions from "../../../actions/follow/followActions";
import { setUsername } from "../../../redux/reducers/loginReducer";
import FollowButton from "./followButton";
import "../../../assets/css/follow.scss";

class Follow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.followersCount(setUsername());
    actions.followingCount(setUsername());
  }

  render() {
    const { isUser, followingCount, followersCount } = this.props;
    return (
      <div className="followComponent">
        { isUser ? <FollowButton /> : null}
        <Link to="/following">
          <Label> { followingCount } Following </Label>
        </Link>
        { " " }
        <Link to="/followers">
          <Label> { followersCount } Followers </Label>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  followingCount: state.count.following_count,
  followersCount: state.count.followers_count,
  isUser: state.count.isUser
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(followActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Follow);
