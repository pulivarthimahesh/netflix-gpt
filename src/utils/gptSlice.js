import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    searchedMovieNames: null,
    tmdbResults: null,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    setSearchedMovieNames: (state, action) => {
      state.searchedMovieNames = action.payload;
    },
    setTMDBResults: (state, action) => {
      state.tmdbResults = action.payload;
    },
  },
});

export const { toggleGPTSearch, setSearchedMovieNames, setTMDBResults } =
  gptSlice.actions;

export default gptSlice.reducer;
