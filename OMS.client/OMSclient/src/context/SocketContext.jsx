/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { socket_connect_production_url } from "../utils/SD";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

const SocketContext = createContext({});

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { authUser } = useSelector(state => state.authUser);

  const disconnectSocket = () => {
    if (socket && socket.connected)
      socket.disconnect();
    setSocket(null);
  };

  const connectSocket = (Id) => {
    const newSocket = io(socket_connect_production_url, { query: { userId: Id } });
    newSocket.connect();

    console.log("New-socket", newSocket);
    setSocket(newSocket);
  }

  useEffect(() => {
    if (socket) return;

    return connectSocket(authUser?.email);
  }, []);

  console.log("Socket", socket);
  return (
    <SocketContext.Provider value={{ socket, setSocket, connectSocket, disconnectSocket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
