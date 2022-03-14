import React from "react";
import videos from "../assets/videos";
import UserLive from "./UserLive";

function UserFollowingScroll({ vertical = false }) {
  const followingVideos = videos
    .filter((a) => a.following === true)
    .sort((a, b) => b.viewcount - a.viewcount);

  if (vertical)
    return (
      <div className="flex flex-col flex-shrink-0 justify-start items-center space-y-3 h-full px-3 py-5 pr-6 bg-white border-r overflow-auto scrollbar-none">
        {followingVideos.map((video) => (
          <UserLive video={video} key={video.user.name} />
        ))}
      </div>
    );

  return (
    <div className="flex flex-row space-x-6 w-full p-4 pt-6 overflow-hidden overflow-x-auto scrollbar-none">
      {followingVideos.map((video) => (
        <UserLive video={video} key={video.user.name} />
      ))}
    </div>
  );
}

export default UserFollowingScroll;
