import { Link, useParams } from "react-router-dom";
import usePatient from "../../../hooks/usePatient";
import Circle from "../../../components/loading/Circle";
import { oms_url, Roles } from "../../../utils/SD";
import { useAuth } from "../../../utils/isAuthorized";

const PatientProfile = () => {
  const { id } = useParams();
  const { loading, patients: patient } = usePatient(id);
  const isAdmin = useAuth([Roles.ADMIN]);
  return (
    <div className="text-sm md:text-[15px] w-[90%] flex flex-col bg-yellow-200 justify-center p-4 items-center md:flex-row-reverse h-11/12 rounded-lg shadow-lg font-sans">
      {!loading ? (
        <>
          <div className="w-full md:w-6/12 flex items-center justify-center md:h-full">
            <Link to={patient?.profile_Url}>
              <img
                src={
                  patient?.profile_Url
                    ? patient?.profile_Url
                    : patient?.sex == "Male"
                    ? "/images/profile-masculine.jpeg"
                    : "/images/profile-femine.jpeg"
                }
                className="rounded-full shadow-2xl w-40 md:w-70"
                alt="profile"
              />
            </Link>
          </div>
          <div className="w-full flex flex-col justify-center md:w-6/12 md:h-full">
            <p className="text-yellow-500 text-2xl my-4 text-center md:text-left">
              patient
            </p>
            <p>
              <b>First Name</b>: {patient?.first_Name}
            </p>
            <p>
              <b>Last Name</b>: {patient?.last_Name}
            </p>
            <p>
              <b>Other Name</b>: {patient?.middle_Name}
            </p>
            <p>
              <b>Email</b>: {patient?.email}
            </p>
            <p>
              <b>Gender</b>: {patient?.sex}
            </p>
            <p>
              <b>State</b>: {patient?.state}
            </p>
            <p>
              <b>Relationship</b>: {patient?.relationship}
            </p>
            <p>
              <b>Phone</b>: {patient?.cell_Phone}
            </p>
            <p>
              <b>Date of birth</b>: {new Date(patient?.dob).toDateString()}
            </p>
            <p>
              <b>National Identity Number</b>: {patient?.nin}
            </p>
            <p>
              <b>Address</b>: {patient?.address}
            </p>
            <p>
              <b>Registered</b>: {new Date(patient?.createdAt).toDateString()}
            </p>
            <p className="text-red-500 mt-3">
              <b>Emergency Contact</b>
            </p>
            <p>
              <b>Address</b>: {patient?.eC_Address}
            </p>
            <p>
              <b>Phone</b>: {patient?.eC_Cell_Phone}
            </p>
            <p>
              <b>Full Name</b>: {patient?.eC_FullName}
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
        </>
      ) : (
        <Circle />
      )}
    </div>
  );
};

export default PatientProfile;
