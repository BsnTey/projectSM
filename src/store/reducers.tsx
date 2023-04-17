import { combineReducers } from "redux";
import accountSlice from "./accountSlice";

const rootReducer = combineReducers({
  accounts: accountSlice,
});

export default rootReducer;
