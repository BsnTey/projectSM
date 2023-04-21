import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  token: string;
  email: string;
  loggedIn: boolean;
}

const initialState: User = {
  id: 0,
  token: "",
  email: "",
  loggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
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
