import { createSlice } from "@reduxjs/toolkit";
import MoviesFake from "../../disneyPlusMoviesData.json";

const initialState = {
  movies: MoviesFake.movies,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.trending = action.payload.movies;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectTrending = (state) => state.movie.movies;

export default movieSlice.reducer;
