import React from "react";
import { Modal } from "semantic-ui-react";
import SocialAuthComponent from "../containers/socialAuth/SocialAuthComponent";
import LoginForm from "../../actions/LoginForm";

const Login = () => (
  <Modal
    trigger={<div className="item">Log in</div>}
    centered
    id="the-modal"
    style={{ display: "none" }}
    size="mini"
    dimmer
    closeIcon
  >
    <div className="modals">
      <Modal.Header>
        <h1>Login</h1>
      </Modal.Header>
      <br />
      <div>
        <LoginForm />
      </div>
      <SocialAuthComponent />
    </div>
  </Modal>

);

export default Login;
