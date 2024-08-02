import { googleLogout} from '@react-oauth/google';
import { useAuth } from "../AuthContext";

// const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const GoogleAuthLogout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    googleLogout();
    console.log("Logout successful!");
    logout();
  };

  return (
    <button
      onClick={handleLogout}
      // disabled={renderProps.disabled}
      className="mt-8 w-full bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600"
    >
      Logout
    </button>
  );
};

export default GoogleAuthLogout;
