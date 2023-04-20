import { useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import accountsMock from "./mocks/accounts";
import titlesMock from "./mocks/titles";

export const counterSlice = createSlice({
  name: "accounts",
  initialState: {
    accauntList: accountsMock,
    titlesList: titlesMock,
  },
  reducers: {},
});

export const {} = counterSlice.actions;
export const useAccounts = () => useSelector((state: RootState) => state.accounts?.accauntList);
export const selectTitles = (state: RootState) => state.accounts.titlesList;
export default counterSlice.reducer;
