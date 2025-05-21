import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { oms_server_dev_url, oms_url } from "../../../utils/SD";
import useAxiosAuthorization from "../../../hooks/useAxiosAuth";








const RegisterSpecialty = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigete = useNavigate();
  const axiosAuth = useAxiosAuthorization(oms_server_dev_url.doctor);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosAuth.post("/specialty", formData);
      console.log(res);
      if (res?.status !== 201)
        return enqueueSnackbar(res.statusText, { variant: "error" });

      enqueueSnackbar(res.statusText, { variant: "success" });
      setFormData({});
      navigete(oms_url.specialtyList);
    } catch (err) {
      enqueueSnackbar(err?.response?.statusText, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };
  console.log(formData);






  
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[95%] h-11/12 flex flex-col justify-start items-center gap-8 font-sans"
    >
      <h1 className="w-11/12 md:w-6/12 text-2xl text-blue-600 mb-8 font-semibold">
        New Specialty
      </h1>
      <label htmlFor="Name" className="w-11/12 md:w-6/12">
        <p className="font-semibold">Specialty Name:</p>
        <input
          id="Name"
          type="text"
          onChange={(e) => handleChange(e)}
          className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        />
      </label>
      <label htmlFor="Description" className="w-11/12 md:w-6/12">
        <p className="font-semibold">Specialty Description:</p>
        <textarea
          id="Description"
          type="text"
          onChange={(e) => handleChange(e)}
          className="w-full max-h-46 min-h-36 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        ></textarea>
      </label>
      <div className="w-11/12 md:w-6/12">
        {loading ? (
          <button
            disabled={loading}
            className="md:w-5/12 w-full py-4 uppercase bg-yellow-950 rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-pointer md:float-right"
          >
            Loading...
          </button>
        ) : (
          <button className="md:w-5/12 w-full py-4 uppercase bg-green-900 hover:bg-green-950 rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-pointer md:float-right">
            Create
          </button>
        )}
      </div>
    </form>
  );
};

export default RegisterSpecialty;
