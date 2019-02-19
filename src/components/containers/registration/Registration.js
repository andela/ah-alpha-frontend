import React, { Component } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { registerUser } from "../../../actions/authentication";
import { toastOptions } from "../../../actions/constants";
import "react-toastify/dist/ReactToastify.css";
import RegistrationForm from "../../authentication/RegistrationForm";

class RegistrationModal extends Component {
  state = {
    user: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    errors: {
      usernameError: "",
      emailError: "",
      passwordError: "",
      verifyPasswordError: ""
    },
    submitted: false,
    shown: false
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [name]: value
      },
      submitted: false
    });
  };

  validateUserName = () => {
    const { user, errors } = this.state;
    let nameError = "";
    if (!/[A-Za-z]|[0-9]/.test(user.username)) {
      nameError = "A username can only contain numbers and letters";
    }
    if (user.username.length < 3) {
      nameError = "Username must be have at least 3 characters";
    }
    this.setState({
      ...this.state,
      errors: {
        ...errors,
        usernameError: nameError || ""
      }
    });
  };

  validateEmail = () => {
    const { user, errors } = this.state;
    const emailRegex = /^[\w.+-]+@[\w.]+\.[a-z]{2,3}$/;
    const error = "Please input a valid email";
    this.setState({
      ...this.state,
      errors: {
        ...errors,
        emailError: emailRegex.test(user.email) ? "" : error
      }
    });
  };

  validatePassword = () => {
    const { user, errors } = this.state;
    const error = "Password must have at least 8 characters";
    let password_errors = "";
    if (user.password.length < 8) {
      password_errors = error;
    }
    if (!/[A-Za-z]/.test(user.password)) {
      password_errors = "A password should contain at least one letter";
    }
    if (!/[A-Z]/.test(user.password)) {
      password_errors = "A password should contain at least one uppercase letter";
    }
    if (!/[0-9]/.test(user.password)) {
      password_errors = "A password should contain at least one digit";
    }
    this.setState({
      ...this.state,
      errors: {
        ...errors,
        passwordError: password_errors || ""
      }
    });
  };

  verifyPassword = () => {
    const { user, errors } = this.state;
    const mesg = "Passwords must match!";
    this.setState({
      ...this.state,
      errors: {
        ...errors,
        verifyPasswordError: user.password !== user.confirmPassword ? mesg : ""
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { user, submitted } = this.state;
    const { dispatch } = this.props;
    if (!submitted && user.username && user.email && user.password) {
      dispatch(registerUser(user));
    }
    this.setState({ submitted: true });
  };

  showErrors = (errors) => {
    if (!errors) {
      return;
    }
    return errors.map(err => <li>{err}</li>);
  };

  render() {
    if (this.props.registered) {
      toast.success("Check your email to verify your account", {
        ...toastOptions,
        toastId: "234"
      });
      return <Redirect to="/" />;
    }
    return (
      <RegistrationForm
        state={this.state}
        registering={this.props.registering}
        regErrored={this.props.regErrored}
        handleChange={this.handleChange}
        validateUserName={this.validateUserName}
        validateEmail={this.validateEmail}
        validatePassword={this.validatePassword}
        verifyPassword={this.verifyPassword}
        handleSubmit={this.handleSubmit}
        showErrors={this.showErrors}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { registering, registered, regErrored } = state.registration;
  return {
    registering,
    registered,
    regErrored
  };
};

export default connect(mapStateToProps)(RegistrationModal);
