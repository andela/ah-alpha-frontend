/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import { registration, verification } from "./registration";
import socialAuthFunction from "./socialAuth/SocialAuthReducer";
import profiles from "./profile/profileReducer";
import followReducer from "./follow/followReducer";
import { passwordReset } from "./passwordReset/passwordReset";
import { forgotPassword } from "./passwordReset/forgotPassword";
import getArticlesReducer from "./getArticlesReducer";
import getOneArticleReducer from "./getOneArticleReducer";

const rootReducer = combineReducers({
  registration,
  verification,
  socialAuth: socialAuthFunction,
  data: loginReducer,
  profiles,
  count: followReducer,
  passwordReset,
  forgotPassword,
  fetchArticles: getArticlesReducer,
  fetchOneArticle: getOneArticleReducer
});

export default rootReducer;
