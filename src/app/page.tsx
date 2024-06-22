"use client";

import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setMovies, setSearchQuery } from "../redux/movieSlice";
import MovieCard from "./components/MovieCard";
import { searchMovies } from "../services/movieService";
import Image from "next/image";
import logo from "/public/logo_film.png";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, searchQuery } = useSelector(
    (state: RootState) => state.movies
  );

  const handleSearch = async () => {
    const results = await searchMovies(searchQuery);
    dispatch(setMovies(results));
  };

  return (
    <Container>
      <Box py={4}>
        <Image src={logo} alt="FilmFinder_Logo" width={150} height={150} />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Search for movies"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
