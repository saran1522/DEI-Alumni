import "../styles/Posts.css";
import { postdata } from "../../data/postdata";
import Post from "./Post";
import Sidebar from "./Sidebar";

export default function HomePage() {
  const homePosts = postdata.map((post) => (
    <Post key={post.postId} post={post} />
  ));
  return (
    <main className="main-container">
      <Sidebar isHome={true} />
      <div className="homeContainer">{homePosts}</div>
    </main>
  );
}
