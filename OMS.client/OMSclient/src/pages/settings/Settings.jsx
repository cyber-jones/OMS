import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { oms_url } from "../../utils/SD";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authUserSlice";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate(oms_url.auth);
  };

  return (
    <div className="w-[95%] h-11/12 flex justify-center items-center">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 font-sans md:overflow-auto overflow-y-scroll place-content-start md:place-content-center  place-items-center gap-8 md:gap-12">
        <Link
          to={oms_url.registerDoctor}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-pink-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i class="bi bi-person-plus text-4xl text-pink-400"></i>
          <p className="text-md">New Doctor</p>
        </Link>
        <Link
          to={oms_url.registerStaff}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-purple-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i class="bi bi-person-plus-fill text-4xl text-purple-400"></i>
          <p className="text-md">New Staff</p>
        </Link>
        <Link
          to={oms_url.registerDrug}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-blue-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i class="bi bi-bandaid-fill text-4xl text-blue-400"></i>
          <p className="text-md">New Drug</p>
        </Link>
        <Link
          to={oms_url.registerSpecialty}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-green-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i class="bi bi-person-video3 text-4xl text-green-400"></i>
          <p className="text-md">New Specialty</p>
        </Link>
        <Link
          to={oms_url.doctorList}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-orange-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i class="bi bi-person-lines-fill text-4xl text-orange-400"></i>
          <p className="text-md">Doctor List</p>
        </Link>
        <Link
          to={oms_url.staffList}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-yellow-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i class="bi bi-person-lines-fill text-4xl text-yellow-400"></i>
          <p className="text-md">Staff List</p>
        </Link>
        <Link
          to={oms_url.patientList}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-stone-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i class="bi bi-people-fill text-4xl text-stone-400"></i>
          <p className="text-md">Patient List</p>
        </Link>
        <Link
          to={oms_url.drugList}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-cyan-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i class="bi bi-bandaid-fill text-4xl text-cyan-400"></i>
          <p className="text-md">Drug List</p>
        </Link>
        <Link
          to={oms_url.specialtyList}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-stone-800 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i class="bi bi-person-video3 text-4xl text-stone-800"></i>
          <p className="text-md">Specialty List</p>
        </Link>
        <div
          onClick={handleLogout}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-red-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i class="bi bi-box-arrow-in-right text-4xl text-red-400"></i>
          <p className="text-md">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
