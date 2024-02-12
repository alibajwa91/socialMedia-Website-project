import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function TopBar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        {" "}
        <span className="logo">PostUp</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon />
          <input type="text" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <MessageIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src="./assets/person/1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
