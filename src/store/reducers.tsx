import { combineReducers } from "redux";
import accountSlice from "./accountSlice";
import userSlice from "./userSlice";
import cookieSlice from "./cookieSlice";

const rootReducer = combineReducers({
  accounts: accountSlice,
  users: userSlice,
  cookies: cookieSlice,
});

export default rootReducer;
