<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;

const Login = () => {
  return (
    <header>
      <div className="column brown"></div>
      <div className="column beige"></div>
      <div className="column turquoise"></div>
      <div className="column orange"></div>
      <div className="loginBlocks">
        <div className="row">
          <span class="material-symbols-outlined">import_contacts</span>
          <input type="text" placeholder="Username" />
        </div>
        <div className="row">
          <span class="material-symbols-outlined">book_4</span>
          <input type="text" placeholder="Password" />
        </div>
        <div className="buttons">
          <button className="forgotBtn">Forgot Password</button>
          <button className="signInBtn">Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Login;
