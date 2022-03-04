import React from "react";
import HomeBanner from "../components/HomeBanner";
import UserLive from "../components/UserLive";
import VideoScroll from "../components/VideoScroll";
import videos from "../assets/videos";

function Home() {
  const recentlyWatched = videos.sort(() => Math.random() - 0.5);
  const otherVideos = videos.sort((a, b) => a.viewcount - b.viewcount);

  return (
    <>
      <HomeBanner />
      <div className="flex flex-row items-center w-full px-3 py-8 overflow-auto scrollbar-none">
        {videos
          .sort((a, b) => b.viewcount - a.viewcount)
          .map((video) => (
            <UserLive user={video.user} video={video} key={video.user.name} />
          ))}
      </div>

      <VideoScroll
        title="Streamers you recently watched"
        videos={recentlyWatched}
      />
      <VideoScroll title="Most popular in your country" videos={otherVideos} />
    </>
  );
}

export default Home;
