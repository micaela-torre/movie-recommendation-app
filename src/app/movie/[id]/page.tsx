import { fetchMovieDetails } from "@/src/services/movieService";
import MovieDetail from "./MovieDetail";

import { Typography } from "@mui/material";

interface MovieProps {
  params: { id: string };
}

const Page = async ({ params }: MovieProps) => {
  const { id } = params;
  const movie = await fetchMovieDetails(id);

  if (!movie) {
    return (
      <Typography variant="h6" color="textSecondary">
        Movie not found
      </Typography>
    );
  }

  return <MovieDetail movie={movie} />;
};

export default Page;
