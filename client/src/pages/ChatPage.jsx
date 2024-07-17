import "../styles/Home.css";
import Nav from "../components/Nav";
import Gradient from "../components/Gradient";
import { useEffect } from "react";

function ChatPage() {
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) =>
        console.error("Failed to load data from the api: ", error)
      );
  }, []);

  return (
    <div className="container">
      <Nav />
      <Gradient />
      {/*Chat goes here */}
      <Gradient />
    </div>
  );
}

export default ChatPage;
