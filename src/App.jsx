import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Gradient from "./components/Gradient";
import Main from "./components/Main";
function App() {
  return (
    <div className="container">
      <Nav />
      <Gradient />
      <Header />
      <Main />
      <Gradient />
    </div>
  );
}

export default App;
