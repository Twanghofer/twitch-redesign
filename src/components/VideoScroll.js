import React from "react";
import Video from "./Video";

function VideoScroll({ title, videos }) {
  return (
    <div className="pl-8 mb-5">
      <h1 className=" text-2xl font-bold">{title}</h1>
      <div className="flex flex-row space-x-10 mt-1/2 pr-8 overflow-x-auto scrollbar-none">
        {videos.map((video) => (
          <Video video={video} />
        ))}
      </div>
    </div>
  );
}

export default VideoScroll;
