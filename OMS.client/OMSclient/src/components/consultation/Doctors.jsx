import React, { useEffect, useState } from "react";
import useDoctor from "../../hooks/useDoctor";
import Circle from "../loading/Circle";
import { setSelectedUser } from "../../redux/chat/chatSlice";
import { useDispatch, useSelector } from "react-redux";

const Doctors = () => {
  const { doctors, loading } = useDoctor();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { selectedUser } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  const handleSelectUser = (user) => {
    dispatch(setSelectedUser(user));
  };

  useEffect(() => {
    const handleCheckWidth = () => setScreenWidth(window.innerWidth)

    window.addEventListener("resize", handleCheckWidth);

    return () => window.removeEventListener("resize", handleCheckWidth);
  }, []);

  return (
    <div className={`${selectedUser && screenWidth < 768 ? "hidden" : "block"} md:w-[30%] w-full h-full bg-gray-200 overflow-y-scroll rounded-tl-2xl`}>
      <p className="text-2xl md:text-3xl font-extrabold ml-8 my-5">Chats</p>
      {!loading && doctors ? (
        doctors.map((doctor, index) => (
          <div
            key={index}
            onClick={() => handleSelectUser(doctor)}
            className="font-sans w-full gap-6 h-22 flex justify-start items-center cursor-pointer hover:bg-gray-300 transition-all ease-out duration-500"
          >
            <div className="w-12 h-12 rounded-full bg-stone-700 ml-8"></div>
            <div className="text-sm border-b-[0.2px] border-gray-400 py-2 w-[65%]">
              <strong>
                {doctor?.first_Name} {doctor?.last_Name}
              </strong>
              <p>online</p>
            </div>
          </div>
        ))
      ) : (
        <Circle />
      )}
    </div>
  );
};

export default Doctors;
