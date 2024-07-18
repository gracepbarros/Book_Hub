import { Link } from "react-router-dom";

const LoginNav = () => {
  return (
    <nav>
      <Link to="/">
        <h1>Book Hub</h1>
      </Link>
      <button className="signUpBtn">Sign Up</button>
    </nav>
  );
};

export default LoginNav;
