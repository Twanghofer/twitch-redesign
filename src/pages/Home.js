import React from "react";
import HomeBanner from "../components/HomeBanner";
import VideoScroll from "../components/VideoScroll";
import videos from "../assets/videos";
import CategoryScroll from "../components/CategoryScroll";
import categories from "../assets/categories";
import UserFollowingScroll from "../components/UserFollowingScroll";

function Home() {
  return (
    <>
      <HomeBanner />
      <UserFollowingScroll />
      <div className="pl-8 mt-5 mb-12 space-y-8">
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
        <CategoryScroll
          title="Recommended categories"
          categories={categories}
        />
      </div>
    </>
  );
}

export default Home;
