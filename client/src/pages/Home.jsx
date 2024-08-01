import Nav from "../components/Nav";
import Header from "../components/Header";
import Gradient from "../components/Gradient";
import BookList from "../components/BookList";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <Gradient />
      <Header />
      {/* <BookList /> */}
      <Gradient />
      <Footer />
    </div>
  );
}

export default Home;
