import React from "react";
import { useParams } from "react-router-dom";
import categories from "../assets/categories";
import { formatNumber } from "../assets/formatter";
import videos from "../assets/videos";
import VideoGrid from "../components/VideoGrid";

function Game() {
  const { game } = useParams();
  const category = categories.find((category) => category.name === game);
  const categoryVideos = videos.filter((video) => video.game == category.name);

  return (
    <div className="flex flex-col gap-2 p-8">
      <div className="flex flex-col items-center 2xs:flex-row gap-5 pb-8 border-b border-gray-300">
        <img className="w-24" src={category.image} alt={category.name} />
        <div className="space-y-1">
          <h1 className="text-3xl xs:text-4xl font-bold">{category.name}</h1>
          <div className="flex flex-row flex-wrap items-center gap-x-3 text-xl">
            <h2 className="font-medium">
              {formatNumber(category.viewcount, 1)}
              <span className="font-normal"> Viewers</span>
            </h2>
            <div className="bg-black rounded-full w-1.5 h-1.5"></div>
            <h2 className="font-medium">
              {formatNumber(categoryVideos.length, 1)}
              <span className="font-normal"> Live channels</span>
            </h2>
          </div>
        </div>
      </div>
      <VideoGrid videos={categoryVideos} />
    </div>
  );
}

export default Game;
