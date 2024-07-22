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

const ProfileTabs = () => {
  return (
    <header className="profile-header">
      <div className="profile-books profile-abandoned">
        <h3 className="profile-h3 profile-beige">My picture</h3>
        <div className="profile-row profile-turquoise">
          <span class="material-symbols-outlined">delete</span>
          <p>Delete picture</p>
        </div>
        <div className="profile-row profile-turquoise">
          <span class="material-symbols-outlined">upload</span>
          <p>Upload Picture</p>
        </div>
        <img src={profileImage} width={200} />
      </div>
      <div className="profile-books profile-unread">
        <h3 className="profile-h3 profile-turquoise">My info</h3>
        <div className="profile-row">
          <span class="material-symbols-outlined">alternate_email</span>
          <p>Your_username</p>
        </div>
        <div className="profile-row">
          <span class="material-symbols-outlined">edit_square</span>
          <p>Edit Username</p>
        </div>
        <div className="profile-row">
          <span class="material-symbols-outlined">key</span>
          <p>Edit Password</p>
        </div>
      </div>
      <div className="profile-books profile-reading profile-orange">
        <h3 className="profile-h3 profile-row">
          <span class="material-symbols-outlined">favorite</span> Books
        </h3>
      </div>
      <div className="profile-books profile-read profile-brown">
        <h3 className="profile-h3 profile-row">
          <span class="material-symbols-outlined">error</span> Alerts
        </h3>
      </div>
    </header>
  );
};

export default ProfileTabs;
