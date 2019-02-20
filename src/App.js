/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "semantic-ui-css/semantic.min.css";
import "./assets/css/index.scss";

// Class component
import Home from "./components/Home";
import VerifyEmail from "./components/authentication/EmailVerification";
import Profile from "./components/containers/profiles/profiles";
import EditProfile from "./components/containers/profiles/profileEdit";
import followersProfile from "./components/containers/profiles/followers";
import followingProfile from "./components/containers/profiles/following";
import store from "./redux/store";
import SuccessComponent from "./components/authentication/socialAuth/SuccessComponent";
import ResetForm from "./components/containers/passwordReset/ForgotPassword";
import ResetPassword from "./components/containers/passwordReset/ResetPassword";
import "./assets/css/App.scss";
import "./assets/css/reset.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Functional component
import OneArticle from "./components/SingleArticle";
import Navbar from "./components/common/Navbar";

const App = () => (
  <Provider store={store}>
    <SuccessComponent />
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <ToastContainer autoClose={3000} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/verify/:verifyToken" component={VerifyEmail} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/profile-edit" component={EditProfile} />
            <Route path="/followers" component={followersProfile} />
            <Route path="/following" component={followingProfile} />
            <Route path="/forgotpwd" component={ResetForm} />
            <Route path="/reset-password/:resetpwdtoken" component={ResetPassword} />
            <Route path="/:slug" exact component={OneArticle} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
);

export default App;
