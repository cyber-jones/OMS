import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { oms_server_dev_url, oms_url } from "../../../utils/SD";
import useAxiosAuthorization from "../../../hooks/useAxiosAuth";
import { useSelector } from "react-redux";

const RegisterDrug = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [ImageUrl, setImageUrl] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const navigete = useNavigate();
  const { user } = useSelector((state) => state.user);
  const axiosAuth = useAxiosAuthorization(oms_server_dev_url.drug);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleImageUrl = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      enqueueSnackbar("Please select an image file", { variant: "error" });
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImageUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosAuth.post("/drug", {
        ...formData,
        Created_By: `${user?.first_Name} ${user?.middle_Name} ${user?.last_Name}`,
        Image: ImageUrl,
      });
      console.log(res);
      if (res?.status !== 201)
        return enqueueSnackbar(res.statusText, { variant: "error" });

      enqueueSnackbar(res.statusText, { variant: "success" });
      setFormData({});
      navigete(oms_url.doctorList);
    } catch (err) {
      enqueueSnackbar(err?.response?.statusText, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[95%] h-11/12 flex flex-col justify-start items-center gap-8 font-sans overflow-y-scroll"
    >
      <h1 className="w-11/12 md:w-6/12 text-2xl text-blue-600 mb-8">
        Create New Drug
      </h1>
      <label htmlFor="Drug_Name" className="w-11/12 md:w-6/12">
        <p className="font-semibold">Drug Name:</p>
        <input
          id="Drug_Name"
          type="text"
          onChange={(e) => handleChange(e)}
          className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        />
      </label>
      <label htmlFor="Side_Effects" className="w-11/12 md:w-6/12">
        <p className="font-semibold">Side Effects:</p>
        <textarea
          id="Side_Effects"
          type="text"
          onChange={(e) => handleChange(e)}
          className="w-full max-h-36 min-h-26 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        ></textarea>
      </label>
      <label htmlFor="Description" className="w-11/12 md:w-6/12">
        <p className="font-semibold">Drug Description:</p>
        <textarea
          id="Description"
          type="text"
          onChange={(e) => handleChange(e)}
          className="w-full max-h-36 min-h-26 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        ></textarea>
      </label>
      <label htmlFor="Disclaimer" className="w-11/12 md:w-6/12">
        <p className="font-semibold">Disclaimer:</p>
        <input
          id="Disclaimer"
          type="text"
          onChange={(e) => handleChange(e)}
          className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        />
      </label>
      <label htmlFor="Manufacturer" className="w-11/12 md:w-6/12">
        <p className="font-semibold">Manufacturer:</p>
        <input
          id="Manufacturer"
          type="text"
          onChange={(e) => handleChange(e)}
          className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        />
      </label>
      <label htmlFor="Category" className="w-11/12 md:w-6/12">
        <p className="font-medium">Category:</p>
        <select
          id="Category"
          onChange={(e) => handleChange(e)}
          className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        >
          <option>--select category</option>
          <option value={"Dermatology"}>Dermatology</option>
          <option value={"Diabetes"}>Diabetes</option>
          <option value={"Depression"}>Depression</option>
          <option value={"Dental"}>Dental</option>
          <option value={"Fracture"}>Fracture</option>
          <option value={"Women Care"}>Women Care</option>
          <option value={"EcoBeauty"}>EcoBeauty</option>
          <option value={"EcoBeauty"}>EcoBeauty</option>
          <option value={"Personal care"}>Personal care</option>
          <option value={"Baby care"}>Baby care</option>
          <option value={"Ayurveda"}>Ayurveda</option>
          <option value={"Nutritional Drinks & Supplements"}>
            Nutritional Drinks & Supplements
          </option>
          <option value={"Statins"}>Statins</option>
          <option value={"Antibiotics"}>Antibiotics</option>
          <option value={"Blood pressure"}>Blood pressure</option>
          <option value={"Gastroesophageal"}>Gastroesophageal</option>
          <option value={"Insomnia"}>Insomnia</option>
        </select>
      </label>
      <label htmlFor="Consume_Type" className="w-11/12 md:w-6/12">
        <p className="font-medium">Consume Type:</p>
        <textarea
          id="Consume_Type"
          type="text"
          onChange={(e) => handleChange(e)}
          className="w-full max-h-36 min-h-26 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        ></textarea>
      </label>
      <label htmlFor="Price" className="w-11/12 md:w-6/12">
        <p className="font-semibold">Price:</p>
        <input
          id="Price"
          type="number"
          onChange={(e) => handleChange(e)}
          className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        />
      </label>
      <label htmlFor="Expiry_Date" className="w-11/12 md:w-6/12">
        <p className="font-semibold">Expiry Date:</p>
        <input
          id="Expiry_Date"
          type="date"
          onChange={(e) => handleChange(e)}
          className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        />
      </label>
      <label htmlFor="Count_In_Stock" className="w-11/12 md:w-6/12">
        <p className="font-semibold">Count In Stock:</p>
        <input
          id="Count_In_Stock"
          type="number"
          onChange={(e) => handleChange(e)}
          className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        />
      </label>
      <label htmlFor="Image" className="w-11/12 md:w-6/12">
        <p className="font-semibold">Count In Stock:</p>
        <input
          id="Image"
          type="file"
          onChange={handleImageUrl}
          className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        />
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

export default RegisterDrug;
