import React from "react";
import { Link } from "react-router-dom";
import { oms_url } from "../../../utils/SD";
import usePatient from "../../../hooks/usePatient";

const PatientList = () => {
  const { loading, patients } = usePatient();
  return (
    <div className="w-[95%] h-11/12 text-center">
      <table className="border-collapse border border-gray-400 w-full font-sans text-[10px] md:text-[14px]">
        <thead>
          <tr>
            <th className="border border-gray-300 h-12">First Name</th>
            <th className="border border-gray-300 h-12">Last Name</th>
            <th className="border border-gray-300 h-12 hidden lg:block">Middle Name</th>
            <th className="border border-gray-300 h-12">NIN</th>
            <th className="border border-gray-300 h-12">
              Gender
            </th>
            <th className="border border-gray-300 h-12 hidden lg:block">
                Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {!loading && patients ? (
            patients.map((patient, index) => (
              <tr key={index}>
                <td className="border border-gray-300 h-12">
                  {patient?.first_Name}
                </td>
                <td className="border border-gray-300 h-12">
                  {patient?.last_Name}
                </td>
                <td className="border border-gray-300 h-12 hidden lg:block">{patient?.middle_Name}</td>
                <td className="border border-gray-300 h-12">
                  {patient?.nin}
                </td>
                <td className="border border-gray-300 h-12">
                  {patient?.sex}
                </td>
                <td className="border border-gray-300 h-12 hidden lg:block">
                  {patient?.cell_Phone}
                </td>
                <td className="border border-gray-300 h-12">
                  <Link
                    to={oms_url.updatePatient + "/" + patient?.patient_Id}
                    className="bg-blue-600 text-white px-2 py-1 text-sm hover:bg-blue-900 cursor-pointer rounded-lg"
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </Link>
                </td>
                <td className="border border-gray-300 h-12">
                  <Link className="bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-900 cursor-pointer rounded-lg">
                    <i className="bi bi-unlock-fill"></i>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr className="border border-gray-300 ...">
              <td>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
