import React from "react";
import { Link } from "react-router-dom";
import videos from "../assets/videos";

function HomeBanner() {
  const user = videos.sort((a, b) => b.viewcount - a.viewcount)[0].user;

  return (
    <div className="flex flex-col-reverse xs:flex-row-reverse space-x-5 justify-evenly items-center w-full py-8 m-auto text-white bg-[url('/src/assets/images/background.png')] bg-center bg-fixed bg-cover">
      <h1 className="flex flex-row xs:flex-col items-center gap-1.5 xs:gap-2 text-lg xs:text-4xl font-medium xs:font-extrabold text-center uppercase tracking-wide">
        <span>Creator</span>
        <span className="align-middle text-xl xs:text-2xl xs:font-bold">
          of the
        </span>
        <span>Month</span>
      </h1>
      <div className=" h-28 border-collapse border-2 border-white hidden xs:block "></div>
      <Link
        to={`/${user.name.toLowerCase()}`}
        className="flex flex-col space-y-3 xl:flex-row xl:space-x-7 xl:space-y-0  items-center justify-center"
      >
        <img
          className="w-28 h-28 rounded-full"
          src={user.image}
          alt="User Icon"
        />
        <h2 className="text-3xl md:text-4xl font-bold">{user.name}</h2>
      </Link>
    </div>
  );
}

export default HomeBanner;
