import { createContext, useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import connectSocket from "../config/socket.io.config";
import { useDispatch, useSelector } from "react-redux";
import { setOnlineUsers } from "../redux/chat/chatSlice";

const SocketContext = createContext({});

export const SocketProvider = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { onlineUsers } = useSelector(state => state.chat) 
  const [socket, setSocket] = useState(
    connectSocket(localStorage.getItem("authUser_Id"))
  );

  const disconnectSocket = () => {
    socket.disconnect();
    localStorage.removeItem("authUser_Id");
  };

  useEffect(() => {
    socket.on("new-connection", (authUserId) => {
        enqueueSnackbar("Connected: " + authUserId, { variant: "success" });
    });

    socket.on("new-disconnection", (authUserId) => {
        enqueueSnackbar("Disconnected: " + authUserId, { variant: "warning" });
    });

    socket.on("list-of-online-users", (users) => {
        dispatch(setOnlineUsers(users));
        console.log("Online-users", users);
    });

    console.log("Online users", onlineUsers);
    // const offConnection = () => {
    //     socket.off("new-connection");
    //     socket.off("new-disconnection");
    //     socket.off("list-of-online-users");
    // }

    // return offConnection();
  }, [socket, dispatch, enqueueSnackbar, onlineUsers]);

  return (
    <SocketContext.Provider value={{ socket, setSocket, disconnectSocket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
