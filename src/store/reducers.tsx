import { combineReducers } from "redux";
import accountSlice from "./accountSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  accounts: accountSlice,
  users: userSlice,
});

export default rootReducer;
