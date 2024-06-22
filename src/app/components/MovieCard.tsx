"use client";

import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "/public/logo_film.png";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path?: string;
}

interface MovieProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/movie/${movie.id}`);
  };

  return (
    <Card onClick={handleCardClick} style={{ cursor: "pointer" }}>
      {movie?.poster_path ? (
        <CardMedia
          component="img"
          alt={movie.title}
          height="300"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      ) : (
        <Box
          height="300"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="black"
        >
          <Image src={logo} alt={movie.title} width={100} height={100} />
        </Box>
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.overview}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
