const Header = () => {
  return (
    <header>
      <div className="books unread"></div>
      <div className="books reading"></div>
      <div className="books read"></div>
      <div className="books abandoned"></div>
      <div className="home-presentation">
        <h2>Welcome to Book Hub!</h2>
        <p>
          Discover, track, and share your reading journey with Book Hub. Whether
          you're an avid reader or just starting out, Book Hub is your ultimate
          companion for all things books. Track Your Reads: Keep a record of
          every book you read, rate them, and leave reviews. Discover New Books:
          Explore our extensive library and find your next favorite read. Join
          the Community: See what others are reading, share recommendations, and
          connect with fellow book lovers. Sign up today and start your reading
          adventure with Book Hub!
        </p>
      </div>
    </header>
  );
};

export default Header;
