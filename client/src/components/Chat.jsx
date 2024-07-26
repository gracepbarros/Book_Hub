import { useState, useEffect} from "react";
import img from "../images/avatar.png";
// import io from "socket.io-client";

// const socket = io.connect("http://localhost:3000/");

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;

const Chat = () => {
  
  // let messages = [
  //   {
  //     userId: 123,
  //     userMessage: "testing",
  //     userPicture: img,
  //   },
  //   {
  //     userId: 456,
  //     userMessage:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas bibendum orci, quis varius purus rutrum in, vulputate egestas mauris. Pellentesque sit amet est eget nulla tincidunt euismod vel vitae ligula. Sed massa augue, pellentesque a velit in, sagittis convallis orci. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  //     userPicture: img,
  //   },
  //   {
  //     userId: 252,
  //     userMessage: "testing 33333",
  //     userPicture: img,
  //   },
  // ];

  // useEffect(() => {
  //   // Component will unmount
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  // let userId = Math.random() * 1000;

  // const [messages, setMessages] = useState([]);
  // const [userName, setUserName] = useState();
  // const [typeUserName, setTypeUserName] = useState("");
  // const [currMessage, setCurrMessage] = useState("");

  // function handleClick() {
  //   setUserName(typeUserName);
  // }

  // function sendMessage() {
  //   if (currMessage !== "") {
  //     let msg = {
  //       userId: userId,
  //       userMessage: currMessage,
  //       userPicture: img
  //     };
  //     socket.emit("send_message", msg);
  //     setCurrMessage("");
  //   }
  // }

  // useEffect(() => {
  //   socket.on('new_message', (data) => {
  //     setMessages(oldMessages => [...oldMessages, data]);
  //   });
  // }, []); 

  // return userName ? (
  //   <div className="flex flex-col mx-auto w-[100%] h-[80vh] chatlayout">
  //     {messages.length!==0 ?
  //       <div className="w-full h-[80vh]">
  //         {messages.map((message) => {
  //           return (
  //             <div key={Math.random() * 100000}
  //               className={
  //                 userId === message.userId ? "chat-local" : "chat-other"
  //               }
  //             >
  //               <img src={message.userPicture} alt="" />
  //               <p>{message.userMessage}</p>
  //             </div>
  //           );
  //         })}
  //       </div>
  //       :
  //       <div className="w-full h-[80vh]">
  //       </div>
  //     }
  //     <div className="flex w-full h-[10vh] mb-2">
  //       <textarea
  //         className="w-[90%] border-2 border-orange-500 rounded-lg"
  //         name="message"
  //         rows="3"
  //         onChange={(e) => setCurrMessage(e.target.value)}
  //       ></textarea>
  //       <div className="chat-sendBtn" onClick={sendMessage}>
  //         <span class="material-symbols-outlined">send</span>
  //       </div>
  //     </div>
  //   </div>
  // ) :
  //   (
  //     <>
  //       <input type="text" onChange={(e) => setTypeUserName(e.target.value)} />
  //       <button onClick={handleClick} >Enter</button>
  //     </>
  //   )
  //   ;

  return (
    <h1>Working in progress ....</h1>
  )
};

export default Chat;
