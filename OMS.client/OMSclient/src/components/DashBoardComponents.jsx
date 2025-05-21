/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "./header";
import SideBar from "./SideBar";
import useSocket from "../hooks/useSocket";
import { useSnackbar } from "notistack";

const DashBoardComponents = ({ children }) => {
  const [sideNav, setSideNav] = useState(true);
  const { socket } = useSocket();
  const { enqueueSnackbar } = useSnackbar();
  
  useEffect(() => {
    if (!socket) return;

    socket.on("new-connection", (userId) => {
      enqueueSnackbar("Connected: " + userId, { variant: "success" });
    });

    socket.on("new-disconnection", (userId) => {
      enqueueSnackbar("Disconnected: " + userId, { variant: "warning" });
    });
  }, []);

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
