import React from "react";
import Video from "./Video";

function VideoGrid({ videos, title }) {
  return (
    <div>
      <h2 className=" text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(var(--video-width),1fr))] gap-x-8">
        {videos.map((video) => (
          <Video
            video={video}
            fullWidth={true}
            key={video.name + video.user.name}
          />
        ))}
      </div>
      <div className="border-b border-gray-300 mt-3"></div>
    </div>
  );
}

export default VideoGrid;
