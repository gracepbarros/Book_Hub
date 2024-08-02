import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { useAuth } from "../AuthContext";

const GoogleAuthLogin = () => {
  const { login } = useAuth();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      console.log("Login Success! Code response: ", codeResponse);

      try {
        const userInfoResponse = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${codeResponse.access_token}`,
            },
          }
        );
        
        const userInfo = userInfoResponse.data;
        console.log("User info:", userInfo);

        // Send the token to your backend
        const response = await axios.post(
          "http://localhost:3000/api/google-login",
          { 
            googleId: userInfo.sub,
            tokenId: codeResponse.access_token 
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data.message);

        // Update the auth context
        login(userInfo);
      } catch (error) {
        console.error("Error during Google login:", error);
      }
    },
    onError: (error) => console.log('Login Failed: ', error)
  });

  return (
    <button
      onClick={() => handleGoogleLogin()}
      className="mt-8 w-full bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600"
    >
      Login
    </button>
  );
};

export default GoogleAuthLogin;
