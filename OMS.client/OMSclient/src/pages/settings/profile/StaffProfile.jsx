import Circle from "../../../components/loading/Circle";
import useStaff from "../../../hooks/useStaff";
import { useParams } from "react-router-dom";
import { oms_url } from "../../../utils/SD";

const StaffProfile = () => {
  const { id } = useParams();
  const { loading, staff } = useStaff(id);
  return (
    <div className="text-sm md:text-[15px] w-[90%] flex flex-col justify-center items-center md:flex-row-reverse h-full md:h-11/12 p-7 md:p-20 rounded-lg shadow-lg bg-gray-50 font-sans">
      {!loading ? (
        <>
          <div className="w-full md:w-6/12 flex items-center justify-center md:h-full">
            <div>
              <img
                src={
                  staff?.profile_Url
                    ? staff?.profile_Url
                    : staff?.sex == "Male"
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
              staff
            </p>
            <p>
              <b>First Name</b>: {staff?.first_Name}
            </p>
            <p>
              <b>Last Name</b>: {staff?.last_Name}
            </p>
            <p>
              <b>Other Name</b>: {staff?.middle_Name}
            </p>
            <p>
              <b>Gender</b>: {staff?.sex}
            </p>
            <p>
              <b>State</b>: {staff?.state}
            </p>
            <p>
              <b>Relationship</b>: {staff?.relationship}
            </p>
            <p>
              <b>Phone</b>: {staff?.cell_Phone}
            </p>
            <p>
              <b>Date of birth</b>: {new Date(staff?.dob).toDateString()}
            </p>
            <p>
              <b>National Identity Number</b>: {staff?.nin}
            </p>
            <p>
              <b>Address</b>: {staff?.address}
            </p>
            <p>
              <b>OMS ID</b>: {staff?.work_ID}
            </p>
            <p>
              <b>Registered</b>: {new Date(staff?.created).toDateString()}
            </p>
            <p className="text-red-500 mt-3">
              <b>Emergency Contact</b>
            </p>
            <p>
              <b>Address</b>: {staff?.eC_Address}
            </p>
            <p>
              <b>Phone</b>: {staff?.eC_Cell_Phone}
            </p>
            <p>
              <b>Full Name</b>: {staff?.eC_FullName}
            </p>
            <div className="mt-3 flex flex-col-reverse gap-2">
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

export default StaffProfile;
