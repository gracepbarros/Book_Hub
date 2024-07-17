<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;
import profileImage from "../images/avatar.png";

const Tabs = () => {
  return (
    <header>
      <div className="books abandoned">
        <h3 className="beige">My picture</h3>
        <div className="row turquoise">
          <span class="material-symbols-outlined">delete</span>
          <p>Delete picture</p>
        </div>
        <div className="row turquoise">
          <span class="material-symbols-outlined">upload</span>
          <p>Upload Picture</p>
        </div>
        <img src={profileImage} width={200} />
      </div>
      <div className="books unread">
        <h3 className="turquoise">My info</h3>
        <div className="row">
          <span class="material-symbols-outlined">alternate_email</span>
          <p>Your_username</p>
        </div>
        <div className="row">
          <span class="material-symbols-outlined">edit_square</span>
          <p>Edit Username</p>
        </div>
        <div className="row">
          <span class="material-symbols-outlined">key</span>
          <p>Edit Password</p>
        </div>
      </div>
      <div className="books reading orange">
        <h3 className="row">
          <span class="material-symbols-outlined">favorite</span> Books
        </h3>
      </div>
      <div className="books read brown">
        <h3 className="row">
          <span class="material-symbols-outlined">error</span> Alerts
        </h3>
      </div>
    </header>
  );
};

export default Tabs;
