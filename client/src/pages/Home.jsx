import Nav from "../components/Nav";
import Header from "../components/Header";
import Gradient from "../components/Gradient";
import BookList from "../components/BookList";

function Home() {
  return (
    <div>
      <Nav />
      <Gradient />
      <Header />
      <BookList />
      <Gradient />
    </div>
  );
}

export default Home;
