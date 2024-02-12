import "./sidebar.css";
import FeedbackIcon from "@mui/icons-material/Feedback";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/Chat";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import Friend from "../friendlist/Friend";
import { Users } from "../../dummyData.js";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FeedbackIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Feedback</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <GroupsIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <OndemandVideoIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Career with PostUp</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarListItemIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <button className="showMore">Show More</button>
          </li>
        </ul>
        <hr className="sepratorLine" />

        <ul className="friendList">
          <h3 className="friendsListHeading">Friends List</h3>
          {Users.map((u) => (
            <Friend key={u.id} currentuser={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
