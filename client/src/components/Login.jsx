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
    <header className="flex relative">
      <div className="w-1/4 h-[40rem] bgbrown"></div>
      <div className="w-1/4 h-[40rem] bgbeige"></div>
      <div className="w-1/4 h-[40rem] bgturquoise"></div>
      <div className="w-1/4 h-[40rem] bgorange"></div>
      <div className="absolute w-[20rem] h-[10rem] top-[35%] left-[50%] translate-center text-center">
        <h2 className="mt-0 mb-8 text-2xl mx-auto">Sign Up for Book Hub!</h2>
        <p>
          Welcome to Book Hub, the ultimate platform for tracking and
          discovering books! Join our community of book lovers and gain access
          to personalized book tracking, recommendations, and much more.
        </p>
        <button className="mt-8 w-full bgorange px-3 py-1 rounded-lg hover:bg-orange-600">
          Sign In with Google
        </button>
      </div>
    </header>
  );
};

export default Login;
