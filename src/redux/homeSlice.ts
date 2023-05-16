import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  genres: {},
}

export const slice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getApiConfiguration: (state, { payload }) => {
      return { ...state, url: payload };
    },
    getGenres: (state, { payload }) => {
      return { ...state, genres: payload };
    },
  },
});

export const { getApiConfiguration, getGenres } = slice.actions;

export const selectHome = (state: any) => state.home;

export default slice.reducer;
