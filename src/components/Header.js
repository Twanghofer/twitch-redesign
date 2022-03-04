import React from "react";
import TwitchLogo from "../assets/images/twitch.png";
import SearchBar from "./SearchBar";
import videos from "../assets/videos";

function Header() {
  const user = videos[0].user;
  return (
    <header className="w-full flex flex-row items-center px-4 py-2 border-b">
      <div className="flex flex-row items-center space-x-6 flex-grow flex-shrink w-full text-xl font-bold">
        <svg
          width="40px"
          height="40px"
          version="1.1"
          viewBox="0 0 40 40"
          x="0px"
          y="0px"
        >
          <g>
            <polygon
              className=" fill-brand"
              points="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"
            ></polygon>
            <polygon
              className=" fill-white"
              points="26 25 30 21 30 10 14 10 14 25 18 25 18 29 22 25"
            ></polygon>
            <g>
              <path
                className=" fill-brand"
                d="M20,14 L22,14 L22,20 L20,20 L20,14 Z M27,14 L27,20 L25,20 L25,14 L27,14 Z"
              ></path>
            </g>
          </g>
        </svg>
        <a href="#">Following</a>
        <a href="#">Browse</a>
      </div>

      <SearchBar />
      <div className="flex flex-row-reverse flex-grow flex-shrink w-full">
        <img
          className="h-10 w-10 rounded-full"
          src={user.image}
          alt="User Icon"
        />
      </div>
    </header>
  );
}

export default Header;
