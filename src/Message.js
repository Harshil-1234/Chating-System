import { Avatar } from "@mui/material";
import React from "react";
import "./Message.css";

function Message({ message, image, name, timestamp }) {
  return (
    <div className="message">
      <Avatar src={image} />
      <div className="message__info">
        <h4>
          {name}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
