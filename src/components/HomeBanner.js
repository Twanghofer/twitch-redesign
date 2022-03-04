import React from "react";
import videos from "../assets/videos";

function HomeBanner() {
  const user = videos[0].user;

  return (
    <div className="w-full py-8 text-white bg-brand bg-top bg-cover ">
      <div className="flex flex-row-reverse justify-evenly items-center w-full m-auto">
        <h1 className="flex flex-col xl:flex-row items-center space-x-3 space-y-3 text-5xl sm:text-6xl font-bold text-center uppercase tracking-wide">
          <span>Creator</span>
          <span className="align-middle text-3xl">of the </span>
          <span>Month</span>
        </h1>
        <a className="flex flex-col space-y-3 xl:flex-row xl:space-x-7 xl:space-y-0  items-center justify-center">
          <img
            className="w-28 h-28 rounded-full"
            src={user.image}
            alt="User Icon"
          />
          <h2 className="text-3xl sm:text-5xl font-bold">{user.name}</h2>
        </a>
      </div>
    </div>
  );
}

export default HomeBanner;
