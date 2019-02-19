import React from "react";
import { Redirect } from "react-router";
import RegistrationModal from "../containers/registration/Registration";
import Login from "../authentication/Login";
import { logout } from "../../_helpers/history";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ui inverted huge borderless fixed fluid menu">
          <div className="header item link-button">Authors Haven</div>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <i className="search icon" />
                <input type="text" placeholder="Search..." />
              </div>
            </div>
            {<Redirect to="/" />}
            {!localStorage.getItem("token")
            || localStorage.getItem("token") === undefined ? (
              <React.Fragment>
                <button type="button" className="item link-button" id="login">
                  <Login />
                </button>
                <button type="button" className="item link-button" id="signup">
                  <RegistrationModal />
                </button>
              </React.Fragment>
              ) : (
                <button
                  type="button"
                  className="item link-button"
                  id="logout"
                  onClick={logout}
                >
                Log Out
                </button>
              )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
