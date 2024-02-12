import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData.js";
import { useState } from "react";

export default function Post({ post }) {
  // write a usestate function/method to make our like button functional
  const [like, setLike] = useState(post.like);
  const [isliked, setIsliked] = useState(false);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsliked(!isliked);
  };

  // console.log(post);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            {/*Users.filter((u) => u.id === post.userId)[0].profilePicture 
            in this code we have created filter the Usersdata using the id 
            of USers data and a callbackfunction is used to (u) => u.id === post.userId) 
            assign itequal to the UserId of posts Data*/}

            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <div className="postDesc"> {post?.desc}</div>
          <img src={post.photo} alt="" className="mainPost" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="./assets/like.png"
              alt=""
              className="reactIcon"
              onClick={likeHandler}
            />
            <img
              src="./assets/heart.png"
              alt=""
              className="reactIcon"
              onClick={likeHandler}
            />
            <span className="likeCount">{like} likes! </span>
          </div>
          <div className="postBottomRight">
            <span className="commentsCount">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
