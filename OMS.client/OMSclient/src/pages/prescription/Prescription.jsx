import { useParams } from "react-router-dom";
import usePrescription from "../../hooks/usePrescription";
import useDoctor from "../../hooks/useDoctor";
import useSpecialty from "../../hooks/useSpecialty";
import { useEffect, useState } from "react";
import useDrug from "../../hooks/useDrug";
import Circle from "../../components/loading/Circle";
import { useAuth } from "../../utils/isAuthorized";
import { Roles } from "../../utils/SD";

const Prescription = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const { loading, prescriptions: prescription } = usePrescription(null, id);
  const { loading: loadingDoctor, doctors } = useDoctor();
  const { loading: loadingSpecialty, specialties } = useSpecialty();
  const { loading: laodingDrug, drugs } = useDrug();
  const isNotStaff = useAuth([Roles.STAFF]);
  const isNotDoctor = useAuth([Roles.DOCTOR]);

  useEffect(() => {
    if (
      !loadingDoctor &&
      !loadingSpecialty &&
      !laodingDrug &&
      !loading &&
      prescription &&
      doctors &&
      specialties &&
      drugs
    ) {
      const mutatedPresc = {
        doctor: doctors.find((doc) => doc._id === prescription.doctor_Id),
        drugs: prescription.prescription.map((val) => ({
          name: drugs.find((drug) => drug._id === val.drug_Id).drug_Name,
          amount: val.amount,
        })),
        createdAt: prescription.createdAt,
        updatedAt: prescription.updatedAt,
        status: prescription.status,
      };
      setData(mutatedPresc);
    }
  }, [
    loading,
    loadingDoctor,
    loadingSpecialty,
    prescription,
    doctors,
    specialties,
    drugs,
    laodingDrug,
  ]);

  return (
    <div className="w-11/12 h-full flex flex-col justify-center items-center font-sans">
      <h1 className="text-2xl text-red-600">Prescription History</h1>
      <p className="md:text-lg text-sm">
        {new Date(data?.createdAt).toDateString()}
      </p>
      <div className="h-10/12 w-full md:w-5/12 mt-3 text-center flex flex-col justify-center items-center">
        {loading && loadingDoctor && loadingSpecialty && laodingDrug ? (
          <Circle />
        ) : (
          <div className="w-full h-full flex flex-col gap-6 bg-blue-950 border-b border-gray-400 mb-1 p-2 text-gray-300 hover:cursor-pointer">
            <div className="flex justify-between">
              <i>Doctor</i>
              <i>
                {data?.doctor?.first_Name} {data?.doctor?.last_Name}
              </i>
            </div>
            <div className="flex justify-between">
              <i>Specialty</i>
              <i>{data?.doctor?.specialty.name}</i>
            </div>
            <div className="flex justify-between">
              <i>Sub-Specialty</i>
              <i>{data?.doctor?.sub_Specialty.name}</i>
            </div>
            {data?.drugs?.map((val, ind) => (
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
              <i className="text-blue-600">{data?.status}</i>
            </div>
            <div className="flex justify-between">
              <i>Precription Date</i>
              <i>{new Date(data?.createdAt).toDateString()}</i>
            </div>
            <div className="flex justify-between">
              <i>Modified Date</i>
              <i>{new Date(data?.updatedAt).toDateString()}</i>
            </div>
            <div className="grid grid-col-1 gap-1">
              <button className="btn btn-success" hidden={!isNotStaff}>Approve</button>
              <button className="btn btn-primary" hidden={!isNotStaff}>Disapprove</button>
              <button hidden={ !isNotDoctor && data?.status == "approved" ? true : false } className="btn btn-error">Delete</button>
              <button className="btn">Download</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prescription;
