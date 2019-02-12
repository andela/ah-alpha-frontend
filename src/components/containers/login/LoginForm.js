import React, { Component } from "react";
import PropTypes from "prop-types";
import Loader from "react-loader";

import { connect } from "react-redux";
import { loginUser } from "../../../actions/loginActions";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      loaded: true
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.isLoggedIn) {
      this.props.history.push("/articles");
    }
    console.log(nextProps);
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
      this.setState({ loaded: true });
    }
    if (!nextProps.errors) {
      console.log(this.props);
      this.props.history.push("/");
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    };

    this.props.loginUser(userData);
    this.setState({ loaded: false });
  };

  render() {
    const errors = this.props.errors.errors
      ? !this.props.errors.errors.email
        ? this.props.errors.errors.error[0]
        : this.props.errors.errors.email[0]
      : null;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="loader">
          <Loader loaded={this.state.loaded} />
        </div>
        {!errors ? null : (
          <div className="ui error message">
            <div className="header">{errors}</div>
          </div>
        )}
        {!this.props.message ? null : (
          <div className="ui success message">
            <div className="header">{this.props.message}</div>
          </div>
        )}
        <div className="ui large fluid long input" id="input-holder">
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            placeholder="Enter your email"
            id="input"
            required
          />
        </div>
        <br />
        <br />
        <div className="ui large fluid input" id="input-holder">
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Enter your password"
            id="input"
            required
          />
        </div>
        <br />
        <br />
        <button
          className="ui large basic black button"
          id="button"
          type="submit"
        >
          <i className="sign in icon" />
          Log In
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  message: PropTypes.string
};

const mapStateToProps = state => {
  //   console.log(state);
  return {
    login: state.login,
    errors: state.data.errors,
    isLoggedIn: state.data.isLoggedIn,
    message: state.data.message
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm);
