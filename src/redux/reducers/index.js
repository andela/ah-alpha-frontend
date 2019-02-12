/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";

import profiles from "./profile/profileReducer";

const rootReducer = combineReducers({
  data: loginReducer,
  profiles
});

export default rootReducer;
