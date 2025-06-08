import { Link, useNavigate } from "react-router-dom";
import { oms_url, Roles } from "../../utils/SD";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authUserSlice";
import { chatLogOut } from "../../redux/chat/chatSlice";
import useSocket from "../../hooks/useSocket";
import { userLogout } from "../../redux/user/userSlice";
import { useAuth } from "../../utils/isAuthorized";

const Settings = () => {
  const { disconnectSocket } = useSocket();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAdminAuth = useAuth([Roles.ADMIN]); 
  const isAuth = useAuth([Roles.ADMIN, Roles.DOCTOR, Roles.STAFF]); 

  const handleLogout = () => {
    disconnectSocket();
    dispatch(chatLogOut());
    dispatch(logOut());
    dispatch(userLogout(null));
    navigate(oms_url.auth);
  };

  return (
    <div className="w-[95%] h-11/12">
      <div className="w-full max-h-full grid grid-cols-1 md:grid-cols-3 font-sans overflow-y-scroll place-content-start md:place-content-center  place-items-center gap-8 md:gap-12">
        <Link
          to={oms_url.profile}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-red-700 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i className="bi bi-person text-4xl text-red-700"></i>
          <p className="text-md">View Profile</p>
        </Link>
        <Link
          hidden={!isAdminAuth}
          to={oms_url.registerDoctor}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-pink-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i className="bi bi-person-plus text-4xl text-pink-400"></i>
          <p className="text-md">New Doctor</p>
        </Link>
        <Link
          hidden={!isAdminAuth}
          to={oms_url.registerStaff}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-purple-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i className="bi bi-person-plus-fill text-4xl text-purple-400"></i>
          <p className="text-md">New Staff</p>
        </Link>
        <Link
          hidden={!isAdminAuth}
          to={oms_url.registerDrug}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-blue-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i className="bi bi-bandaid-fill text-4xl text-blue-400"></i>
          <p className="text-md">New Drug</p>
        </Link>
        <Link
          hidden={!isAdminAuth}
          to={oms_url.registerSpecialty}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-green-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i className="bi bi-person-video3 text-4xl text-green-400"></i>
          <p className="text-md">New Specialty</p>
        </Link>
        <Link
          hidden={!isAdminAuth}
          to={oms_url.doctorList}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-orange-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i className="bi bi-person-lines-fill text-4xl text-orange-400"></i>
          <p className="text-md">Doctors</p>
        </Link>
        <Link
          hidden={!isAdminAuth}
          to={oms_url.staffList}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-yellow-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i className="bi bi-person-lines-fill text-4xl text-yellow-400"></i>
          <p className="text-md">Staffs</p>
        </Link>
        <Link
          hidden={!isAuth}
          to={oms_url.patientList}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-stone-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i className="bi bi-people-fill text-4xl text-stone-400"></i>
          <p className="text-md">Patients</p>
        </Link>
        <Link
          hidden={!isAdminAuth}
          to={oms_url.drugList}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-cyan-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i className="bi bi-bandaid-fill text-4xl text-cyan-400"></i>
          <p className="text-md">Drugs</p>
        </Link>
        <Link
          hidden={!isAdminAuth}
          to={oms_url.specialtyList}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-stone-800 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i className="bi bi-person-video3 text-4xl text-stone-800"></i>
          <p className="text-md">Specialties</p>
        </Link>
        <Link
          to={oms_url.appointmentList}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-purple-800 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i className="bi bi-building-check text-4xl text-purple-800"></i>
          <p className="text-md">Appointments</p>
        </Link>
        <Link
          to={oms_url.prescriptions}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-green-900 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i className="bi bi-prescription2 text-4xl text-green-900"></i>
          <p className="text-md">Prescriptions</p>
        </Link>
        <Link
          hidden={!isAdminAuth}
          to={oms_url.logs}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-blue-900 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i className="bi bi-journal-plus text-4xl text-blue-900"></i>
          <p className="text-md">Logs</p>
        </Link>
        <div
          onClick={handleLogout}
          className="w-[80%] cursor-pointer hover:bg-gray-200 border-3 border-red-400 h-[100px] rounded-lg flex justify-center items-center gap-7"
        >
          <i className="bi bi-box-arrow-in-right text-4xl text-red-400"></i>
          <p className="text-md">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
