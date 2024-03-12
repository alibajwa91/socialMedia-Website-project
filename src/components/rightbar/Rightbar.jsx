import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData.js";
import UserFriend from "../userFriend/UserFriend.jsx";
import React, { useState } from "react";

export default function Rightbar({ profile }) {
  // code to open and close online friends div
  const [isOpen, setIsOpen] = useState(false);

  const toggleOnlineFriends = () => {
    setIsOpen(!isOpen);
  };
  const PageAd = () => {
    return (
      <div className="adcontainer">
        <img src="./assets/ad.png" alt="" className="adImg" />
      </div>
    );
  };
  const RightbarHome = () => {
    return (
      <div>
        {" "}
        <div className="birthdayContainer">
          <img src="./assets/gift.png" alt="" className="birthdayIcon" />
          <span className="birthdaytext">
            Today, is <b>Hassan Bajwa's </b>and your <b>3 other friend's </b>
            birthday. Send them wishes!
          </span>
        </div>
        {/* To show AD */}
        <PageAd />
        {/* used togglOnilne from above function */}
        <h4 className="rightbarTitle" onClick={toggleOnlineFriends}>
          Online friends
        </h4>
        <div className={`onlineMobileView ${isOpen ? "active" : "nonActive"} `}>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </div>
      </div>
    );
  };

  const RightbarProfile = () => {
    return (
      <div>
        {" "}
        <h4 className="rightbarTitle"> User Information</h4>
        <div className="rightbarPersonalInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Toronto</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">study: </span>
            <span className="rightbarInfoValue">
              Student at Centennial College
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship Status: </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Interests </span>
            <span className="rightbarInfoValue">
              bedminton, gym, Book Reading
            </span>
          </div>
          <h4 className="rightbarTitle"> User Friends</h4>
          {/* map function for user friends at right bar at profile page */}
          <div className="rightbarFollowings">
            {Users.map((u) => (
              <UserFriend key={u.id} follower={u} />
            ))}
          </div>
        </div>{" "}
        {/* to show ad */}
        <PageAd />
      </div>
    );
  };

  return (
    <div className="rightbar">
      <div className="RightbarWrapper">
        {profile ? <RightbarProfile /> : <RightbarHome />}
      </div>
    </div>
  );
}
