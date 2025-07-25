import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movieReducer.nowPlayingMovies
  );
  const dispatch = useDispatch();
  const getMoviesNowPlaying = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch(addNowPlayingMovies(res.results));
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    !nowPlayingMovies && getMoviesNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
