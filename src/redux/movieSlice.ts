import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
  movies: any[];
  searchQuery: string;
}

const initialState: MovieState = {
  movies: [],
  searchQuery: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<any[]>) {
      state.movies = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    resetSearch(state) {
      state.movies = [];
      state.searchQuery = "";
    },
  },
});

export const { setMovies, setSearchQuery, resetSearch } = movieSlice.actions;
export default movieSlice.reducer;
