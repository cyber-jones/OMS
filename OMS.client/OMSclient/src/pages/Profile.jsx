import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { oms_url } from "../utils/SD";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const { authUser } = useSelector((state) => state.authUser);

  return (
    <div className="text-sm md:text-[15px] w-[90%] flex flex-col bg-purple-300 justify-center p-4 items-center md:flex-row-reverse h-11/12 rounded-lg shadow-lg font-sans">
      <div className="w-full md:w-6/12 flex items-center justify-center md:h-full">
        <div>
          <img
            src={
              user?.profile_Url
                ? user?.profile_Url
                : user?.sex == "Male"
                ? "/images/profile-masculine.jpeg"
                : "/images/profile-femine.jpeg"
            }
            className="rounded-full shadow-2xl w-40 md:w-70"
            alt="profile"
          />
        </div>
      </div>
      <div className="w-full md:w-6/12 md:h-full">
        <p className="text-purple-500 text-2xl my-4 text-center md:text-left">
          {authUser?.accType}
        </p>
        <p>
          <b>First Name</b>: {user?.first_Name}
        </p>
        <p>
          <b>Last Name</b>: {user?.last_Name}
        </p>
        <p>
          <b>Other Name</b>: {user?.middle_Name}
        </p>
        <p>
          <b>Gender</b>: {user?.sex}
        </p>
        <p>
          <b>State</b>: {user?.state}
        </p>
        <p>
          <b>Relationship</b>: {user?.relationship}
        </p>
        <p>
          <b>Phone</b>: {user?.cell_Phone}
        </p>
        <p>
          <b>Date of birth</b>: {new Date(user?.dob).toDateString()}
        </p>
        <p>
          <b>National Identity Number</b>: {user?.nin}
        </p>
        <p>
          <b>Address</b>: {user?.address}
        </p>
        <p>
          <b>Registered</b>: {new Date(user?.created).toDateString()}
        </p>
        {authUser?.accType == "patient" ? (
          <>
            <p className="text-red-500 mt-3">
              <b>Emergency Contact</b>
            </p>
            <p>
              <b>Address</b>: {user?.eC_Address}
            </p>
            <p>
              <b>Phone</b>: {user?.eC_Cell_Phone}
            </p>
            <p>
              <b>Full Name</b>: {user?.eC_FullName}
            </p>
            <div className="mt-3 flex flex-col-reverse gap-2">
              <button className="bg-red-600 text-center text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-red-950 transition duration-500 ease-in">
                Deactivate account <i className="bi bi-lock"></i>
              </button>
              <Link
                to={oms_url.updatePatient + "/" + user?.patient_Id}
                className="bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-blue-950 transition duration-500 ease-in"
              >
                Update <i className="bi bi-cloud-check"></i>
              </Link>
            </div>
          </>
        ) : authUser?.accType == "doctor" ? (
          <>
            <p className="text-red-500 mt-3">
              <b>Medical Info</b>
            </p>
            <p>
              <b>Specialty</b>: {user?.specialty}
            </p>
            <p>
              <b>Sub specialty</b>: {user?.sub_Specialty}
            </p>
            <p>
              <b>Medical Licence Number</b>: {user?.mln}
            </p>
            <p>
              <b>OMS ID</b>: {user?.work_Id}
            </p>
            <div className="mt-3 flex flex-col-reverse gap-2">
              <button className="bg-red-600 text-center text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-red-950 transition duration-500 ease-in">
                Deactivate account <i className="bi bi-lock"></i>
              </button>
              <Link
                to={oms_url.updateDoctor + "/" + user?.doctor_Id}
                className="bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-blue-950 transition duration-500 ease-in"
              >
                Update <i className="bi bi-cloud-check"></i>
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
