import React from "react";
import { Modal } from "semantic-ui-react";

import LoginForm from "../containers/login/LoginForm";

const Login = () => (
  <Modal
    trigger={<div>Log in</div>}
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
    </div>
  </Modal>
);

export default Login;
