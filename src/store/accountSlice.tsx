import { createSlice } from "@reduxjs/toolkit";
import { Account } from "./mocks/accounts";
import { RootState } from "./store";
import { createSelector } from "@reduxjs/toolkit";
import accountsMock from "./mocks/accounts";
import { TypeBtn } from "../utils/enum";

interface AccountsState {
  accountList: Account[];
  accountSelected: string[];
  displayedList: Account[];
  sortType: string;
}

export const accountSlice = createSlice({
  name: "accounts",
  initialState: {
    accountList: accountsMock,
    accountSelected: [],
    displayedList: accountsMock,
    sortType: "default",
  } as AccountsState,
  reducers: {
    sortAccountList: (state, action) => {
      state.sortType = action.payload;
      state.displayedList.sort((a, b) => (state.sortType === TypeBtn.desk ? a.amount - b.amount : b.amount - a.amount));
    },
    selectAccount: (state, action) => {
      const token = action.payload;
      state.accountSelected.push(token);
    },
    delSelectAccount: (state, action) => {
      const token = action.payload;
      state.accountSelected = state.accountSelected.filter((selectToken) => selectToken !== token);
    },
    delAllSelectAccount: (state) => {
      state.accountSelected = [];
    },
    deleteSelected: (state) => {
      state.accountList = state.accountList.filter((account) => !state.accountSelected.includes(account.token));
      state.accountSelected = [];
      state.displayedList = state.accountList;
    },
    searchDisplayedAcc: (state, action) => {
      const searchText = action.payload;
      state.displayedList = state.accountList.filter((account) => account.token.toLowerCase().includes(searchText.toLowerCase()));
    },
  },
});

export const { sortAccountList, selectAccount, delSelectAccount, delAllSelectAccount, deleteSelected, searchDisplayedAcc } = accountSlice.actions;

export const dispayedAccounts = (state: RootState) => state.accounts.displayedList;

export const selectSortType = (state: RootState) => state.accounts.sortType;

export const titleSelector = (state: RootState) => {
  const accountList = state.accounts.accountList[0] ? Object.keys(state.accounts?.accountList[0]) : [];
  return accountList;
};

export const accountSelected = (state: RootState) => {
  const accountSelected = state.accounts.accountSelected;
  return accountSelected;
};

const accountSelectedSelector = (state: RootState) => state.accounts.accountSelected;

export const isTokenSelected = createSelector([accountSelectedSelector, (_: RootState, token: string) => token], (accountSelected, token) => accountSelected.includes(token));

export default accountSlice.reducer;
