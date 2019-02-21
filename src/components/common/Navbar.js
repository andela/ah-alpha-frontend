/* eslint-disable indent */
import React from "react";
import { NavLink } from "react-router-dom";
import RegistrationModal from "../containers/registration/Registration";
import Login from "../authentication/Login";
import DropDown from "./userOptions";

// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ui inverted huge borderless fixed fluid menu">
          <div className="header item link-button" id="logo">
            <NavLink to="/">Authors Haven</NavLink>
          </div>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <i className="search icon" />
                <input type="text" placeholder="Search..." />
              </div>
            </div>
            {!localStorage.getItem("token") ||
            localStorage.getItem("token") === undefined ? (
              <React.Fragment>
                <button type="button" className="item link-button" id="login">
                  <Login />
                </button>
                <button type="button" className="item link-button" id="signup">
                  <RegistrationModal />
                </button>
              </React.Fragment>
            ) : (
              <DropDown />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
