"use client";

import { useEffect, useState } from "react";
import { Typography, Container, Box, Rating, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Image from "next/image";
import logo from "/public/logo_film.png";
import MovieCard from "../../components/MovieCard";
import { fetchRecommendations } from "@/src/services/movieService";
import { resetSearch } from "@/src/redux/movieSlice";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path?: string;
  release_date: string;
  genres: { id: number; name: string }[];
  vote_average: number;
}

interface MovieDetailProps {
  movie: Movie;
}

const MovieDetail = ({ movie }: MovieDetailProps) => {
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const cardImage = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : logo.src;

  useEffect(() => {
    const genreIds = movie.genres.map((genre) => genre.id).join(",");
    const fetchAndSetRecommendations = async () => {
      const recs = await fetchRecommendations(genreIds);
      setRecommendations(recs);
    };

    fetchAndSetRecommendations();
  }, [movie.genres]);

  const handleLogoClick = () => {
    dispatch(resetSearch());
    router.push("/");
  };

  return (
    <Container>
      <Box
        py={4}
        display="flex"
        justifyContent="center"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      >
        <Image src={logo} alt="FilmFinder Logo" width={150} height={150} />
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={10}
        px={2}
      >
        <Box flexShrink={0}>
          <Image
            src={cardImage}
            alt={movie.title}
            width={350}
            height={500}
            onError={(e) => {
              e.currentTarget.src = logo.src;
            }}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box textAlign={{ xs: "center", md: "left" }}>
          <Typography color="#000" variant="h3" mb={2}>
            {movie.title}
          </Typography>
          <Typography color="#000" variant="h5" mb={2}>
            Release Date: {movie.release_date}
          </Typography>
          <Typography
            color="#000"
            variant="h6"
            display="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
            alignItems="center"
            gutterBottom
            mb={2}
          >
            Rating:
            <Rating name="read-only" value={movie.vote_average / 2} readOnly />
          </Typography>
          <Typography color="#000" variant="h6" gutterBottom mb={2}>
            Genres: {movie.genres.map((genre: any) => genre.name).join(", ")}
          </Typography>
          <Typography color="#000" variant="body1">
            {movie.overview}
          </Typography>
        </Box>
      </Box>
      <Box mt={5}>
        <Typography color="#000" variant="h4" mb={5}>
          Recommendations
        </Typography>
        <Grid container spacing={2}>
          {recommendations.map((recMovie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={recMovie.id}>
              <MovieCard movie={recMovie} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default MovieDetail;
