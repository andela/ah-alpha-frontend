import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import socialAuthFunction from "./socialAuth/SocialAuthReducer";

const rootReducer = combineReducers({
  data: loginReducer,
  socialAuth: socialAuthFunction

});

export default rootReducer;
