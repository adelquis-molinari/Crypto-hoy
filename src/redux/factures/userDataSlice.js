import { createSlice } from "@reduxjs/toolkit";

const userDataStorage = localStorage.getItem("userData");
const initialState = userDataStorage ? JSON.parse(userDataStorage) : [];
export const userDataSlice = createSlice({
  name: "userDataSlice",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      console.log("setUserData: ", action.payload);
      // state.push(action.payload);
      // localStorage.setItem("userData", JSON.stringify(state));
    },
    updateUserData: (state, action) => {
      state.push(action.payload);
      localStorage.removeItem("userData");
      localStorage.setItem("userData", JSON.stringify(state));
    },
    getUserData: (state) => {
      const userDataStorage = localStorage.getItem("userData");
      state = JSON.parse(userDataStorage);
    },
    deleteUserData: (state) => {
      localStorage.removeItem("userData");
      state = [];
    },
    loginUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {
  setUserData,
  updateUserData,
  getUserData,
  deleteUserData,
  loginUser,
} = userDataSlice.actions;

export default userDataSlice.reducer;

const email = "adelkis@gmail.com";
// devolver asta encontrar el '@' desde posicio 0
