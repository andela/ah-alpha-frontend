/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import {
  Button, Header, Modal, Form, Icon
} from "semantic-ui-react";

class RegistrationForm extends Component {
  // eslint-disable-next-line
  formInput = field => {
    const {
      type, onKeyDown, placeholder, value, error, name
    } = field;

    return (
      <Form.Input
        key={placeholder}
        tabIndex={-1}
        className="large fluid"
        required
        name={name}
        onChange={this.props.handleChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        value={value}
        error={error}
        type={type}
      />
    );
  };

  render() {
    const { user, errors } = this.props.state;
    const {
      validateUserName,
      validateEmail,
      validatePassword,
      verifyPassword,
      handleSubmit,
      registering,
      regErrored
    } = this.props;
    return (
      <Modal trigger={<span>Register</span>} size="mini" id="regModal" closeIcon>
        <div>
          <Header content="Sign Up" id="reg-header" />
          <Modal.Description id="reg-input">
            <Form
              loading={!!registering}
              onSubmit={handleSubmit}
              className="ui large fluid"
              error
              success
            >
              <Form.Field>
                <this.formInput
                  name="username"
                  onKeyDown={() => {
                    setTimeout(validateUserName, 2);
                  }}
                  placeholder="Username"
                  value={user.username}
                  error={!!errors.usernameError}
                />
                <div className="error">{user.username && errors.usernameError}</div>
              </Form.Field>
              <Form.Field>
                <this.formInput
                  name="email"
                  type="email"
                  onKeyDown={() => {
                    setTimeout(validateEmail, 2);
                  }}
                  placeholder="Email"
                  value={user.email}
                  error={!!errors.emailError}
                />
                <div className="error">{user.email && errors.emailError}</div>
              </Form.Field>
              <Form.Field>
                <this.formInput
                  name="password"
                  type="password"
                  onKeyDown={() => {
                    setTimeout(validatePassword, 2);
                  }}
                  placeholder="Password"
                  value={user.password}
                  error={!!errors.passwordError}
                />
                <div className="error">{user.password && errors.passwordError}</div>
              </Form.Field>
              <Form.Field>
                <this.formInput
                  name="confirmPassword"
                  type="password"
                  onKeyDown={() => {
                    setTimeout(verifyPassword, 2);
                  }}
                  placeholder="Confirm Password"
                  value={user.confirmPassword}
                  error={!!errors.verifyPasswordError}
                />
                <div className="error">{user.confirmPassword && errors.verifyPasswordError}</div>
                <div className="error">{this.props.showErrors(regErrored)}</div>
              </Form.Field>
            </Form>
          </Modal.Description>
          <Modal.Actions>
            <Button className="ui basic black" id="regBtn" type="submit" onClick={handleSubmit}>
              <Icon className="sign in icon" />
              Sign Up
            </Button>
          </Modal.Actions>
        </div>
      </Modal>
    );
  }
}

export default RegistrationForm;
