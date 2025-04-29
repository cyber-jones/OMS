import React, { useState } from 'react'
import Header from './header'
import SideBar from './SideBar'
import { useSnackbar } from 'notistack';
import useSocket from '../hooks/useSocket';


const DashBoardComponents = ({ children }) => {
  const [sideNav, setSideNav] = useState(true);
  const { socket } = useSocket();
  const { enqueueSnackbar } = useSnackbar(); 

  if (socket) {
    console.log(socket);

    socket.on("new-connection", authUserId => {
      enqueueSnackbar( "Connected: " + authUserId, { variant: "success" });
    });

    socket.on("new-disconnection", authUserId => {
      enqueueSnackbar( "Disconnected: " + authUserId, { variant: "warning" });
    });
  }
  
  // useState(() => {
  //   socket.on("new-connection", authUserId => {
  //     enqueueSnackbar( "Connected: " + authUserId, { variant: "success" });
  //   });

  //   return () => socket.off("new-connection");
  // }, [socket]);

  return (
    <div className='bg-white w-full h-screen font-mono'>
      <Header sideNav={sideNav} setSideNav={setSideNav}/>
      <div className='flex h-11/12 w-full'>
        <SideBar sideNav={sideNav}/>
        <div className={`md:w-[90%] w-full h-full flex justify-center items-center`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashBoardComponents