<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;
import GoogleAuthLogin from "./GoogleAuthLogin";
import GoogleAuthLogout from "./GoogleAuthLogout";
import { useAuth } from "../AuthContext";

const Login = () => {
  const { user } = useAuth();

  return (
    <div className="flex h-[22rem] bghome">
    <div className="homepresentation absolute top-[35%] left-[50%] w-[80%] mx-auto translate-center text-center">
      <h2 className="mt-12 mb-9 text-3xl mx-auto font-bold irishgrover textbrown bgturquoise">
      Sign Up for Book Hub!
      </h2>
      <div className="mx-auto bgbrown textbeige borderbeige p-4">
        <p>
          Discover, track, and share your reading journey with Book Hub.
          Whether you're an avid reader or just starting out, 
          Book Hub is your companion for all things books. 
        </p>
        <div className="text-left py-2">
          <p> 
            <em className="font-bold textorange">Track Your Reads:</em> Keep a record of every book among the shelf categories unread, reading, read, and abbandoned. 
            <em className="font-bold textorange"> Sign in to access!</em>
          </p>
          <p>
          <em className="font-bold textorange">Discover New Books:</em> Explore our library and find your next favorite read. 
          </p>
          <p>
          <em className="font-bold textorange">Join the Community:</em> Talk with others, share recommendations, and connect with fellow book lovers through our general chat!
          <em className="font-bold textorange"> Sign in to access!</em>
          </p>
        </div>
        {user ? <GoogleAuthLogout /> : <GoogleAuthLogin />}
      </div>
    </div>
  </div>
  );
};

export default Login;
