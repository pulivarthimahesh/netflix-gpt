import React from "react";
import { useSelector } from "react-redux";
import { DEFAULT_BACKGROUND, lang } from "../utils/constants";

const GPTContainer = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div>
      <div className="absolute -z-10">
        <img src={DEFAULT_BACKGROUND} alt="background" />
      </div>
      <div className="pt-2 text-white flex justify-center">
        <div className="bg-black w-[40%] p-4 rounded-md">
          <input
            className="w-[70%] bg-white text-black p-2 rounded-md"
            type="text"
            placeholder={lang[langKey].searchPlaceholder}
          />
          <button className="bg-red-700 w-[28%] p-2 ml-2 rounded-md">
            {lang[langKey].search}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GPTContainer;
