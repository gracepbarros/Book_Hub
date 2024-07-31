import { GoogleLogout } from "react-google-login";
import { useAuth } from "../AuthContext";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const GoogleAuthLogout = () => {
  const { logout } = useAuth();

  const onLogoutSuccess = () => {
    console.log("Logout successful!");
    logout();
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="mt-8 w-full bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600"
          >
            Logout
          </button>
        )}
      />
    </div>
  );
};

export default GoogleAuthLogout;
