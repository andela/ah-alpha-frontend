import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Class component
import Home from "./components/Home";
import store from "./redux/store";
import SuccessComponent from "./components/authentication/socialAuth/SuccessComponent";
import "./assets/css/App.scss";

// Functional component
import Navbar from "./common/Navbar";

const App = () => (
  <Provider store={store}>
    <SuccessComponent />
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
);

export default App;
