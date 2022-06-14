import React from "react";
import "./ExploreGames.css";
import notificationFriendsOnly from "../../assets/images/friends.jpg";
import gamepads from "../../assets/images/gamepads.png";

const ExploreGames = () => {
    return (
        <div className="mt-10 mb-10">
            <div className="flex justify-between gap-5">
                <div className="explore flex-1 flex justify-center items-center relative">
                    <h2 className="text-4xl uppercase text-white font-bold">
                        Explore
                    </h2>
                    <div className="avatar absolute bottom-0 left-0 ml-[10px] mb-[10px]">
                        <div className="w-20 rounded-full">
                            <img
                                className="w-20 object-cover"
                                src={notificationFriendsOnly}
                                alt=""
                            />
                            <span className="badge bg-red-500 border-0 absolute top-0 left-[65%]">
                                New
                            </span>
                        </div>
                    </div>
                </div>
                <div className="games flex-1 flex justify-center items-center relative">
                    <h2 className="text-4xl uppercase text-white font-bold">
                        Games
                    </h2>
                    <div className="avatar absolute bottom-0 left-0 ml-[10px] mb-[10px]">
                        <div className="w-20 rounded-full">
                            <img
                                className="brightness-125"
                                src={gamepads}
                                alt=""
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary absolute bottom-0 left-3/4 mb-[10px]">
                        Leaderboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExploreGames;
