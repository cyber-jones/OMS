import React from "react";
import Chat from "../components/consultation/Chat";
import Doctors from "../components/consultation/Doctors";

const Consultation = () => {

  return (
    <div className="w-full md:w-11/12 h-full md:h-11/12 flex md:shadow-2xl">
      <Doctors />
      <Chat />
    </div>
  );
};

export default Consultation;
