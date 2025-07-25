import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ movies, title }) => {
  if (!movies) return;
  return (
    <div className="mb-4 px-4">
      <h1 className="text-white mb-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))
          ) : (
            <h1 className="text-white">No Movies found!!!</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
