import { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import io from "socket.io-client";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;

const Chat = () => {
  const { user } = useAuth();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (user) {
      const s = io.connect("http://localhost:3000", { query: user.googleId });
      setSocket(s);
      return () => {
        s.disconnect();
      };
    }
  }, [user]);

  const [messages, setMessages] = useState([]);
  const [currMessage, setCurrMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/messages")
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Not able to load the messages: ", err));
  }, []);

  function sendMessage() {
    if (currMessage !== "") {
      let msg = {
        userId: user.userId,
        userMessage: currMessage,
        userPicture: user.picture,
      };
      socket.emit("send_message", msg);
      setCurrMessage("");
    }
  }

  useEffect(() => {
    if (socket) {
      const handleMessage = (data) => {
        setMessages((oldMessages) => [...oldMessages, data]);
      };

      socket.on("new_message", handleMessage);

      return () => {
        socket.off("new_message", handleMessage);
      };
    }
  }, [socket]);

  return (
    <div className="flex flex-col mx-auto w-[100%] h-[80vh] chatlayout">
      {messages.length !== 0 ? (
        <div className="flex-grow overflow-y-auto p-4">
          {messages.map((message) => {
            return (
              <div
                className={
                  user.googleId === message.userId ? "chat-local" : "chat-other"
                }
              >
                <img src={message.userPicture} alt={`${user.name} profile picture from Google account.`} className="rounded-2xl" />
                <p>{message.userMessage}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full h-[80vh]"></div>
      )}
      <div className="flex w-full h-[10vh] mb-2">
        <textarea
          className="w-[90%] border-2 border-orange-500 rounded-lg"
          name="message"
          rows="3"
          onChange={(e) => setCurrMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
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
