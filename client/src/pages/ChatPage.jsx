import "../styles/Home.css";
import "../styles/Chat.css";
import Nav from "../components/Nav";
import Gradient from "../components/Gradient"
import Chat from "../components/Chat";



function ChatPage() {
  return (
    <div className="container">
      <Nav />
      <Gradient />
      <Chat/>
      <Gradient />
    </div>
  );
}

export default ChatPage;
