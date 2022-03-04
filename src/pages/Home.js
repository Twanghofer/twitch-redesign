import React from "react";
import HomeBanner from "../components/HomeBanner";
import UserLive from "../components/UserLive";
import VideoScroll from "../components/VideoScroll";
import videos from "../assets/videos";
import CategoryScroll from "../components/CategoryScroll";
import categories from "../assets/categories";

function Home() {
  const followingVideos = videos
    .filter((a) => a.following === true)
    .sort((a, b) => b.viewcount - a.viewcount);

  return (
    <>
      <HomeBanner />
      <div className="flex flex-row items-center space-x-8 w-full px-5 py-8 overflow-auto scrollbar-none">
        {followingVideos.map((video) => (
          <UserLive video={video} key={video.user.name} />
        ))}
      </div>

      <VideoScroll
        title="Recently watched streams"
        videos={videos
          .slice(0, videos.length / 2)
          .sort(() => Math.random() - 0.5)}
      />
      <VideoScroll
        title="Most popular in Austria"
        videos={videos
          .slice(videos.length / 2)
          .sort((a, b) => b.viewcount - a.viewcount)}
      />
      <CategoryScroll title="Recommended categories" categories={categories} />
    </>
  );
}

export default Home;
