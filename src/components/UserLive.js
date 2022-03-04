import React from "react";
import { formatNumber } from "../assets/formatNumber";

function UserLive({ user, video }) {
  return (
    <div className="flex flex-col items-center flex-shrink-0 space-y-2 w-40 text-base cursor-pointer overflow-hidden">
      <div className="relative">
        <img
          className="w-24 h-24 rounded-full"
          src={user.image}
          alt="User Icon"
        />
        <div className="absolute top-0 right-0 translate-x-1/2 flex flex-row items-center space-x-1">
          <div className="bg-red-600 rounded-full w-2.5 h-2.5"></div>
          <p className="text-sm font-bold">
            {formatNumber(video.viewcount, 1)}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center leading-tight whitespace-nowrap">
        <p className="font-bold">{user.name}</p>
        <p>{video.game}</p>
      </div>
    </div>
  );
}

export default UserLive;
