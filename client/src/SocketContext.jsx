import React, { createContext, useState, useContext, useEffect } from "react";
import io from "socket.io-client";
import { useAuth } from "./AuthContext";

const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const {user} = useAuth();

    useEffect(() => {
        const s = io.connect("http://localhost:3000/", {query: user.googleId});
        setSocket(s);
        return () => {
            s.disconnect();
        };
    }, []);

    const disconnectSocket = () => {
        if(socket)
            socket.disconnect();
    }

    return (
        <SocketContext.Provider value={{ socket, disconnectSocket }}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => useContext(SocketContext);
