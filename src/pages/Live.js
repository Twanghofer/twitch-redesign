import React, { useEffect, useState } from "react";
import videos from "../assets/videos";
import { Link, useParams } from "react-router-dom";
import UserFollowingScroll from "../components/UserFollowingScroll";
import Chat from "../components/Chat";
import { formatNumber } from "../assets/formatter";
import { BsPersonFill } from "react-icons/bs";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import SocialButton from "../components/SocialButton";

function Live() {
  const { username } = useParams();
  const video = videos.find(
    (video) => video.user.name.toLowerCase() === username
  );
  const [subscription, setSubscription] = useState(false);
  const [following, setFollowing] = useState(video.following);

  const toggleSub = () => {
    setSubscription(!subscription);
  };

  const toggleFollow = () => {
    setFollowing(!following);
  };

  useEffect(() => {
    setSubscription(false);
    setFollowing(video.following);
  }, [video]);

  return (
    <div className="flex flex-row w-full h-full overflow-hidden">
      <div className="hidden xl:flex">
        <UserFollowingScroll vertical={true} />
      </div>
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col w-full h-full p-8 overflow-y-auto scrollbar-none">
          <div className="flex flex-col w-full max-h-full gap-4">
            <div className="relative max-w-full bg-black overflow-hidden">
              <div className="pt-[56.25%]"></div>
              <img
                className="absolute top-0 left-1/2 -translate-x-1/2 h-full blur-sm"
                src={video.image}
                alt={`${video.user.name}'s Stream`}
              />
            </div>
            <div className="flex flex-row flex-wrap items-start gap-3 sm:gap-1 flex-grow ">
              <div className="flex flex-row gap-4 max-w-full">
                <img
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-neutral-300"
                  src={video.user.image}
                  alt={`${video.user.name}'s Profile Picture`}
                />
                <div className="flex flex-col flex-grow text-lg sm:text-xl overflow-hidden">
                  <p className="font-bold">
                    {video.user.name}
                    <span className="font-normal"> playing </span>
                    <Link to={`/game/${video.game}`} className="text-link">
                      {video.game}
                    </Link>
                  </p>
                  <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                    {video.title}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-start basis-full flex-grow 2xs:flex-row 2xs:items-center xl:flex-col xl:items-end xl:basis-[unset] gap-4">
                <div className="flex flex-row items-center justify-end gap-0.5 text-red-600">
                  <BsPersonFill className="w-5 h-5" />
                  <p className="font-medium">
                    {formatNumber(video.viewcount, 2)}
                  </p>
                </div>
                <div className="flex flex-row flex-wrap w-full justify-end gap-x-5 gap-y-3">
                  <button
                    className="flex flex-shrink flex-grow 2xs:flex-grow-0 justify-center items-center px-5 py-2 bg-white hover:bg-gray-100 border border-gray-400 rounded-md"
                    onClick={toggleFollow}
                  >
                    {following ? "Following" : "Follow"}
                  </button>
                  <button
                    className="flex flex-shrink flex-grow 2xs:flex-grow-0 justify-center items-center px-5 py-2 text-white font-medium bg-brand hover:bg-link rounded-md"
                    onClick={toggleSub}
                  >
                    {subscription ? "Subscribed" : "Subscribe"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-7 space-y-2.5 bg-white">
            <h3 className="text-2xl font-medium">About {video.user.name}</h3>
            <p>
              Lifelong gamer & avid FPS fan. Ex-CSGO Pro, ex-C9 VAL & current
              F/A as well as a streamer/entertainer. Follow me on Twitter
            </p>
            <div className="flex flex-row flex-wrap gap-6 pt-2">
              <SocialButton title="Twitter" icon={<FaTwitter />} />
              <SocialButton title="Instagram" icon={<FaInstagram />} />
              <SocialButton title="Youtube" icon={<FaYoutube />} />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default Live;
