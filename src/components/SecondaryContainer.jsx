import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movieReducer?.nowPlayingMovies);
  console.log(movies);
  return (
    <div className="bg-black px-4">
      <div className="relative -mt-50 z-20">
        <MoviesList movies={movies} title="Now Playing" />
        <MoviesList movies={movies} title="Trending" />
        <MoviesList movies={movies} title="Horror" />
        <MoviesList movies={movies} title="Comedy" />
        <MoviesList movies={movies} title="Romantic" />
      </div>
    </div>
  );
};

export default SecondaryContainer;
