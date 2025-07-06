import { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import useSocket from "../hooks/useSocket";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";


const DashBoardComponents = ({ children }) => {
  const [sideNav, setSideNav] = useState(true);
  const { authUser } = useSelector((state) => state.authUser);
  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket.on("new-connection", (userId) => {
      toast.success("Online: " + userId);
    });

    socket.on("new-disconnection", (userId) => {
      toast.error("Offline: " + userId);
    });

    socket.on("new-message", (message) => {
      {
        message.reciever_Id == authUser.email && message?.text
          ? toast.success(message.text)
          : toast.success("New message: image");
      }
    });

    return () => {
      socket.off("new-connection");
      socket.off("new-disconnection");
      socket.off("new-message");
    };
  }, [socket, authUser]);

  return (
    <div className="bg-white w-full h-screen font-mono">
      <Header sideNav={sideNav} setSideNav={setSideNav} />
      <div className="flex h-11/12 w-full">
        <SideBar sideNav={sideNav} />
        <div
          className={`md:w-[90%] w-full h-full flex justify-center items-center`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashBoardComponents;
