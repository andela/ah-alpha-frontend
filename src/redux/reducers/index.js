import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import { registration, verification } from "./registration";

const rootReducer = combineReducers({
  registration,
  verification,
  data: loginReducer
});

export default rootReducer;
