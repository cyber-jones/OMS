import { useSelector } from "react-redux";
import { oms_url } from "../../utils/SD";
import { Link } from "react-router-dom";

const DetaildeDashBoard = () => {
  const { user } = useSelector((state) => state.user);
  const appointments = [
    {
      id: 1,
      patient: "John Doe",
      date: "2025-06-26",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      patient: "Jane Smith",
      date: "2025-06-27",
      time: "2:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Michael Scott",
      date: "2025-06-28",
      time: "11:30 AM",
      status: "Cancelled",
    },
  ];

  const patients = [
    {
      id: 1,
      name: "John Doe",
      age: 34,
      condition: "Flu",
      lastVisit: "2025-06-20",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      condition: "Asthma",
      lastVisit: "2025-06-18",
    },
    {
      id: 3,
      name: "Michael Scott",
      age: 45,
      condition: "Diabetes",
      lastVisit: "2025-06-10",
    },
  ];

  const logs = [
    { time: "09:00 AM", activity: "Checked in patient John Doe" },
    { time: "10:15 AM", activity: "Updated prescription for Jane Smith" },
    { time: "12:00 PM", activity: "Logged out" },
  ];

  return (
    <div className="w-full h-full flex justify-center items-center flex-col px-1">
      <div className="w-full h-1/12 md:pl-8 pl-2">
        <h1 className="text-3xl font-semibold">DashBoard</h1>
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
                User:{" "}<span className="text-purple-600">
                {user?.mln ? "Doctor" : user?.work_ID ? "Staff" : "Patient"}</span>
              </p>
              <i className="">
                Joined: {new Date(user?.createdAt).toDateString()}
              </i>
            </div>
          </div>
        </div>
        <div className="h-8/12 w-full grid grid-cols-2 md:grid-cols-3 text-sm md:text-lg gap-2">
          <div className="bg-white text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-stone-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Patients</h2>
            <p className="font-bold">{patients.length}</p>
          </div>
          <div className="bg-white text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-sstone-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Staff</h2>
            <p className="font-bold">{appointments.length}</p>
          </div>
          <div className="bg-white text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-stone-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Doctors</h2>
            <p className="font-bold">{patients.length}</p>
          </div>
          <div className="bg-white text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-sstone-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Appointments</h2>
            <p className="font-bold">{appointments.length}</p>
          </div>
          <div className="bg-white text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-stone-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Activity Logs</h2>
            <p className="font-bold">{logs.length}</p>
          </div>
          <div className="bg-white text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-stone-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Messages</h2>
            <p className="font-bold">{patients.length}</p>
          </div>
          <div className="bg-white text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-sstone-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Specialties</h2>
            <p className="font-bold">{appointments.length}</p>
          </div>
          <div className="bg-white text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-stone-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Drugs</h2>
            <p className="font-bold">{logs.length}</p>
          </div>
          <div className="bg-white text-center h-16 md:h-26 w-full p-1 md:p-4 rounded-lg shadow hover:shadow-md transition border-l-stone-700 border-l-4">
            <h2 className="font-semibold mb-2 text-stone-500">Prescriptions</h2>
            <p className="font-bold">{logs.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetaildeDashBoard;
