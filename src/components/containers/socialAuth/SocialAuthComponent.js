import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import "react-semantic-toasts/styles/react-semantic-alert.css";
import { Loader } from "semantic-ui-react";
import propTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { toast } from "react-semantic-toasts";
import * as authActions from "../../../actions/socialAuth/SocialAuthActions";

import {
  auth,
  GoogleProvider,
  FacebookProvider,
  TwitterProvider
} from "../../../config/firebase";
import {
  FACEBOOK,
  GOOGLE,
  TWITTER
} from "../../../actions/types";
import "../../../assets/css/SocialAuth.scss";
import ButtonInput from "../../authentication/socialAuth/ButtonInput";

class SocialAuthComponent extends React.Component {
  state = {
    providers: [
      {
        provider: FacebookProvider,
        type: FACEBOOK,
        name: "facebook",
        button_class: "facebook",
        class_name: "facebook"
      },
      {
        provider: GoogleProvider,
        type: GOOGLE,
        name: "google-oauth2",
        button_class: "google plus",
        class_name: "google"
      },
      {
        provider: TwitterProvider,
        type: TWITTER,
        name: "twitter",
        button_class: "twitter",
        class_name: "twitter"
      }
    ]
  };

  constructor(props) {
    super(props);
    this.onsubmitHandler = this.onsubmitHandler.bind(this);
    this.getSocialData = this.getSocialData.bind(this);
    this.dataFetcher = this.dataFetcher.bind(this);
  }

  onsubmitHandler(access) {
    let tokenData = null;
    if (access.provider === "twitter") {
      tokenData = {
        provider: access.provider,
        access_token: access.accessToken,
        access_token_secret: access.accessSecret
      };
    } else {
      tokenData = {
        provider: access.provider,
        access_token: access.accessToken
      };
    }
    this.dataFetcher(tokenData);
  }

  getSocialData(oauthprovider, platform, authType) {
    const dataFetch = this.props;
    dataFetch.fetchUsers();
    auth
      .signInWithPopup(oauthprovider)
      .then(result => ({
        type: authType,
        payload: {
          authData: {
            provider: platform,
            accessToken: result.credential.accessToken,
            accessSecret: result.credential.secret
          },
          userDetails: {
            name: result.user.displayName,
            photo: result.user.photoURL,
            email: result.user.email
          }
        }
      }))
      .then((response) => {
        this.switch(response, dataFetch);
        this.onsubmitHandler(response.payload.authData);
      });
  }

    switch = (response, dataFetch) => {
      switch (response.type) {
        case FACEBOOK:
          dataFetch.FacebookAuth(response);
          break;
        case GOOGLE:
          dataFetch.GoogleAuth(response);
          break;
        case TWITTER:
          dataFetch.TwitterAuth(response);
          break;
        default:
          break;
      }
    };

    dataFetcher(tokenData) {
      const dataFetch = this.props;
      const url = "http://127.0.0.1:8000/api/v1/social_auth/";
      dataFetch.fetchUsers();
      axios
        .post(url, tokenData, {
          headers: {
            Accept: "application/json"
          },
          crossDomain: true
        })
        .then((response) => {
          dataFetch.receivedUsers(response.data);
        })
        .catch((err) => {
          dataFetch.getError(err);
        });
    }

    renderButton = providers => (
      <div className="ui fluid buttons">
        {providers.map(providerName => (
          <ButtonInput
            key={providerName.name}
            Provider={providerName.provider}
            providerName={providerName.name}
            type={providerName.type}
            className={providerName.class_name}
            buttonClass={providerName.button_class}
            getSocialData={() => {
              this.getSocialData(
                providerName.provider,
                providerName.name,
                providerName.type
              );
            }}
          />
        ))}
      </div>
    );

    render() {
      const msg = this.props.socialAuth.message;
      const { providers } = this.state;
      return (
        <div>
          { msg === "success" ? toast({
            type: "success",
            icon: "check",
            description: " LogIn Successful!",
            time: 3000
          })
            : null}
          {msg === "success" ? <Redirect to="/" /> : null}
          {msg === "fetching" ? (
            <div className="loader">
              <Loader inline="centered" active />
            </div>
          ) : null}
          <div className="socialauth">{this.renderButton(providers)}</div>
        </div>
      );
    }
}

export function mapStateToProps(state, myProps) {
  if (state.socialAuth) {
    return {
      socialAuth: state.socialAuth,
      data: state.data,
      myProps
    };
  }
  return {};
}
export function mapDispatchToProps(dispatch) {
  return {
    FacebookAuth: data => dispatch(authActions.FacebookAuth(data)),
    GoogleAuth: data => dispatch(authActions.GoogleAuth(data)),
    TwitterAuth: data => dispatch(authActions.TwitterAuth(data)),
    fetchUsers: data => dispatch(authActions.fetchUsers(data)),
    getError: data => dispatch(authActions.getError(data)),
    receivedUsers: data => dispatch(authActions.receivedUsers(data))
  };
}

SocialAuthComponent.defaultProps = {
  msg: ""
};

SocialAuthComponent.propTypes = {
  msg: propTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialAuthComponent);
