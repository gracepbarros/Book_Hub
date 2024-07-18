import "../styles/Login.css";
import LoginNav from "../components/LoginNav";
import Gradient from "../components/Gradient";
import Login from "../components/Login";

function LoginPage() {
  return (
    <div className="container">
      <LoginNav />
      <Gradient />
      <Login />
      <Gradient />
    </div>
  );
}

export default LoginPage;
