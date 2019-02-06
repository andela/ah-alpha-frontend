import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Class component
import Home from "./components/Home";
import Login from "./components/Login";
import store from "./redux/store";
import "./App.css";

// Functional component
import Navbar from "./components/Navbar";

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
