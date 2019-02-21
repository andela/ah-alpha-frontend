import { Form, Message } from "semantic-ui-react";
import React, { Component } from "react";
import { connect } from "react-redux";
import resetPassword from "../../../actions/resetPasswd";

class ResetPassword extends Component {
    state = { password: "", confirmPassword: "", success: null };

    handleChange = (e) => {
      this.setState({ [e.target.id]: e.target.value });
    }

    validatePassword=() => {
      const password = this.state.password;
      const valid = password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
      return valid;
    }

    handleSubmit =(e) => {
      e.preventDefault();
      if (this.state.password === null) {
        this.setState({ success: "Password cannot be empty" });
        return;
      }
      if (!this.validatePassword()) {
        this.setState({ success: "Password should be atleast 8 charactors with a capital letter, a small letter, a number and a special character" });
        return;
      }
      if (this.state.password === this.state.confirmPassword) {
        const token = this.props.match.params.resetpwdtoken;
        const passwordData = this.state.password;
        const data = { token, password: passwordData };
        this.props.resetPassword(data);
      } else {
        this.setState({ success: "Passwords didn't match" });
      }
    }

    render() {
      const { message } = this.props.passwordReset;

      return (
        <div>

          <Form className="reset-form" success>
            <Message
              success
              content={!message && !this.state.success ? null : (message === "Your password was successfully changed")
                ? (<p style={{ color: "green" }}>{message}</p>)
                : <p style={{ color: "red" }}>{this.state.success}</p>}
            />
            <Form.Field>
              <label htmlFor="setPasswd">New Password</label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
                value={this.state.password}
                placeholder="Enter New Password"
                name="password"
                required
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="pwdConfirmation">Password confirmation</label>
              <input
                type="password"
                id="confirmPassword"
                onChange={this.handleChange}
                value={this.state.confirmPassword}
                placeholder="Enter Confirm Password"
                name="confirmpassword"
                required
              />
            </Form.Field>
            <button type="button" className="submitbtn" onClick={this.handleSubmit}>Submit</button>
          </Form>
          <h2>{this.token}</h2>
        </div>

      );
    }
}
const mapDispatchToProps = dispatch => ({
  resetPassword: data => dispatch(resetPassword(data))
});
const mapStateToProps = state => ({ passwordReset: state.passwordReset });
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
