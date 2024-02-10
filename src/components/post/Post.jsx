import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="./assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />

            <span className="postUserName">alibajwa91</span>
            <span className="postDate">09/02/2024</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <img src="./assets/post/1.jpeg" alt="" className="mainPost" />
        </div>
        <div className="postBottom"></div>
      </div>
    </div>
  );
}
