import React, { useEffect, useState } from "react";
import MessageSender from "../messageSender/MessageSender";
import Post from "../post/Post";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import db from "../../firebase";
import StoryReel from "../StoryReel/StoryReel";
import "./feed.css";
const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "Posts");
    const q = query(colRef, orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          id  = {post?.id}
          message={post.data.message}
          profilepic={post?.data?.profilepic}
          username={post?.data?.username}
          image={post?.data?.image}
          timestamp={post?.data?.timestamp?.seconds}
        />
      ))}
    </div>
  );
};

export default Feed;
