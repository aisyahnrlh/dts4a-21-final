import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  user: "Aisyah",
  counter: 100,
};

const sliceRTK = createSlice({
  name: "slice",
  initialState: initialValues,
  reducers: {
    ubahNama(state, action) {
      state.user = action.payload;
    },
  },
});

// ACTIONS
export const { ubahNama } = sliceRTK.actions;

// SELECTORS
export const selectUser = (state) => state.sliceRTK.user;
export const selectCounter = (state) => state.sliceRTK.counter;

// REDUCERS
export default sliceRTK.reducer;
