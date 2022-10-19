import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const onTrackSlice = createSlice({
  name: "onTrackSlice",
  initialState,
  reducers: {
    onTrackCoin: (state, action) => {
      state.push(action.payload);
    },
    deleteTrackCoin: (state, action) => {
      const coinFind = state.find((coin) => coin.uuid === action.payload);
      if (coinFind) {
        state.splice(state.indexOf(coinFind), 1);
      }
    },
  },
});

export const { onTrackCoin, deleteTrackCoin } = onTrackSlice.actions;

export default onTrackSlice.reducer;
