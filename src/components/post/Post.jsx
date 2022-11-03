import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import db from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import "./post.css";
import { myContext } from "../../context/MyContext";

const Post = ({ profilepic, image, username, timestamp, message, id }) => {
  const { user } = useContext(myContext);
  const haneleDelete = (id) => {
    console.log("dsfasdf");
    const colRef = doc(db, "Posts", id);
    deleteDoc(colRef).then(() => {
      console.log("done");
      console.log(id);
    });
  };
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilepic} className="post__avatar" />
        <div className="post__info">
          <h3>{username}</h3>
          <p> {new Date(timestamp * 1000).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p className="message">{message}</p>
      </div>
      <div className="post__image">
        {image ? <img src={image} alt="img" /> : null}
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpAltIcon />
          <p>Like</p>
        </div>

        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>

        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>

        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
        {user?.displayName == username ? (
          <div className=" delete post__option" onClick={() => haneleDelete(id)}>
            <DeleteOutlineIcon />
            <p>Delete</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Post;
