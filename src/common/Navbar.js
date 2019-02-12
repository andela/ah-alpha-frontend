/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

import { logout } from "../_helpers/history";
import Login from "../components/authentication/Login";

const Navbar = () => (
  <div>
    <NavLink to="/">Home</NavLink>
    <div className="ui inverted huge borderless fixed fluid menu">
      <div className="header item">Authors Haven</div>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <i className="search icon" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        {!localStorage.getItem("token") ||
        localStorage.getItem("token") === undefined ? (
          <div className="item">
            <Login />
          </div>
        ) : (
          <div className="item" id="logout">
            <a href="#" onClick={logout}>
              Log out
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Navbar;
