const Header = () => {
  return (
    <div className="flex h-[40rem]">
      <div className="bgbrown w-1/4"></div>
      <div className="bgbeige w-1/4"></div>
      <div className="bgturquoise w-1/4"></div>
      <div className="bgorange w-1/4"></div>
      <div className="absolute top-[35%] left-[50%] w-[80%] mx-auto translate-center text-center">
        <h2 className="mt-12 mb-12 text-2xl mx-auto">Welcome to Book Hub!</h2>
        <p className="homepresentation mx-auto">
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
    </div>
  );
};

export default Header;
