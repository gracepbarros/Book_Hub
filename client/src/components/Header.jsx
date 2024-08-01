const Header = () => {
  return (
    <div className="flex h-[22rem]">
      <div className="homepresentation absolute top-[35%] left-[50%] w-[80%] mx-auto translate-center text-center">
        <h2 className="mt-12 mb-9 text-3xl mx-auto font-bold irishgrover textbrown bgturquoise">
          Welcome to Book Hub!
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
            </p>
            <p>
            <em className="font-bold textorange">Discover New Books:</em> Explore our library and find your next favorite read. 
            </p>
            <p>
            <em className="font-bold textorange">Join the Community:</em> Talk with others, share recommendations, and connect with fellow book lovers through our general chat!
            </p>
          </div>
          <p className="font-bold">
            Sign up today and start your reading adventure with Book Hub!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
