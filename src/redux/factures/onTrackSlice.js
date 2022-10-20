import { createSlice } from "@reduxjs/toolkit";

const refTarck = localStorage.getItem("onTrack");

const initialState = refTarck ? JSON.parse(refTarck) : [];

export const onTrackSlice = createSlice({
  name: "onTrackSlice",
  initialState,
  reducers: {
    onTrackCoin: (state, action) => {
      state.push(action.payload);
      //connet to local storage
      localStorage.setItem("onTrack", JSON.stringify(state));
    },
    deleteTrackCoin: (state, action) => {
      const coinFind = state.find((coin) => coin.uuid === action.payload);
      if (coinFind) {
        state.splice(state.indexOf(coinFind), 1);
        localStorage.setItem("onTrack", JSON.stringify(state));
      }
    },
  },
});

export const { onTrackCoin, deleteTrackCoin } = onTrackSlice.actions;

export default onTrackSlice.reducer;
