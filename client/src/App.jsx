import React from "react";
import Home from "./pages/Home.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import BooksPage from "./pages/BooksPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { GoogleOAuthProvider } from '@react-oauth/google';
import PrivateRoute from "./components/PrivateRoute"; // Import the PrivateRoute component

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <AuthProvider>

      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* Public route */}
          <Route path="/" element={<Home />} />
          {/* Protected routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/books" element={<BooksPage />} />
          </Route>
        </Routes>
      </Router>

    </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
