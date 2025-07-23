import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video px-12 pt-[20%] z-10 text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-sm w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black py-3 px-8 text-md rounded-lg hover:cursor-pointer hover:opacity-60">
          <span>▶️</span> Play
        </button>
        <button className="mx-4 bg-gray-700 text-white py-3 px-8 text-md rounded-lg">
          <span>i</span> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
