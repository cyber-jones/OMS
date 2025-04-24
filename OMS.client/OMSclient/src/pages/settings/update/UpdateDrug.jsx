/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Input3 from "../../../components/Inputs/Input3";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import { oms_server_dev_url, oms_url } from "../../../utils/SD";
import useAxiosAuthorization from "../../../hooks/useAxiosAuth";
import Circle from "../../../components/loading/Circle";
import { useSelector } from "react-redux";

const UpdateDrug = () => {
  const [formData, setFormData] = useState({
    Drug_Id: "",
    Drug_Name: "",
    Side_Effects: "",
    Description: "",
    Disclaimer: "",
    Manufacturer: "",
    Category: "",
    Consume_Type: "",
    Price: "",
    Expiry_Date: "",
    Count_In_Stock: "",
    Created_At: "",
    Created_By: "",
    Image: "",
  });
  const [Drug_Id, setDrug_Id] = useState(null);
  const [DrugName, setDrugName] = useState(null);
  const [SideEffects, setSideEffects] = useState(null);
  const [Description, setDescription] = useState(null);
  const [Disclaimer, setDisclaimer] = useState(null);
  const [Manufacturer, setManufacturer] = useState(null);
  const [Category, setCategory] = useState(null);
  const [ConsumeType, setConsumeType] = useState(null);
  const [Price, setPrice] = useState(null);
  const [ExpiryDate, setExpiryDate] = useState(null);
  const [CountInStock, setCountInStock] = useState(null);
  const [CreatedAt, setCreatedAt] = useState(null);
  const [CreatedBy, setCreatedBy] = useState(null);
  const [ImageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigete = useNavigate();
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  const axiosAuth = useAxiosAuthorization(oms_server_dev_url.drug);

  const getDoctorById = async () => {
    setLoading(true);
    try {
      const res = await axiosAuth.get("/drug/" + id);
      console.log(res);
      if (res?.status !== 200 && !res?.data)
        return enqueueSnackbar(res.statusText, { variant: "error" });

      setDrug_Id(res.data.drug_Id);
      setDrugName(res.data.drug_Name);
      setSideEffects(res.data.side_Effects);
      setDescription(res.data.description);
      setDisclaimer(res.data.Disclaimer);
      setManufacturer(res.data.manufacturer);
      setCategory(res.data.category);
      setConsumeType(res.data.consume_Type);
      setPrice(res.data.Price);
      setExpiryDate(res.data.expiry_Date);
      setCountInStock(res.data.count_In_Stock);
      setCreatedAt(res.data.created_At);
      setCreatedBy(res.data.created_By);
      setImageUrl(res.data.image);

      enqueueSnackbar(res.statusText, { variant: "success" });
    } catch (err) {
      enqueueSnackbar(err?.response?.statusText, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDoctorById();
  }, []);

  useEffect(() => {
    setFormData({
      Drug_Id: Drug_Id,
      Drug_Name: DrugName,
      Side_Effects: SideEffects,
      Description: Description,
      Disclaimer: Disclaimer,
      Manufacturer: Manufacturer,
      Category: Category,
      Consume_Type: ConsumeType,
      Price: Price,
      Expiry_Date: ExpiryDate,
      Count_In_Stock: CountInStock,
      Created_At: CreatedAt,
      Created_By: CreatedBy,
      Image: ImageUrl,
    });
  }, [
    DrugName,
    SideEffects,
    Description,
    Disclaimer,
    Manufacturer,
    Category,
    Price,
    ExpiryDate,
    CountInStock,
    CreatedAt,
    ImageUrl,
    CreatedBy
  ]);

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
      const res = await axiosAuth.put("/drug/" + id, {
        ...formData,
        Upadted_By: `${user?.first_Name} ${user?.middle_Name} ${user?.last_Name}`,
      });
      console.log(res);
      if (res?.status !== 205)
        return enqueueSnackbar(res.statusText, { variant: "error" });

      enqueueSnackbar(res.statusText, { variant: "success" });
      navigete(oms_url.drugList);
    } catch (err) {
      enqueueSnackbar(err?.response?.statusText || err.message, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  console.log(formData);

  return (
    <>
      {!loading && DrugName ? (
        <form
          onSubmit={handleSubmit}
          className="w-[95%] h-11/12 flex flex-col justify-start items-center gap-8 font-sans overflow-y-scroll"
        >
          <h1 className="w-11/12 md:w-6/12 text-2xl text-blue-600 mb-8">
            Update Drug
          </h1>
          <label htmlFor="Drug_Name" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Drug Name:</p>
            <input
              id="Drug_Name"
              type="text"
              value={DrugName}
              onChange={(e) => setDrugName(e.target.value)}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>
          <label htmlFor="Side_Effects" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Side Effects:</p>
            <textarea
              id="Side_Effects"
              type="text"
              value={SideEffects}
              onChange={(e) => setSideEffects(e.target.value)}
              className="w-full max-h-36 min-h-26 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            ></textarea>
          </label>
          <label htmlFor="Description" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Drug Description:</p>
            <textarea
              id="Description"
              type="text"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full max-h-36 min-h-26 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            ></textarea>
          </label>
          <label htmlFor="Disclaimer" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Disclaimer:</p>
            <input
              id="Disclaimer"
              type="text"
              value={Disclaimer}
              onChange={(e) => setDisclaimer(e.target.value)}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>
          <label htmlFor="Manufacturer" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Manufacturer:</p>
            <input
              id="Manufacturer"
              type="text"
              value={Manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>
          <label htmlFor="Category" className="w-11/12 md:w-6/12">
            <p className="font-medium">Category:</p>
            <select
              id="Category"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
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
              value={ConsumeType}
              onChange={(e) => setConsumeType(e.target.value)}
              className="w-full max-h-36 min-h-26 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            ></textarea>
          </label>
          <label htmlFor="Price" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Price:</p>
            <input
              id="Price"
              type="number"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>
          <label htmlFor="Expiry_Date" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Expiry Date:</p>
            <input
              id="Expiry_Date"
              type="date"
              value={ExpiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>
          <label htmlFor="Count_In_Stock" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Count In Stock:</p>
            <input
              id="Count_In_Stock"
              type="number"
              value={CountInStock}
              onChange={(e) => setCountInStock(e.target.value)}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>
          <label htmlFor="Image" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Drug Image:</p>
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
                className="md:w-5/12 w-full py-4 bg-yellow-950 rounded-3xl text-lg text-white transition-all ease-in duration-500 cursor-pointer md:float-right"
              >
                Loading...
              </button>
            ) : (
              <button className="md:w-5/12 w-full py-4 bg-yellow-900 hover:bg-yellow-950 uppercase rounded-3xl text-lg text-white transition-all ease-in duration-500 cursor-pointer md:float-right">
                Update
              </button>
            )}
          </div>
        </form>
      ) : (
        <Circle />
      )}
    </>
  );
};

export default UpdateDrug;
