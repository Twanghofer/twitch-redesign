import React from "react";
import VideoGrid from "../components/VideoGrid";
import videos from "../assets/videos";
import VideoScroll from "../components/VideoScroll";

function Following() {
  return (
    <div className="p-8 py-6">
      <h1 className="text-5xl font-bold mb-3">Following</h1>
      <div className="space-y-8">
        <VideoGrid videos={videos.slice(0, 10)} title="Live channels" />
        <div className=" -mr-8">
          <VideoScroll
            videos={videos.slice(videos.length / 2)}
            title="Recommended channels"
          />
        </div>
      </div>
    </div>
  );
}

export default Following;
