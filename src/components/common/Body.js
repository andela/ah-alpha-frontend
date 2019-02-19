import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader";

class Body extends Component {
  render() {
    // eslint-disable-next-line
    return <div>{this.props.verifying ? <Loader /> : ""}</div>;
  }
}

const mapStateToProps = state => ({ verifying: state.verification.verifying });

export default connect(mapStateToProps)(Body);
