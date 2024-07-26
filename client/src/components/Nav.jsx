import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between items-end h-12 my-4">
      <div className="">
        <Link to="/">
          <span className="material-symbols-outlined px-2 text-red-500">
            favorite
          </span>
        </Link>
        <Link to="/">
          <span className="material-symbols-outlined px-1">search</span>
        </Link>
      </div>
      <Link to="/">
        <h1 className="irishgrover text-6xl font-bolder m-0 textstroke">
          Book Hub
        </h1>
      </Link>
      <div className="">
        <Link to="/chat">
          <span className="material-symbols-outlined px-1">chat_bubble</span>
        </Link>
        <Link to="/profile">
          <span className="material-symbols-outlined px-2">account_circle</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
