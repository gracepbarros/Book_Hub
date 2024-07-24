import { useState } from "react";
import img from "../images/avatar.png";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;

const Chat = () => {
  let messages = [
    {
      userId: 123,
      userMessage: "testing",
      userPicture: img,
    },
    {
      userId: 456,
      userMessage:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas bibendum orci, quis varius purus rutrum in, vulputate egestas mauris. Pellentesque sit amet est eget nulla tincidunt euismod vel vitae ligula. Sed massa augue, pellentesque a velit in, sagittis convallis orci. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      userPicture: img,
    },
    {
      userId: 252,
      userMessage: "testing 33333",
      userPicture: img,
    },
  ];

  let userId = 456;

  return (
    <div className="chat-chatBox">
      <div className="chat-messagesBox">
        {messages.map((message) => {
          return (
            <div
              className={
                userId === message.userId ? "chat-local" : "chat-other"
              }
            >
              <img src={message.userPicture} alt="" />
              <p>{message.userMessage}</p>
            </div>
          );
        })}
      </div>
      <div className="chat-inputBox">
        <textarea name="message" rows="3"></textarea>
        <div className="chat-sendBtn">
          <span class="material-symbols-outlined">send</span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
