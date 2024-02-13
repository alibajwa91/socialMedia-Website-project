import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData.js";

export default function Rightbar({ profile }) {
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
        <h4 className="rightbarTitle">Online friends</h4>
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
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
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Sharukh</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Sharukh</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Sharukh</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Sharukh</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Sharukh</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Sharukh</span>
            </div>
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
