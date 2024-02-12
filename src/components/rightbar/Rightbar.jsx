import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData.js";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="RightbarWrapper">
        <div className="birthdayContainer">
          <img src="./assets/gift.png" alt="" className="birthdayIcon" />
          <span className="birthdaytext">
            Today, is <b>Hassan Bajwa's </b>and your <b>3 other friend's </b>
            birthday. Send them wishes!
          </span>
        </div>
        <div className="adcontainer">
          <img src="./assets/ad.png" alt="" className="adImg" />
        </div>
        <h4 className="rightbarTitle">Online friends</h4>
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
      </div>
    </div>
  );
}
