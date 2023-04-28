import { createSlice } from "@reduxjs/toolkit";
import userMock from "./mocks/user";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: userMock,
  },
  reducers: {
    addUser(state, action) {
      const user = {
        id: action.payload.id,
        name: action.payload.name,
        token: action.payload.token,
        email: action.payload.email,
      };

      state.currentUser = user;
    },
    delUser(state) {
      state.currentUser = null;
    },
  },
});

export const { addUser, delUser } = userSlice.actions;

export default userSlice.reducer;
