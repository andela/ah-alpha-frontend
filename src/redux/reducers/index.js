import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import { registration, verification } from "./registration";
import socialAuthFunction from "./socialAuth/SocialAuthReducer";

const rootReducer = combineReducers({
  registration,
  verification,
  socialAuth: socialAuthFunction,
  data: loginReducer
});

export default rootReducer;
