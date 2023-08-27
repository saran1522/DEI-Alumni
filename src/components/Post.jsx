import { useState } from "react";
import "../styles/Posts.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  // const [likedBy, setLikedBy] = useState(post.likedBy);
  // const isLiked = likedBy.find((id) => id === userId);
  // const [currCommentId, setCurrCommentId] = useState(null);
  // const [userComment, setUserComment] = useState("");
  // const [postComments, setPostComments] = useState(post.comments);

  // function handleLike() {
  //   setLikedBy((prevLikedBy) =>
  //     isLiked
  //       ? prevLikedBy.filter((id) => id !== userId)
  //       : [...prevLikedBy, userId]
  //   );
  // }

  // function handleShowComments(id) {
  //   setCurrCommentId(id === currCommentId ? null : id);
  // }

  // function handleUserComment(e) {
  //   setUserComment(e.target.value);
  // }

  // function handleAddComment() {
  //   if (userComment.length > 0)
  //     setPostComments((prevComments) => [...prevComments, userComment]);
  //   setUserComment("");
  // }

  // const comments = postComments.map((comment, i) => (
  //   <p key={i} className="comment">
  //     {comment}
  //   </p>
  // ));

  return (
    <div className="home">
      <div className="publish-details">
        <div className="author">
          <img src={post.authorImg} alt="" />
          <p>posted by: {post.author}</p>
        </div>
        <p>Date: {post.date}</p>
      </div>
      <div className="homeBlog">
        <div className="homeTitle">
          <Link to={`${post.postId}`} state={post}>
            {post.title}
          </Link>
        </div>
        <div className="homeImg">
          <img src={post.img} alt="" />
        </div>
      </div>
      {/* <div className="reactions">
        <div className="like">
          <span className="like-icon">
            <i
              className={isLiked ? "ri-thumb-up-fill" : "ri-thumb-up-line"}
              onClick={handleLike}
            ></i>
          </span>
          <span>Like</span>
        </div>
        <div className="comments">
          <span className="comment-icon">
            <i
              className="ri-message-3-line"
              onClick={() => {
                handleShowComments(post.postId);
              }}
            ></i>
          </span>
          <span>Comments</span>
        </div>
      </div>
      {post.postId === currCommentId && (
        <div className="home-comments">
          {comments}
          <div className="user-comment">
            <input
              type="text"
              placeholder="write a comment..."
              value={userComment}
              onChange={handleUserComment}
            />
            <button onClick={handleAddComment}>add</button>
          </div>
        </div>
      )} */}
    </div>
  );
}
