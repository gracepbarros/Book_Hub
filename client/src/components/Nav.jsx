import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className="left-icons">
        <Link to="/"><span className="material-symbols-outlined red">favorite</span></Link>
        <Link to="/"><span className="material-symbols-outlined">search</span></Link>
      </div>
      <Link to="/"><h1>Book Hub</h1></Link>
      <div className="right-icons">
        <Link to="/chat"><span className="material-symbols-outlined">chat_bubble</span></Link>
        <Link to="/profile"><span className="material-symbols-outlined">account_circle</span></Link>
      </div>
    </nav>
  );
};

export default Nav;
