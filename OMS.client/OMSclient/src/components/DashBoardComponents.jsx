import { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import useSocket from "../hooks/useSocket";
import toast from "react-hot-toast";

const DashBoardComponents = ({ children }) => {
  const [sideNav, setSideNav] = useState(true);
  const { socket } = useSocket();
  
  useEffect(() => {
    if (!socket) return;

    socket.on("new-connection", (userId) => {
      toast.success("Online: " + userId);
    });

    socket.on("new-disconnection", (userId) => {
      toast("Offline: " + userId);
    });

    return () => {
      socket.off("new-connection");
      socket.off("new-disconnection");
    }
  }, [socket]);

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
