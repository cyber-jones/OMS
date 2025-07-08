import { useEffect, useState } from "react";
import usePatient from "../../hooks/usePatient";
// import { oms_url } from "../../utils/SD";
import Circle from "../../components/loading/Circle";
import { Link } from "react-router-dom";
import { setPatientForPrescription } from "../../redux/prescription/prescriptionSlice";
import { useDispatch, useSelector } from "react-redux";
import List from "../../components/daisyUI/List";

const Patients = () => {
  const { patients, loading } = usePatient();
  const [data, setData] = useState([]);
  const { patient } = useSelector((state) => state.prescription);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && patients) setData(patients);
  }, [patients, loading]);

  const handleSearch = (e) => {
    const patientSearched = patients.filter(
      (patient) =>
        patient.first_Name
          .toLowerCase()
          .startsWith(e.target.value.toLowerCase()) ||
        patient.last_Name
          .toLowerCase()
          .startsWith(e.target.value.toLowerCase()) ||
        patient.middle_Name
          .toLowerCase()
          .startsWith(e.target.value.toLowerCase())
    );

    setData(patientSearched);
  };

  const handleSetPatientForPrescribe = (userPatient) => {
    dispatch(setPatientForPrescription(userPatient));
    console.log(userPatient, patient);
  };

  return (
    <div className="w-[95%] h-11/12 flex flex-col justify-center items-center">
      <input
        className="px-8 focus:outline-0 border-0 ml-3 w-[80%] md:w-[60%] text-md my-3"
        type="text"
        onChange={handleSearch}
        placeholder="Search Patient"
      />
      {!loading ? (
        // <div className="w-full md:w-[70%] py-3 font-serif h-11/12 grid grid-cols-1 gap-4 bg-white place-content-start place-items-center scroll-smooth overflow-y-scroll">
        <ul className="list bg-base-100 h-full rounded-box shadow-md scroll-smooth overflow-y-scroll w-full md:w-[70%] gap-2">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            All Patients
          </li>
          {data.length > 0 ? (
            data.map((patient, index) => (
              <List
                patient={patient}
                index={index}
                handleSetPatientForPrescribe={handleSetPatientForPrescribe}
              />
            ))
          ) : (
            <p className="text-center text-red-500 text-2xl mt-10">
              No Data found
            </p>
          )}
        </ul>
      ) : (
        <Circle />
      )}
      {/* {!loading ? (
        <div className="w-full md:w-[70%] py-3 font-serif h-11/12 grid grid-cols-1 gap-4 bg-white place-content-start place-items-center scroll-smooth overflow-y-scroll">
          {data.length > 0 ? (
            data.map((patient, index) => (
              <Link
                onClick={() => handleSetPatientForPrescribe(patient)}
                to={`${oms_url.patient}/action/${patient?._id}`}
                key={index}
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
              >
                <div className="text-sm md:text-xl text-center">
                  {patient?.first_Name} {patient?.last_Name}{" "}
                  {patient?.middle_Name}
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-red-500 text-2xl mt-10">
              No Data found
            </p>
          )}
        </div>
      ) : (
        <Circle />
      )} */}
    </div>
  );
};

export default Patients;
