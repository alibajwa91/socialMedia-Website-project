import "./profile.css";
import TopBar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <div className="app">
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="../../assets/post/3.jpeg"
                alt=""
                className="profileCoverImg"
              />

              <img
                src="../../assets/person/1.JPG"
                alt=""
                className="profilePicture"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ali Bajwa</h4>
              <h4 className="profileInfoDesc">"Having Good Days of my life"</h4>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}
