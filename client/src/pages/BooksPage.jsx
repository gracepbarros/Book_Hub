import Nav from "../components/Nav";
import Gradient from "../components/Gradient";
import BooksGradient from "../components/BooksGradient";
import Footer from "../components/Footer";

function BooksPage() {
  return (
    <div>
      <Nav />
      <Gradient />
      <BooksGradient color="wine" category="Favorite" />
      <BooksGradient color="beige" category="Unread" />
      <BooksGradient color="turquoise" category="Reading" />
      <BooksGradient color="orange" category="Read" />
      <BooksGradient color="brown" category="Abbandoned" />
      <Gradient />
      <Footer />
    </div>
  );
}

export default BooksPage;
