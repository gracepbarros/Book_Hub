// import "../styles/Books.css";
// import "../styles/Main.css";
import Nav from "../components/Nav";
import Gradient from "../components/Gradient";
import Books from "../components/Books";
import Main from "../components/Main";

function BooksPage() {
  return (
    <div>
      <Nav />
      <Gradient />
      <Books />
      <Main />
      <Gradient />
    </div>
  );
}

export default BooksPage;
