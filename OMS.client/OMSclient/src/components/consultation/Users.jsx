/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useDoctor from "../../hooks/useDoctor";
import Circle from "../loading/Circle";
import { setOnlineUsers, setSelectedUser } from "../../redux/chat/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import usePatient from "../../hooks/usePatient";
import useSocket from "../../hooks/useSocket";









const Users = () => {
  const { doctors, loading } = useDoctor();
  const { authUser } = useSelector(state => state.authUser);
  const { patients, loading: loadingPatient } = usePatient();
  const [userList, setUserList] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { selectedUser, onlineUsers } = useSelector(
    (state) => state.chat
  );
  const dispatch = useDispatch();
  const { socket } = useSocket();



  useEffect(() => {
    if (!socket) return;

    socket.on("online-users", (users) => {
      console.log("Online-socket-users", users);
      dispatch(setOnlineUsers(users));
    });

    return () => socket.off("online-users");
  }, []);


  const handleSelectUser = (user) => {
    dispatch(setSelectedUser(user));
  };

  const handlePopulateUserList = () => {
    let newUserArray = [...doctors, ...patients];
    newUserArray = newUserArray.filter(user => user?.email !== authUser?.email);
    setUserList(newUserArray);
  }

  const handleOnlineUsers = () => {
    let getOnlineUsers = [];
    userList.forEach(user => {
      let Id = authUser?.user_Profile_Id;;

      if (onlineUsers.includes(Id))
        getOnlineUsers.push(user);
    });

    setUserList(getOnlineUsers);
  }
  
  useEffect(() => {
    handlePopulateUserList();

  }, [doctors, patients, onlineUsers]);



  useEffect(() => {
    const handleCheckWidth = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleCheckWidth);

    return () => window.removeEventListener("resize", handleCheckWidth);
  }, []);


  
  // const btnAll = document.getElementById("allUsers");
  // const btnOnline = document.getElementById("onlineUsers");

  // btnAll.addEventListener("click", () => {
  //   btnAll.classList.add("bg-blue-900 text-white");
  //   btnAll.classList.remove("border-blue-900");
  // });




  return (
    <div
      className={`${
        selectedUser && screenWidth < 768 ? "hidden" : "block"
      } md:w-[30%] w-full h-full bg-gray-200 overflow-y-scroll rounded-tl-2xl`}
    >
      <p className="text-2xl md:text-3xl font-extrabold ml-8 my-5">Chats</p>
      <div className="w-full text-sm px-4 flex justify-end gap-4 py-3">
        <button id="allUsers" onClick={handlePopulateUserList} className="px-2 py-0.5 border border-blue-900 rounded-md cursor-pointer">
          All
        </button>
        <button id="onlineUsers" onClick={handleOnlineUsers} className="px-2 py-0.5 border border-blue-900 rounded-md cursor-pointer">
          Online
        </button>
      </div>
      {!loading && !loadingPatient && userList ? (
        userList.map((user, index) => (
          <div
            key={index}
            onClick={() => handleSelectUser(user)}
            className="font-sans w-full gap-6 h-22 flex justify-start items-center cursor-pointer hover:bg-gray-300 transition-all ease-out duration-500"
          >
            <div className="w-12 h-12 rounded-full bg-stone-700 ml-8">
              { onlineUsers?.includes(user?.patient_Id || user?.doctor_Id || user?.staff_Id) ? <div className="relative w-4 h-4 bg-green-500 rounded-full left-7 top-9"></div> : <div className="relative w-4 h-4 bg-red-500 rounded-full left-7 top-9"></div> }
            </div>
            <div className="text-sm border-b-[0.2px] border-gray-400 py-2 w-[65%]">
              <strong>
                {user?.doctor_Id ? "Dr" : null} {user?.first_Name} {user?.last_Name}
              </strong>
              <p>{ onlineUsers?.includes(user?.patient_Id || user?.doctor_Id || user?.staff_Id) ? "online" : "Offline" }</p>
            </div>
          </div>
        ))
      ) : (
        <Circle />
      )}
    </div>
  );
};

export default Users;
