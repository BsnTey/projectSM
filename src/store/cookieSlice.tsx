import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import cookieMock from "./mocks/cookie";

export const cookieSlice = createSlice({
  name: "cookie",
  initialState: {
    cookies: cookieMock,
  },
  reducers: {},
});

export const {} = cookieSlice.actions;

export const selectCookie = (state: RootState) => state.cookies.cookies.cookie;

export default cookieSlice.reducer;
