import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { verifyUser } from "../../actions/authentication";

class VerifyEmail extends Component {
  componentDidMount() {
    // eslint-disable-next-line
    const token = this.props.match.params.verifyToken;
    // eslint-disable-next-line
    this.props.verifyUser(token);
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => ({
  verifyUser: token => dispatch(verifyUser(token))
});

const mapStateToProps = state => ({ state });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyEmail);
