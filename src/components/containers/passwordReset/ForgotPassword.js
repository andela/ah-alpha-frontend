import { connect } from "react-redux";
import { Form, Message } from "semantic-ui-react";
import React, { Component } from "react";
import forgotPassword from "../../../actions/forgotPassword";

class ResetForm extends Component {
   state = { email: "" };

  handleChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

    handleSubmit = (e) => {
      e.preventDefault();
      const emailData = this.state.email;
      const website = window.location.origin.toString();
      const data = { emailData, website };
      this.props.forgotPassword(data);
    }

    render() {
      const message = this.props.message;
      return (
        <div>
          <Form className="reset-form" success>
            <Message
              success
              content={!message ? null : (message === "Request successful,a link has been sent to your email")
                ? (<p style={{ color: "green" }}>{message}</p>)
                : <p style={{ color: "red" }}>{message}</p>}
            />
            <Form.Field>
              <label htmlFor="resetEmail">Email to  reset password</label>
              <input type="text" placeholder="yourexample@email.com" value={this.state.email} name="email" onChange={this.handleChange} required />
            </Form.Field>
            <button type="button" className="submitbtn" onClick={this.handleSubmit}>Submit</button>
          </Form>
        </div>
      );
    }
}

const mapDispatchToProps = dispatch => ({
  forgotPassword: data => dispatch(forgotPassword(data))
});
const mapStateToProps = state => ({ message: state.forgotPassword.message });
export default connect(mapStateToProps, mapDispatchToProps)(ResetForm);
