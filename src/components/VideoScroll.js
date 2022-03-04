import React from "react";
import Video from "./Video";

function VideoScroll({ title, videos }) {
  return (
    <div className="pl-8 mb-7">
      <h1 className=" text-2xl font-bold">{title}</h1>
      <div className="flex flex-row space-x-10 pr-8 mt-1 overflow-x-auto scrollbar-none">
        {videos.map((video) => (
          <Video video={video} key={video.user.name} />
        ))}
      </div>
      <div className="border-b border-gray-300 mr-8 mt-3"></div>
    </div>
  );
}

export default VideoScroll;
