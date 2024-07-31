import { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import { useSocket } from "../SocketContext";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;

const Chat = () => {
  const { user } = useAuth();
  const { socket } = useSocket();
  // console.log(user); 

  const [messages, setMessages] = useState([]);
  const [currMessage, setCurrMessage] = useState("");

  function sendMessage() {
    if (currMessage !== "") {
      let msg = {
        userId: user.googleId,
        userMessage: currMessage,
        userPicture: user.imageUrl
      };
      socket.emit("send_message", msg);
      setCurrMessage("");
    }
  }

  useEffect(() => {
    const handleMessage = (data) => {
      setMessages((oldMessages) => [...oldMessages, data]);
    };

    socket.on('new_message', handleMessage);

    return () => {
      socket.off('new_message', handleMessage);
    };
  }, []);


  // console.log(messages);
  return (
    <div className="flex flex-col mx-auto w-[100%] h-[80vh] chatlayout">
      {messages.length !== 0 ?
        <div className="w-full h-[80vh]">
          {messages.map((message) => {
            return (
              <div
                className={
                  user.googleId === message.userId ? "chat-local" : "chat-other"
                }
              >
                <img src={message.userPicture} alt="" />
                <p>{message.userMessage}</p>
              </div>
            );
          })}
        </div>
        :
        <div className="w-full h-[80vh]">
        </div>
      }
      <div className="flex w-full h-[10vh] mb-2">
        <textarea
          className="w-[90%] border-2 border-orange-500 rounded-lg"
          name="message"
          rows="3"
          onChange={(e) => setCurrMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              sendMessage();
            }
          }}
          value={currMessage}
        ></textarea>
        <div className="chat-sendBtn" onClick={sendMessage}>
          <span className="material-symbols-outlined">send</span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
