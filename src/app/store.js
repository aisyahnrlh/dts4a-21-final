import { configureStore } from "@reduxjs/toolkit";
// import { initialValues, rootReducer } from "../reducers/rootReducer";
import slice from "../features/counter/slice";

// export const store = configureStore({
//   reducer: rootReducer,
//   preloadedState: initialValues,
// });

export const store = configureStore({
  reducer: {
    sliceRTK: slice
  }
})
