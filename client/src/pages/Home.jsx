import Nav from "../components/Nav";
import Header from "../components/Header";
import Gradient from "../components/Gradient";
import BookList from "../components/BookList";

function Home() {
  return (
    <div>
      <Nav />
      <Gradient />
      <div className="bghome">
        <Header />
        <BookList />
      </div>
      <Gradient />
    </div>
  );
}

export default Home;
