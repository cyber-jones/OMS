import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { oms_server_dev_url, oms_url } from "../../../utils/SD";
import useDrug from "../../../hooks/useDrug";
import useAxiosAuthorization from "../../../hooks/useAxiosAuth";
import { useSnackbar } from "notistack";
import confirmAction from "../../../utils/confirmAction";

const DrugList = () => {
  const { loading, drugs } = useDrug();
  const axiosAuth = useAxiosAuthorization(oms_server_dev_url.drug   );
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()

    const handleDelete = async (id, name) => {
      if (confirmAction(name)) {
        try {
          const res = await axiosAuth.delete("/drug/" + id);
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
            <th className="border border-gray-300 h-12">{"Price (N)"}</th>
            <th className="border border-gray-300 h-12">Manufacturer</th>
            <th className="border border-gray-300 h-12 hidden lg:block">
              Count
            </th>
            <th className="border border-gray-300 h-12">Category</th>
            <th className="border border-gray-300 h-12 hidden lg:block px-2">
              Expiry
            </th>
          </tr>
        </thead>
        <tbody>
          {!loading && drugs ? (
            drugs.map((drug, index) => (
              <tr key={index}>
                <td className="border border-gray-300 h-12">
                  {drug?.drug_Name}
                </td>
                <td className="border border-gray-300 h-12">{drug?.price}</td>
                <td className="border border-gray-300 h-12">
                  {drug?.manufacturer}
                </td>
                <td className="border border-gray-300 h-12 hidden lg:block">
                  {drug?.count_In_Stock}
                </td>
                <td className="border border-gray-300 h-12">
                  {drug?.category}
                </td>
                <td className="border border-gray-300 h-12 hidden lg:block px-2">
                  {drug?.expiry_Date}
                </td>
                <td className="border border-gray-300 h-12 px-2">
                  <Link
                    to={oms_url.updateDrug + "/" + drug?.drug_Id}
                    className="bg-blue-600 text-white px-2 py-1 text-sm hover:bg-blue-900 cursor-pointer rounded-lg"
                  >
                    <i className="bi bi-pencil-fill text-[12px]"></i>
                  </Link>
                </td>
                <td className="border border-gray-300 h-12 px-2">
                  <button
                    type="button"
                    onClick={() => handleDelete(drug?.drug_Id, drug?.drug_Name)}
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

export default DrugList;
