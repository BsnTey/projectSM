import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    loggedIn: false,
  },
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setLoggedIn(state, action) {
      state.loggedIn = action.payload;
    },
  },
});

export const { setEmail, setLoggedIn } = userSlice.actions;

export default userSlice.reducer;
