import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../assets/formatter";

function Video({ video, fullWidth = false }) {
  const channelLink = `/${video.user.name.toLowerCase()}`;
  return (
    <div
      className={`flex flex-col space-y-2 flex-shrink-0 flex-grow py-4 ${
        fullWidth
          ? "w-full"
          : "w-11/12 sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4 2xl:w-1/5"
      }`}
    >
      <div className="flex flex-row items-center gap-2">
        <Link to={channelLink} className="flex flex-row items-center">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={video.user.image}
            alt={`${video.user.name}'s Profile Picture`}
          />
        </Link>
        <div className="flex flex-col items-start 2xs:flex-row 2xs:items-center flex-grow leading-tight">
          <Link to={channelLink}>
            <p className="font-bold hover:text-link ">{video.user.name}</p>
          </Link>
          <p className="flex flex-grow justify-end font-bold text-sm overflow-hidden whitespace-nowrap text-ellipsis opacity-80">
            {formatNumber(video.viewcount, 1)} viewers
          </p>
        </div>
      </div>
      <Link to={channelLink}>
        <img className="w-full" src={video.image} alt="Thumbnail" />
      </Link>

      <div className="flex flex-col leading-snug">
        <Link
          to={channelLink}
          className="font-bold overflow-hidden whitespace-nowrap text-ellipsis hover:text-link "
        >
          {video.title}
        </Link>
        <Link to={`/game/${video.game}`} className="text-sm hover:text-link">
          {video.game}
        </Link>
      </div>
    </div>
  );
}

export default Video;
