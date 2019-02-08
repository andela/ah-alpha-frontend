import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Class component
import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css";

// Functional component
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
