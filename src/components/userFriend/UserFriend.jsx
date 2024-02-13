import "./userFriend.css";

export default function UserFriend({ follower }) {
  return (
    <div className="rightbarFollowing">
      <img
        src={follower.profilePicture}
        alt=""
        className="rightbarFollowingImg"
      />
      <span className="rightbarFollowingName">{follower.username}</span>
    </div>
  );
}
