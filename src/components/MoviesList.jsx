import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ movies, title }) => {
  //   let { pat } = movies[0];
  if (!movies) return;
  console.log(movies[0]);
  return (
    <div className="mb-4 px-4">
      <h1 className="text-white mb-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
