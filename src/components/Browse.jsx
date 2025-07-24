import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTContainer from "./GPTContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  return (
    <div>
      <Header />
      {showGPT ? (
        <GPTContainer />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
