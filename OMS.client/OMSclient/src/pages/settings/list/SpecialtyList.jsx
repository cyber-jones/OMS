import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { oms_server_dev_url, oms_url } from "../../../utils/SD";
import useAxiosAuthorization from "../../../hooks/useAxiosAuth";
import { useSnackbar } from "notistack";
import useSpecialty from "../../../hooks/useSpecialty";
import confirmAction from "../../../utils/confirmAction";

const SpecialtyList = () => {
  const { loading, specialties } = useSpecialty();
  const axiosAuth = useAxiosAuthorization(oms_server_dev_url.doctor);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()

    const handleDelete = async (id, name) => {
      if (confirmAction(name)) {
        try {
          const res = await axiosAuth.delete("/specialty/" + id);
          console.log(res);
          if (res?.status !== 204 && !res?.data)
            return enqueueSnackbar(res.statusText, { variant: "error" });

          enqueueSnackbar(res.statusText + ": Deleted", { variant: "success" });
          navigate(oms_url.drugList);
        } catch (err) {
          enqueueSnackbar(err?.response?.statusText, { variant: "error" });
        }
      }

      return;
    }

 

  return (
    <div className="w-[95%] h-11/12 text-center overflow-auto">
      <table className="border-collapse border border-gray-400 w-full font-sans text-[10px] md:text-[14px]">
        <thead>
          <tr>
            <th className="border border-gray-300 h-12">Name</th>
            <th className="border border-gray-300 h-12">Description</th>
            <th className="border border-gray-300 h-12">Created Date</th>
          </tr>
        </thead>
        <tbody>
          {!loading && specialties ? (
            specialties.map((specialty, index) => (
              <tr key={index}>
                <td className="border border-gray-300 h-12">
                  {specialty?.name}
                </td>
                <td className="border border-gray-300 h-12">{specialty?.description.slice(0, 20)}...</td>
                <td className="border border-gray-300 h-12">
                  {new Date(specialty?.createdAt).toDateString()}
                </td>
                <td className="border border-gray-300 h-12 px-2">
                  <Link
                    to={oms_url.updateSpecialty + "/" + specialty?.specialty_Id}
                    className="bg-blue-600 text-white px-2 py-1 text-sm hover:bg-blue-900 cursor-pointer rounded-lg"
                  >
                    <i className="bi bi-pencil-fill text-[12px]"></i>
                  </Link>
                </td>
                <td className="border border-gray-300 h-12 px-2">
                  <button
                    type="button"
                    onClick={() => handleDelete(specialty?.specialty_Id, specialty?.name)}
                    className="bg-red-600 text-white px-2 py-1 text-sm hover:bg-red-900 cursor-pointer rounded-lg"
                  >
                    <i className="bi bi-trash-fill text-[12px]"></i>
                  </button>
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

export default SpecialtyList;
