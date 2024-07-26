<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;

import profileImage from "../images/avatar.png";

const ProfileTabs = () => {
  return (
    <div header className="flex h-[40rem] profile">
      <div className="flex flex-col items-center w-1/4 bgbrown">
        <h3 className="pt-32 pb-16 irishgrover text-4xl textbeige">
          My picture
        </h3>
        <div className="flex items-center spacing-[3px] mb-4 text-md">
          <span class="material-symbols-outlined pr-1">delete</span>
          <p>Delete picture</p>
        </div>
        <div className="flex items-center spacing-[3px] mb-4 text-md">
          <span class="material-symbols-outlined pr-1">upload</span>
          <p>Upload Picture</p>
        </div>
        <img src={profileImage} width={200} />
      </div>
      <div className="flex flex-col items-center w-1/4 bgbeige text-md">
        <h3 className="pt-32 pb-16 irishgrover text-4xl textturquoise">
          My info
        </h3>
        <div className="flex items-center spacing-[3px] mb-4 text-md">
          <span class="material-symbols-outlined pr-1">alternate_email</span>
          <p>Your_username</p>
        </div>
        <div className="flex items-center spacing-[3px] mb-16 text-md">
          <span class="material-symbols-outlined pr-1">edit_square</span>
          <p>Edit Username</p>
        </div>
        <div className="flex items-center spacing-[3px] text-md">
          <span class="material-symbols-outlined pr-1">key</span>
          <p>Edit Password</p>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/4 bgturquoise">
        <h3 className="pt-32 pb-16 irishgrover text-4xl textorange">
          <span class="material-symbols-outlined">favorite</span> Books
        </h3>
      </div>
      <div className="flex flex-col items-center w-1/4 bgorange">
        <h3 className="pt-32 pb-16 irishgrover text-4xl textbrown">
          <span class="material-symbols-outlined">error</span> Alerts
        </h3>
      </div>
    </div>
  );
};

export default ProfileTabs;
