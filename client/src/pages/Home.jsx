import "../styles/Home.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Gradient from "../components/Gradient";
import Main from "../components/Main";
import { useEffect } from "react";

function Home() {
  // useEffect(() => {
  //   fetch("http://localhost:3000/api")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) =>
  //       console.error("Failed to load data from the api: ", error)
  //     );
  // }, []);

  return (
    <div className="container">
      <Nav />
      <Gradient />
      <Header />
      <Main />
      <Gradient />
    </div>
  );
}

export default Home;
