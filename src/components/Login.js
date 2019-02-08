import React from "react";

const Login = () => (
  <form action="#">
    <h1>Log In</h1>
    <input type="email" required placeholder="Enter your email" />
    <br />
    <input type="password" required placeholder="Enter your password" />
    <br />
    <button type="submit">Log in</button>
  </form>
);

export default Login;
