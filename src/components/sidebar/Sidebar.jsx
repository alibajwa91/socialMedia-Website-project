import "./sidebar.css";
import React from "react";
import FeedbackIcon from "@mui/icons-material/Feedback";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/Chat";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import Friend from "../friendlist/Friend";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Users } from "../../dummyData.js";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sidebarHam">
      <div className="menuIcon" onClick={toggleNav}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div className={` sidebarBottom ${isOpen ? "active" : "nonActive"}`}>
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
      </div>
    </div>
  );
}
