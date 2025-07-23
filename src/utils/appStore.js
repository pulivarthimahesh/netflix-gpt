import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movieReducer: movieReducer,
  },
});

export default appStore;
