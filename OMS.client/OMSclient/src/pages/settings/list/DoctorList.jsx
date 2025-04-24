import React from "react";
import useDoctor from "../../../hooks/useDoctor";
import { Link } from "react-router-dom";
import { oms_url } from "../../../utils/SD";

const DoctorList = () => {
  const { loading, doctors } = useDoctor();
  return (
    <div className="w-[95%] h-11/12 text-center">
      <table className="border-collapse border border-gray-400 w-full font-sans text-[10px] md:text-lg">
        <thead>
          <tr>
            <th className="border border-gray-300 h-12">First Name</th>
            <th className="border border-gray-300 h-12">Last Name</th>
            <th className="border border-gray-300 h-12">MLN</th>
            <th className="border border-gray-300 h-12 hidden lg:block">
              Gender
            </th>
            <th className="border border-gray-300 h-12">Specialty</th>
            <th className="border border-gray-300 h-12 hidden lg:block">
              Sub-Specialty
            </th>
          </tr>
        </thead>
        <tbody>
          {!loading && doctors ? (
            doctors.map((doctor, index) => (
              <tr key={index}>
                <td className="border border-gray-300 h-12">
                  {doctor?.first_Name}
                </td>
                <td className="border border-gray-300 h-12">
                  {doctor?.last_Name}
                </td>
                <td className="border border-gray-300 h-12">{doctor?.mln}</td>
                <td className="border border-gray-300 h-12 hidden lg:block">
                  {doctor?.sex}
                </td>
                <td className="border border-gray-300 h-12">
                  {doctor?.specialty?.name}
                </td>
                <td className="border border-gray-300 h-12 hidden lg:block">
                  {doctor?.sub_Specialty?.name}
                </td>
                <td className="border border-gray-300 h-12">
                  <Link
                    to={oms_url.updateDoctor + "/" + doctor?.doctor_Id}
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

export default DoctorList;
