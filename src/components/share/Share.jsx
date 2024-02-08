import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="ShareProfileImg"
            src="./assets/person/1.jpeg"
            alt=""
          />
          <input
            className="shareInput"
            placeholder="Share your thoughts today!!"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareicon" />
              <span className="shareOptionText">photos/videos</span>
            </div>
            <div className="shareOption">
              <LocalOfferIcon htmlColor="orange" className="shareicon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <LocationOnIcon htmlColor="blue" className="shareicon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="brown" className="shareicon" />
              <span className="shareOptionText">Feelings</span>
            </div>
            <div>
              <button className="shareBtn"> Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
