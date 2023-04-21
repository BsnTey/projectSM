import { createSlice } from "@reduxjs/toolkit";
import usersMock from "./mocks/users";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    initialUser: usersMock,
  },
  reducers: {
    addUser(state, action) {
      const user = {
        id: action.payload.id,
        name: action.payload.name,
        token: action.payload.token,
        email: action.payload.email,
      };

      state.initialUser = [...state.initialUser, user];
    },
    deluser(state, action) {
      state.initialUser = [...state.initialUser].filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
