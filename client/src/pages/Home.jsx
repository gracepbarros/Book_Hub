import "../styles/Home.css";
import "../styles/Nav.css";
import "../styles/Gradient.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Gradient from "../components/Gradient";
import { useEffect } from "react";

function Home() {
  return (
    <div className="container">
      <Nav />
      <Gradient />
      <Header />
      <Gradient />
    </div>
  );
}

export default Home;
