import React from "react";
import useDoctor from "../hooks/useDoctor";
import Circle from "../components/loading/Circle";

const Consultation = () => {
  const { doctors, loading } = useDoctor();

  return (
    <div className="w-full md:w-11/12 h-full md:h-11/12 flex md:shadow-2xl">
      <div className="md:w-[30%] w-full h-full bg-gray-200 overflow-y-scroll rounded-tl-2xl">
        <p className="text-2xl md:text-3xl font-extrabold ml-8 my-5">Chats</p>
        {!loading && doctors ? (
          doctors.map((doctor, index) => (
            <div
              key={index}
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
      <div className="w-[75%] hidden md:block h-full bg-gray-200 rounded-br-2xl"></div>
    </div>
  );
};

export default Consultation;
