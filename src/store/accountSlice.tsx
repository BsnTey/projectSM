import { createSlice } from "@reduxjs/toolkit";
import accountsMock from "./mocks/accounts";
export const counterSlice = createSlice({
  name: "accounts",
  initialState: {
    accounts: accountsMock,
  },
  reducers: {
    //     deleteAccount: (state, payload) => {
    //       state.accounts.filter((account) => payload?.id !== account?.id);
    //     },
  },
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
