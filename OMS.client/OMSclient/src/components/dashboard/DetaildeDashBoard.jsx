import { useSelector } from "react-redux";
import { oms_url, Roles } from "../../utils/SD";
import { Link } from "react-router-dom";
import usePatient from "../../hooks/usePatient";
import useDoctor from "../../hooks/useDoctor";
import useStaff from "../../hooks/useStaff";
import useAppointments from "../../hooks/useAppointment ";
import usePrescription from "../../hooks/usePrescription";
import useSpecialty from "../../hooks/useSpecialty";
import useMessage from "../../hooks/useMessages";
import { useAuth } from "../../utils/isAuthorized";

const DetaildeDashBoard = () => {
  const { user } = useSelector((state) => state.user);
  const { patients } = usePatient();
  const { doctors } = useDoctor();
  const { staffs } = useStaff();
  const { appointments } = useAppointments();
  const { prescriptions } = usePrescription();
  const { specialties } = useSpecialty();
  const { messages } = useMessage();
  const isNotAdmin = useAuth([Roles.ADMIN]);
  const isNotDoctor = useAuth([Roles.DOCTOR]);
  const isNotPatient = useAuth([Roles.PATIENT]);

  return (
    <div className="w-full h-full flex flex-col px-1 font-sans">
      <div className="w-full flex flex-col justify-center items-center md:pl-8 pl-2">
        <h1 className="text-lg lg:text-3xl font-semibold uppercase">
          Welcome!
        </h1>
        <h3 className="text-sm font-thin text-red-400">Health Data Tracker</h3>
      </div>
      <div className="w-full flex flex-col h-11/12 text-[12px] md:text-lg gap-2 p-4">
        <div className="h-4/12 w-full flex justify-center items-center">
          <div className="w-[95%] lg:w-10/12 h-11/12 shadow-lg flex rounded-b-2xl">
            <div className="w-5/12 h-full flex justify-center items-center p-2">
              <Link
                to={oms_url.profile}
                className="h-30 lg:h-11/12 rounded-full bg-black mr-3"
              >
                <img
                  src={
                    user?.profile_Url
                      ? user?.profile_Url
                      : user?.sex == "Male"
                      ? "/images/profile-masculine.jpeg"
                      : "/images/profile-femine.jpeg"
                  }
                  className="rounded-full h-full"
                />
              </Link>
            </div>
            <div className="w-7/12 flex flex-col justify-center">
              <h1 className="font-semibold text-lg lg:text-3xl text-blue-900">
                {user?.first_Name} {user?.last_Name} {user?.middle_Name}
              </h1>
              <p className="font-semibold">
                User:{" "}
                <span className="text-purple-600">
                  {user?.mln ? "Doctor" : user?.work_ID ? "Staff" : "Patient"}
                </span>
              </p>
              <i className="">
                Joined: {new Date(user?.createdAt).toDateString()}
              </i>
            </div>
          </div>
        </div>
        <div className="h-9/12 w-full grid grid-cols-2 md:grid-cols-4 text-[10px] md:text-sm gap-2 overflow-y-scroll">
          <div hidden={!isNotAdmin} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-pink-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Doctors</h2>
            <p className="font-bold text-pink-500 text-lg"><i className="bi bi-person"></i> {doctors?.length}</p>
          </div>
          <div hidden={!isNotAdmin} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-purple-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Staffs</h2>
            <p className="font-bold text-purple-500 text-lg"><i className="bi bi-person"></i> {staffs?.length}</p>
          </div>
          <div hidden={!isNotAdmin} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-orange-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Patients</h2>
            <p className="font-bold text-orange-500 text-lg"><i className="bi bi-person"></i> {patients?.length}</p>
          </div>
          <div hidden={!isNotAdmin} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-violet-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Appointments</h2>
            <p className="font-bold text-violet-500 text-lg"><i className="bi bi-building-check"></i> {appointments?.length}</p>
          </div>
          <div hidden={!isNotAdmin} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-blue-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Specialties</h2>
            <p className="font-bold text-blue-500 text-lg"><i className="bi bi-person-video3"></i> {specialties?.length}</p>
          </div>
          <div hidden={!isNotAdmin} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-yellow-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Prescriptions</h2>
            <p className="font-bold text-yellow-500 text-lg"><i className="bi bi-prescription2"></i> {prescriptions?.length}</p>
          </div>
          <div hidden={!isNotAdmin} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-green-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Messages</h2>
            <p className="font-bold text-green-500 text-lg"><i className="bi bi-wechat"></i> {messages?.length}</p>
          </div>


          <div hidden={!isNotPatient} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-red-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Appointments: <span className="text-red-500">Disapproved</span></h2>
            <p className="font-bold text-red-700 text-lg"><i className="bi bi-building-check"></i> 2</p>
          </div>
          <div hidden={!isNotPatient} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-green-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Appointments: <span className="text-green-500">Approved</span></h2>
            <p className="font-bold text-green-700 text-lg"><i className="bi bi-building-check"></i> 4</p>
          </div>
          <div hidden={!isNotPatient} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-yellow-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Appointments: <span className="text-yellow-500">Pending</span></h2>
            <p className="font-bold text-yellow-700 text-lg"><i className="bi bi-building-check"></i> 3</p>
          </div>
          <div hidden={!isNotPatient} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-violet-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Messages</h2>
            <p className="font-bold text-violet-700 text-lg"><i className="bi bi-wechat"></i> 45</p>
          </div>
          <div hidden={!isNotPatient} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-yellow-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Prescriptions: <span className="text-green-500">Approved</span></h2>
            <p className="font-bold text-yellow-700 text-lg"><i className="bi bi-prescription2"></i> 3</p>
          </div>


          <div hidden={!isNotDoctor} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-red-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Appointments: <span className="text-red-500">Disapproved</span></h2>
            <p className="font-bold text-red-700 text-lg"><i className="bi bi-building-check"></i> 2</p>
          </div>
          <div hidden={!isNotDoctor} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-green-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Appointments: <span className="text-green-500">Approved</span></h2>
            <p className="font-bold text-green-700 text-lg"><i className="bi bi-building-check"></i> 4</p>
          </div>
          <div hidden={!isNotDoctor} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-yellow-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Appointments: <span className="text-yellow-500">Pending</span></h2>
            <p className="font-bold text-yellow-700 text-lg"><i className="bi bi-building-check"></i> 3</p>
          </div>
          <div hidden={!isNotDoctor} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-violet-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Messages</h2>
            <p className="font-bold text-violet-700 text-lg"><i className="bi bi-wechat"></i> 45</p>
          </div>
          <div hidden={!isNotDoctor} className="bg-gray-100 text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-yellow-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Prescriptions: <span className="text-green-500">Approved</span></h2>
            <p className="font-bold text-yellow-700 text-lg"><i className="bi bi-prescription2"></i> 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetaildeDashBoard;
