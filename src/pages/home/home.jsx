import "./home.css";
import TopBar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Post from "../../components/post/Post";

export default function Home() {
  return (
    <div className="app">
      <TopBar />
      <div className="main-content">
        <Sidebar />
        <div>
          <Feed />
          <Post />
        </div>
        <Rightbar />
      </div>
    </div>
  );
}
