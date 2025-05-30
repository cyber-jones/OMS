import Circle from "../../../components/loading/Circle";
import useDoctor from "../../../hooks/useDoctor";
import { Link, useParams } from "react-router-dom";
import { oms_url } from "../../../utils/SD";

const DoctorProfile = () => {
  const { id } = useParams();
  const { loading, doctors: doctor } = useDoctor(id);


  return (
    <div className="text-sm md:text-[15px] w-[90%] flex flex-col justify-center items-center md:flex-row-reverse h-full md:h-11/12 p-7 md:p-20 rounded-lg shadow-lg bg-gray-50 font-sans">
      {!loading ? (
        <>
          <div className="w-full md:w-6/12 flex items-center justify-center md:h-full">
            <div className="w-10/12 md:w-6/12 rounded-full bg-black mr-3">
              {doctor && doctor?.profile_Url !== null ? (
                <img src={doctor?.profile_Url} alt="profile" />
              ) : doctor?.sex == "Male" ? (
                <img
                  src="/images/profile-masculine.jpeg"
                  className="rounded-full"
                  alt="profile"
                />
              ) : doctor?.sex == "Female" ? (
                <img src="/images/profile-femine.jpeg" alt="profile" />
              ) : null}
            </div>
          </div>
          <div className="w-full h-10/12 md:w-6/12 md:h-full">
            <p className="text-purple-500 text-2xl my-4 text-center md:text-left">
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
            <div className="mt-3 flex flex-col-reverse gap-2">
                <button className="bg-red-600 text-center text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-red-950 transition duration-500 ease-in">Lock <i className="bi bi-lock"></i></button>
                <Link to={oms_url.updateDoctor+"/"+id} className="bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-blue-950 transition duration-500 ease-in">Update <i className="bi bi-cloud-check"></i></Link>
            </div>
          </div>
        </>
      ) : (
        <Circle />
      )}
    </div>
  );
};

export default DoctorProfile;
