import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/">Home</NavLink>
  </div>
);

export default Navbar;
