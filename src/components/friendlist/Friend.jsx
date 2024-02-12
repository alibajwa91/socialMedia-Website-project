import "./friend.css";
// argument like currentuser/ user /post it should be unique in all the components
export default function Friend({ currentuser }) {
  return (
    <div>
      <li className="friend">
        <img className="friendImg" src={currentuser.profilePicture} alt="" />
        <span className="friendDesc">{currentuser.username}</span>
      </li>
    </div>
  );
}
