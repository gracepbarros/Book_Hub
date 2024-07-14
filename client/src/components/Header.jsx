const Header = () => {
  return (
    <header>
      <div className="books unread"></div>
      <div className="books reading"></div>
      <div className="books read"></div>
      <div className="books abandoned"></div>
    </header>
  );
};

export default Header;
