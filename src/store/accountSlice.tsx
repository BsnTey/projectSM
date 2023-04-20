import { useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import accountsMock from "./mocks/accounts";

export const counterSlice = createSlice({
  name: "accounts",
  initialState: {
    accauntList: accountsMock,
  },
  reducers: {},
});

export const {} = counterSlice.actions;
export const useAccounts = () => useSelector((state: RootState) => state.accounts?.accauntList);
export const titleSelector = (state: RootState) => {
  let accauntList = Object.keys(state.accounts?.accauntList[0]);
  accauntList.push("Получить Cookie", "Обновить все");
  return accauntList;
};

export default counterSlice.reducer;
