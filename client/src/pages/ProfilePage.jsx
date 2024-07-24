import "../styles/Profile.css";
import Nav from "../components/Nav";
import Gradient from "../components/Gradient";
import ProfileTabs from "../components/ProfileTabs";
import { useEffect } from "react";

function ProfilePage() {
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
      <ProfileTabs />
      <Gradient />
    </div>
  );
}

export default ProfilePage;
