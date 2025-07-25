import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return;
  return (
    <div className="w-48 mt-1 mr-4">
      <img alt="Movie card" src={IMG_CDN_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
