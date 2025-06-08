import Circle from "../../../components/loading/Circle";
import useDoctor from "../../../hooks/useDoctor";
import { Link, useParams } from "react-router-dom";
import { oms_url, Roles } from "../../../utils/SD";
import { useAuth } from "../../../utils/isAuthorized";

const DoctorProfile = () => {
  const { id } = useParams();
  const { loading, doctors: doctor } = useDoctor(id);
  const isAdmin = useAuth([Roles.ADMIN]);
  if (loading) return <Circle />;

  return (
    <div className="text-sm md:text-[15px] w-[90%] flex flex-col bg-purple-200 justify-center p-4 items-center md:flex-row-reverse h-11/12 rounded-lg shadow-lg font-sans">
      <div className="w-full md:w-6/12 flex items-center justify-center md:h-full">
        <div>
          <img
            src={
              doctor?.profile_Url
                ? doctor?.profile_Url
                : doctor?.sex == "Male"
                ? "/images/profile-masculine.jpeg"
                : "/images/profile-femine.jpeg"
            }
            className="rounded-full shadow-2xl w-40 md:w-70"
            alt="profile"
          />
        </div>
      </div>
      <div className="w-full h-10/12 flex flex-col justify-center  md:w-6/12 md:h-full ">
        <p className="text-purple-600 text-2xl my-4 text-center md:text-left font-semibold">
          Doctor
        </p>
        <p>
          <b>First Name</b>: {doctor?.first_Name}
        </p>
        <p>
          <b>Last Name</b>: {doctor?.last_Name}
        </p>
        <p>
          <b>Other Name</b>: {doctor?.middle_Name}
        </p>
        <p>
          <b>Email</b>: {doctor?.email}
        </p>
        <p>
          <b>Gender</b>: {doctor?.sex}
        </p>
        <p>
          <b>State</b>: {doctor?.state}
        </p>
        <p>
          <b>Relationship</b>: {doctor?.relationship}
        </p>
        <p>
          <b>Phone</b>: {doctor?.cell_Phone}
        </p>
        <p>
          <b>Date of birth</b>: {new Date(doctor?.dob).toDateString()}
        </p>
        <p>
          <b>National Identity Number</b>: {doctor?.nin}
        </p>
        <p>
          <b>Address</b>: {doctor?.address}
        </p>
        <p>
          <b>Registered</b>: {new Date(doctor?.created).toDateString()}
        </p>
        <p className="text-red-500 mt-3">
          <b>Medical Info</b>
        </p>
        <p>
          <b>Specialty</b>: {doctor?.specialty.name}
        </p>
        <p>
          <b>Sub specialty</b>: {doctor?.sub_Specialty.name}
        </p>
        <p>
          <b>Medical Licence Number</b>: {doctor?.mln}
        </p>
        <p>
          <b>OMS ID</b>: {doctor?.work_ID}
        </p>
        <div hidden={!isAdmin} className="mt-3 flex flex-col-reverse gap-2">
          <button className="bg-red-600 text-center text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-red-950 transition duration-500 ease-in">
            Lock <i className="bi bi-lock"></i>
          </button>
          <Link
            to={oms_url.updateDoctor + "/" + id}
            className="bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-blue-950 transition duration-500 ease-in"
          >
            Update <i className="bi bi-cloud-check"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
