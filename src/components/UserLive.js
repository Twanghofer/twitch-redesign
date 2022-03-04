import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../assets/formatter";

function UserLive({ video }) {
  return (
    <Link
      to={`/${video.user.name.toLowerCase()}`}
      className="flex flex-col items-center flex-shrink-0 space-y-2 text-base cursor-pointer"
    >
      <div className="relative">
        <img
          className="w-24 h-24 rounded-full object-cover border border-neutral-300"
          src={video.user.image}
          alt={`${video.user.name}'s Profile Picture`}
        />
        <div className="absolute top-0 right-0 translate-x-1/2 flex flex-row items-center space-x-1">
          <div className="bg-red-600 rounded-full w-2.5 h-2.5"></div>
          <p className="text-sm font-bold">
            {formatNumber(video.viewcount, 1)}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center leading-tight whitespace-nowrap">
        <p className="font-bold">{video.user.name}</p>
        <p className="text-sm">{video.game}</p>
      </div>
    </Link>
  );
}

export default UserLive;
