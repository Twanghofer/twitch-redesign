import React from "react";
import Video from "./Video";

function VideoScroll({ title, videos }) {
  return (
    <div className="space-0">
      <h2 className="text-2xl font-bold overflow-hidden whitespace-nowrap text-ellipsis">
        {title}
      </h2>
      <div className="flex flex-row gap-10 pr-8 mt-1 overflow-x-auto scrollbar-none">
        {videos.map((video) => (
          <Video video={video} key={video.user.name} />
        ))}
      </div>
      <div className="border-b border-gray-300 mr-8 mt-3"></div>
    </div>
  );
}

export default VideoScroll;
