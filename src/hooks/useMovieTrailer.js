import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const trailerVideos = useSelector((store) => store.movieReducer.trailerVideo);
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    let res = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US'",
      API_OPTIONS
    );
    let json = await res.json();

    const filteredData = json.results.filter(
      (result) => result.type == "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideos && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
