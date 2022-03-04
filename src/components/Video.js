import React from "react";
import { formatNumber } from "../assets/formatNumber";

function Video({ video }) {
  return (
    <div className="flex flex-col space-y-2 flex-shrink-0 w-80 py-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src={video.user.image}
            alt="User Icon"
          />
          <a className="font-bold hover:text-link ">{video.user.name}</a>
        </div>
        <p className="font-bold text-sm">
          {formatNumber(video.viewcount, 1)} viewers
        </p>
      </div>
      <img className="w-full" src={video.image} alt="Thumbnail" />
      <div className="flex flex-col">
        <a className="font-bold text-lg hover:text-link ">{video.title}</a>
        <a className="hover:text-link">{video.game}</a>
      </div>
    </div>
  );
}

export default Video;
