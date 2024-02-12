import { Users } from "../../dummyData";
import "./online.css";

export default function Online({ user }) {
  return (
    <div>
      <ul className="rightbarfriendslist">
        <li className="rightbarFriend">
          {/* this container will add profile img with a online mark onit */}
          <div className="rightbarProfileImgContainer">
            <img
              src={user.profilePicture}
              alt=""
              className="rightbarProfileImg"
            />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarFriendName">{user.username}</span>
        </li>
      </ul>
    </div>
  );
}
