import "./rightbar.css";

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
        <ul className="rightbarfriendslist">
          <li className="rightbarFriend">
            {/* this container will add profile img with a online mark onit */}
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Naina Fawad </span>
          </li>
          <li className="rightbarFriend">
            {/* this container will add profile img with a online mark onit */}
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Naina Fawad </span>
          </li>{" "}
          <li className="rightbarFriend">
            {/* this container will add profile img with a online mark onit */}
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Naina Fawad </span>
          </li>{" "}
          <li className="rightbarFriend">
            {/* this container will add profile img with a online mark onit */}
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Naina Fawad </span>
          </li>{" "}
          <li className="rightbarFriend">
            {/* this container will add profile img with a online mark onit */}
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Naina Fawad </span>
          </li>{" "}
          <li className="rightbarFriend">
            {/* this container will add profile img with a online mark onit */}
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Naina Fawad </span>
          </li>{" "}
          <li className="rightbarFriend">
            {/* this container will add profile img with a online mark onit */}
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Naina Fawad </span>
          </li>{" "}
          <li className="rightbarFriend">
            {/* this container will add profile img with a online mark onit */}
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Naina Fawad </span>
          </li>{" "}
          <li className="rightbarFriend">
            {/* this container will add profile img with a online mark onit */}
            <div className="rightbarProfileImgContainer">
              <img
                src="./assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarFriendName">Naina Fawad </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
