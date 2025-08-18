import { io } from 'socket.io-client';
import React, { createContext, useContext, useEffect, useRef } from "react";

const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const socketRef = useRef(null);

  if (!socketRef.current) {
    socketRef.current = io("http://localhost:5000", {
      transports: ["websocket"],
    });
  }

  useEffect(() => {
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socketRef.current}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  return useContext(SocketContext);
};
