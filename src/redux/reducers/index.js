import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  data: loginReducer
});

export default rootReducer;
