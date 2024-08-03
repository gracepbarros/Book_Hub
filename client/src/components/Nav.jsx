import { Link } from "react-router-dom";
import GoogleAuthLogin from "./GoogleAuthLogin";
import GoogleAuthLogout from "./GoogleAuthLogout";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { useAuth } from "../AuthContext";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const Nav = () => {
  const { user } = useAuth(); // Use the useAuth hook to get the user state

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <div className="flex justify-between items-end h-12 my-4">
      <div className="">
        <Link to="/books">
          <span className="material-symbols-outlined px-2">
            import_contacts
          </span>
        </Link>
        <Link to="/">
          <span className="material-symbols-outlined px-1">search</span>
        </Link>
      </div>
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex items-center">
        <Link to="/">
          <h1 className="irishgrover text-5xl font-bolder mx-0 mt-2 mb-0 textstroke">
            Book Hub
          </h1>
        </Link>
      </div>
      <div className="flex items-end mr-4">
        <Link to="/chat">
          <span className="material-symbols-outlined px-1">chat_bubble</span>
        </Link>
        {user ? <GoogleAuthLogout /> : <GoogleAuthLogin />}
      </div>
    </div>
  );
};

export default Nav;
