import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import VerifyEmail from "./components/authentication/EmailVerification";
import "react-toastify/dist/ReactToastify.css";

// Class component
import store from "./redux/store";
import "./App.scss";

// Functional component
import Navbar from "./components/common/Navbar";
import Body from "./components/common/Body";

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/verify/:verifyToken" component={VerifyEmail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
