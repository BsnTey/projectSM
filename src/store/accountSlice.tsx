import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import accountsMock from "./mocks/accounts";

export const accountSlice = createSlice({
  name: "accounts",
  initialState: {
    accountList: accountsMock,
    sortType: "default",
  },
  reducers: {
    sortAccountList: (state, action) => {
      state.sortType = action.payload;
      state.accountList = [...state.accountList].sort((a, b) => {
        if (state.sortType === "desc") {
          return a.amount - b.amount;
        } else {
          return b.amount - a.amount;
        }
      });
    },
  },
});

export const { sortAccountList } = accountSlice.actions;

export const selectAccounts = (state: RootState) => state.accounts.accountList;

export const selectSortType = (state: RootState) => state.accounts.sortType;

export default accountSlice.reducer;
