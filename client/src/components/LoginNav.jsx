import { Link } from "react-router-dom";

const LoginNav = () => {
  return (
    <div className="my-4">
      <Link to="/">
        <h1 className="irishgrover text-6xl font-bolder m-0 textstroke mx-auto w-max">
          Book Hub
        </h1>
      </Link>
      <button className="bgorange px-2 py-1 absolute right-6 top-8 rounded-lg hover:bg-orange-600">
        Sign Up
      </button>
    </div>
  );
};

export default LoginNav;
