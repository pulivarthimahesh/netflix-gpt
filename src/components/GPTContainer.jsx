import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, DEFAULT_BACKGROUND, lang } from "../utils/constants";
import { setSearchedMovieNames, setTMDBResults } from "../utils/gptSlice";
import MoviesList from "./MoviesList";

const GPTContainer = () => {
  const langKey = useSelector((store) => store.config.lang);
  const inputRef = useRef("Jaat, Dangal, Bahubali, Animal, Pushpa");
  const dispatch = useDispatch();

  const searchedMovies = useSelector((store) => store.gpt.searchedMovieNames);
  const tmdbMovies = useSelector((store) => store.gpt.tmdbResults);

  const searchMovie = (movieName) => {
    const options = API_OPTIONS;

    return fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.error(err));
  };

  const handleSearch = async () => {
    let searchedText = inputRef.current.value.trim();
    console.log(inputRef.current.value);

    // Commented code below is to Get GPT results from openai API
    // const gptQuery =
    //   "Act as a movie recommendation system and suggest some movies for the query: " +
    //   inputRef.current.value +
    //   ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Athadu, Pokiri, Khaleja, Murari, Nijam";
    // const gptResults = await client.chat.completions.create({
    //   model: "gpt-4o",
    //   //   model: "gpt-3.5-turbo",
    //   messages: [{ role: "user", content: gptQuery }],
    // });
    // console.log(gptResults.choices);

    let enteredMovies = searchedText.split(",");
    console.log(enteredMovies);
    dispatch(setSearchedMovieNames(enteredMovies));

    const getAllMoviesData = enteredMovies.map((movie) => searchMovie(movie));

    const tmdbResults = await Promise.all(getAllMoviesData);
    console.log(tmdbResults);
    dispatch(setTMDBResults(tmdbResults));
  };

  return (
    <div>
      <div className="absolute -z-10">
        <img src={DEFAULT_BACKGROUND} alt="background" />
      </div>
      <div className="pt-[5%] text-white flex justify-center">
        <div className="bg-black w-[40%] p-4 rounded-md">
          <input
            ref={inputRef}
            className="w-[80%] bg-white text-black p-2 rounded-md outline-none placeholder:text-xs"
            type="text"
            placeholder={lang[langKey].searchPlaceholder}
          />
          <button
            className="bg-red-700 w-[18%] p-2 ml-2 rounded-md"
            onClick={handleSearch}
          >
            {lang[langKey].search}
          </button>
        </div>
      </div>
      {searchedMovies && tmdbMovies && (
        <div className="bg-black m-8 text-white p-3">
          <>
            {searchedMovies.map((movie, index) => (
              <MoviesList
                key={movie}
                title={movie}
                movies={tmdbMovies[index]?.results}
              ></MoviesList>
            ))}
          </>
        </div>
      )}
    </div>
  );
};

export default GPTContainer;
