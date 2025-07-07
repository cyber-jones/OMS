/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useParams } from "react-router-dom";
import usePrescription from "../../hooks/usePrescription";
import useDoctor from "../../hooks/useDoctor";
import useSpecialty from "../../hooks/useSpecialty";
import { useEffect, useState } from "react";
import useDrug from "../../hooks/useDrug";
import Circle from "../../components/loading/Circle";
import usePatient from "../../hooks/usePatient";
import { oms_url, Roles } from "../../utils/SD";
import { useSelector } from "react-redux";

const PatientPrescriptions = () => {
  const { user } = useSelector(state => state.user);
  const { authUser } = useSelector(state => state.authUser);
  const { id } = useParams();
  const [data, setData] = useState([]);
    let getPrescriptions = null;
    if (authUser.roles.includes(Roles.PATIENT))
      getPrescriptions = usePrescription(user._id);
    else if(authUser.roles.includes(Roles.DOCTOR))
      getPrescriptions = usePrescription(null, null, user._id);
    else
      getPrescriptions = usePrescription();
  const { loading, prescriptions } = getPrescriptions;
  const { loading: loadingDoctor, doctors } = useDoctor();
  const { patients: patient } = usePatient(id);
  const { loading: loadingSpecialty, specialties } = useSpecialty();
  const { loading: laodingDrug, drugs } = useDrug();

  useEffect(() => {
    if (
      !loadingDoctor &&
      !loadingSpecialty &&
      !laodingDrug &&
      !loading &&
      prescriptions &&
      doctors &&
      specialties &&
      drugs
    ) {
      const newArr = prescriptions.map((value) => ({
        id: value._id,
        doctor: doctors.find((doc) => doc._id === value.doctor_Id),
        drugs: value.prescription.map((val) => ({
          name: drugs.find((drug) => drug._id === val.drug_Id).drug_Name,
          amount: val.amount,
        })),
        createdAt: value.createdAt,
        updatedAt: value.updatedAt,
        status: value.status,
      }));

      setData(newArr);
    }
  }, [
    loading,
    loadingDoctor,
    loadingSpecialty,
    prescriptions,
    doctors,
    specialties,
    drugs,
    laodingDrug,
  ]);
  return (
    <div className="w-11/12 h-full flex flex-col justify-center items-center font-sans">
      <h1 className="text-2xl text-red-600">Prescription History</h1>
      <p className="md:text-lg text-sm">{patient?.first_Name} {patient?.last_Name} {patient?.middle_Name}</p>
      <div className="overflow-y-scroll h-10/12 w-full md:w-5/12 mt-3 text-center flex flex-col justify-center items-center">
        {loading && loadingDoctor && loadingSpecialty && laodingDrug ? <Circle /> : data.length > 0 ? data.map((value, index) => (
          <Link
            to={oms_url.prescription+"/"+value.id}
            key={index}
            className="w-full flex flex-col gap-2 bg-blue-950 border-b border-gray-400 mb-1 p-2 text-gray-300 hover:cursor-pointer"
          >
            <div className="flex justify-between">
              <i>Doctor</i>
              <i>
                {value.doctor.first_Name} {value.doctor.last_Name}
              </i>
            </div>
            <div className="flex justify-between">
              <i>Specialty</i>
              <i>{value.doctor.specialty.name}</i>
            </div>
            <div className="flex justify-between">
              <i>Sub-Specialty</i>
              <i>{value.doctor.sub_Specialty.name}</i>
            </div>
            {value.drugs.map((val, ind) => (
              <div key={ind} className="w-full border-y-1 border-gray-600 py-1">
                <div className="flex justify-between">
                  <i>Drug</i>
                  <i>{val.name}</i>
                </div>
                <div className="flex justify-between">
                  <i>Amount</i>
                  <i>{val.amount}</i>
                </div>
              </div>
            ))}
            <div className="flex justify-between">
              <i>Status</i>
              <i className="text-blue-600">{value.status}</i>
            </div>
            <div className="flex justify-between">
              <i>Precription Date</i>
              <i>{new Date(value.createdAt).toDateString()}</i>
            </div>
            <div className="flex justify-between">
              <i>Modified Date</i>
              <i>{new Date(value.updatedAt).toDateString()}</i>
            </div>
          </Link>
        )) : <p className="text-red-500">No history found</p>}
      </div>
    </div>
  );
};

export default PatientPrescriptions;
