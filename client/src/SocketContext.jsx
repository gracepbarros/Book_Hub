import React, { createContext, useState, useContext, useEffect } from "react";
import io from "socket.io-client";
import { useAuth } from "./AuthContext";

const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const s = io.connect("http://localhost:3000", { query: user.googleId });
      setSocket(s);
      return () => {
        s.disconnect();
      };
    }
  }, [user]);

  // console.log(socket); -> the problem is here
  // when u reload the page, as there's no caching implemented, it resets the socket to null
  // @Piero, i think we can use the same principle u have used for the oauth, later on, if there is time, we can use redis, in the same way we did in our assignment
  // thank u

  const disconnectSocket = () => {
    if (socket) {
      socket.disconnect();
    }
  };

  return (
    <SocketContext.Provider value={{ socket, disconnectSocket }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
