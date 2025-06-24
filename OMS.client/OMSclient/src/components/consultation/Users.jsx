/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useDoctor from "../../hooks/useDoctor";
import Circle from "../loading/Circle";
import {
  setLoading,
  setMessages,
  setOnlineUsers,
  setSelectedUser,
} from "../../redux/chat/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import usePatient from "../../hooks/usePatient";
import useSocket from "../../hooks/useSocket";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";
import { oms_server_production_url } from "../../utils/SD";
import { useSnackbar } from "notistack";
import DemoUsers from "./DemoUsers";

const Users = () => {
  const { doctors, loading } = useDoctor();
  const { authUser } = useSelector((state) => state.authUser);
  const { patients, loading: loadingPatient } = usePatient();
  const [userList, setUserList] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { selectedUser, onlineUsers } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const { socket } = useSocket();
  const axiosAuth = useAxiosAuthorization(
    oms_server_production_url.appointment
  );
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    if (!socket) return;

    socket.on("online-users", (users) => {
      console.log("Online-socket-users", users);
      dispatch(setOnlineUsers(users));
    });

    return () => socket.off("online-users");
  }, [socket, onlineUsers, setOnlineUsers]);

  const handleSelectUser = async (user) => {
    if (loading) return;

    dispatch(setLoading(true));
    try {
      const res = await axiosAuth.get(
        "/message/user/" + authUser.email + "/" + user.email
      );

      console.log("res", res);
      if (res?.status !== 200 && res) {
        enqueueSnackbar(res?.data?.message || res?.statusText, {
          variant: "error",
        });
        return;
      }

      dispatch(setMessages(res.data.messages));
      dispatch(setSelectedUser(user));
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || err.message, {
        variant: "error",
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handlePopulateUserList = () => {
    if (!loading && doctors && !loadingPatient && patients) {
      let newUserArray = [...doctors, ...patients];
      newUserArray = newUserArray.filter(
        (user) => user?.email !== authUser?.email
      );
      setUserList(newUserArray);
      console.log("user-list", userList);
    }
  };

  const handleOnlineUsers = () => {
    let getOnlineUsers = [];
    userList.forEach((user) => {
      let Id = user.email;

      if (onlineUsers.includes(Id)) getOnlineUsers.push(user);
    });
    setUserList(getOnlineUsers);
  };

  useEffect(() => {
    handlePopulateUserList();
  }, [doctors, patients, onlineUsers]);

  useEffect(() => {
    dispatch(setSelectedUser(null));
    const handleCheckWidth = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleCheckWidth);

    return () => window.removeEventListener("resize", handleCheckWidth);
  }, []);

  return (
    <div
      className={`${
        selectedUser && screenWidth < 768 ? "hidden" : "block"
      } md:w-[30%] w-full h-full bg-gray-200 overflow-y-scroll rounded-tl-2xl`}
    >
      <p className="text-2xl md:text-3xl font-extrabold ml-8 my-5">Chats</p>
      <div className="w-full text-sm px-4 flex justify-end gap-4 py-3">
        <button
          id="allUsers"
          onClick={handlePopulateUserList}
          className="px-2 py-0.5 border border-blue-900 rounded-md cursor-pointer"
        >
          All
        </button>
        <button
          id="onlineUsers"
          onClick={handleOnlineUsers}
          className="px-2 py-0.5 border border-blue-900 rounded-md cursor-pointer"
        >
          Online
        </button>
      </div>
      {!loading && !loadingPatient ? (
        userList.length > 0 ? (
          userList.map((user, index) => (
            <div
              key={index}
              onClick={() => handleSelectUser(user)}
              className="font-sans w-full gap-6 h-22 flex justify-start items-center cursor-pointer hover:bg-gray-300 transition-all ease-out duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-stone-700 ml-8">
                <img
                  src={
                    user?.profile_Url
                      ? user?.profile_Url
                      : user?.sex == "Male"
                      ? "/images/profile-masculine.jpeg"
                      : "/images/profile-femine.jpeg"
                  }
                  className="rounded-full"
                />
                {onlineUsers?.includes(user?.email) ? (
                  <div className="relative w-4 h-4 bg-green-500 rounded-full -top-4 left-7"></div>
                ) : (
                  <div className="relative w-4 h-4 bg-red-500 rounded-full -top-4 left-7"></div>
                )}
              </div>
              <div className="text-sm border-b-[0.2px] border-gray-400 py-2 w-[65%]">
                <strong>
                  {user?.mln ? "Dr" : null} {user?.first_Name} {user?.last_Name}
                </strong>
                <p>
                  {onlineUsers?.includes(user?.email) ? "online" : "Offline"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="font-sans w-full gap-6 h-22 flex text-center justify-center items-center cursor-pointer hover:bg-gray-300 transition-all ease-out duration-500">
            <strong className="text-sm border-b-[0.2px] text-red-800 text-center border-gray-400 py-2 w-[65%]">
              No user found!
            </strong>
          </div>
        )
      ) : (
        <DemoUsers />
      )}
    </div>
  );
};

export default Users;
