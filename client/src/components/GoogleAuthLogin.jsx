import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { useAuth } from "../AuthContext";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const GoogleAuthLogin = () => {
  const { login } = useAuth();

  const onSuccess = async (res) => {
    console.log("Login Success! Current user: ", res.profileObj);

    const { profileObj, tokenId } = res;
    const googleId = profileObj.googleId;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/google-login",
        { googleId, tokenId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.message);

      // Update the auth context
      login(profileObj);
    } catch (error) {
      console.error("Error sending Google ID to backend:", error);
    }
  };

  const onFailure = (res) => {
    console.log("Login Failed! res: ", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={`single_host_origin`}
        isSignedIn={true}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="mt-8 w-full bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600"
          >
            Login
          </button>
        )}
      />
    </div>
  );
};

export default GoogleAuthLogin;
