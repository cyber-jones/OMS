import { useEffect, useState } from "react";
import usePatient from "../../hooks/usePatient";
import { oms_url } from "../../utils/SD";
import Circle from "../../components/loading/Circle";
import { Link } from "react-router-dom";


const Patients = () => {
  const { patients, loading } = usePatient();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!loading && patients) setData(patients);
  }, [patients, loading]);

  const handleSearch = (e) => {
    const patientSearched = patients.filter((patient)=>
      patient.first_Name.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
      patient.last_Name.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
      patient.middle_Name.toLowerCase().startsWith(e.target.value.toLowerCase()) 
    );

    setData(patientSearched);
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
        <div className="w-full md:w-[70%] py-3 font-serif h-11/12 grid grid-cols-1 gap-4 bg-white place-content-start place-items-center scroll-smooth overflow-y-scroll">
          {data.length > 0 ? (
            data.map((patient, index) => (
              <Link
                to={`${oms_url.patient}/action/${patient?.patient_Id}`}
                key={index}
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
              >
                <div className="text-sm md:text-xl text-center">
                  {patient?.first_Name} {patient?.last_Name} {patient?.middle_Name}  
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
      )}
    </div>
  );
}

export default Patients