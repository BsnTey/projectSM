import { combineReducers } from "redux";
import accountSlice from "./accountSlice";
import cookieSlice from "./cookieSlice";

const rootReducer = combineReducers({
  accounts: accountSlice,
  cookies: cookieSlice,
});

export default rootReducer;
