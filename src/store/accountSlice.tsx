import { createSlice } from "@reduxjs/toolkit";
import selectedArray from "./mocks/selectedAccount";
import { RootState } from "./store";
import accountsMock from "./mocks/accounts";
import { TypeBtn } from "../utils/enum";

export const accountSlice = createSlice({
  name: "accounts",
  initialState: {
    accountList: accountsMock,
    accountSelected: selectedArray,
    sortType: "default",
  },
  reducers: {
    sortAccountList: (state, action) => {
      state.sortType = action.payload;
      state.accountList.sort((a, b) => (state.sortType === TypeBtn.desk ? a.amount - b.amount : b.amount - a.amount));
    },
    selectedList: (state, action) => {
      const isChecked = action.payload.checked;
      const token = action.payload.token;
      const accountSelected = state.accountSelected;

      isChecked ? accountSelected.push(token) : (state.accountSelected = accountSelected.filter((account) => account !== token));
    },
    deleteSelected: (state) => {
      state.accountList = state.accountList.filter((account) => !state.accountSelected.includes(account.token));
    },
  },
});

export const { sortAccountList, selectedList, deleteSelected } = accountSlice.actions;

export const selectAccounts = (state: RootState) => state.accounts.accountList;

export const selectSortType = (state: RootState) => state.accounts.sortType;

export const titleSelector = (state: RootState) => {
  const accountList = Object.keys(state.accounts?.accountList[0]);
  return accountList;
};

export const accountSelected = (state: RootState) => {
  const accountSelected = state.accounts.accountSelected;
  return accountSelected;
};

export default accountSlice.reducer;
