import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const onTrackSlice = createSlice({
  name: "onTrackSlice",
  initialState,
  reducers: {
    setOnTrack: (state, action) => {
      state.push(action.payload);
    },
    deleteTrack: (state, action) => {
      state.filter((item) => item.id !== action.payload);
    },
  },
});

export default onTrackSlice.reducer;
