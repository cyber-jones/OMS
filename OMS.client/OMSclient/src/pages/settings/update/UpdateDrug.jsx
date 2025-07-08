import { useEffect, useRef, useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import { oms_server_production_url, oms_url } from "../../../utils/SD";
import useAxiosAuthorization from "../../../hooks/useAxiosAuth";
import Circle from "../../../components/loading/Circle";
import useDrug from "../../../hooks/useDrug";

const UpdateDrug = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const imageRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const axiosAuth = useAxiosAuthorization(oms_server_production_url.drug);
  const { loading: laodingDrug, drugs: drug } = useDrug(id);

  useEffect(() => {
    if (!laodingDrug && drug) setFormData(drug);
  }, [laodingDrug, drug]);

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
      setImage(fileReader.result);
      setFormData({
        ...formData,
        [e.target.id]: file,
      });
    };
    fileReader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosAuth.put("/drug/" + id, formData);
      if (res?.status !== 205)
        return enqueueSnackbar(res.data?.message || res.statusText, {
          variant: "error",
        });
      else {
        if (image) {
          const form = new FormData();
          form.append("image_file", formData?.image);
          const res2 = await axiosAuth.put("/drug/image-upload/" + id, form, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          if (res2?.status !== 205)
            return enqueueSnackbar(res.data?.message || res.statusText, {
              variant: "error",
            });

          enqueueSnackbar(res.statusText, { variant: "success" });
          return navigate(oms_url.drugList);
        } else {
          enqueueSnackbar(res.statusText, { variant: "success" });
          navigate(oms_url.drugList);
        }
      }
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || err?.message, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!laodingDrug && drug ? (
        <form
          onSubmit={handleSubmit}
          className="w-[95%] h-11/12 flex flex-col justify-start items-center gap-8 font-sans overflow-y-scroll"
        >
          <h1 className="w-11/12 md:w-6/12 text-2xl text-blue-600 mb-8">
            Update Drug
          </h1>
          <label htmlFor="drug_Name" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Drug Name:</p>
            <input
              id="drug_Name"
              type="text"
              value={formData?.drugName}
              onChange={handleChange}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>
          <label htmlFor="side_Effects" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Side Effects:</p>
            <textarea
              id="side_Effects"
              type="text"
              value={formData?.sideEffects}
              onChange={handleChange}
              className="w-full max-h-36 min-h-26 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            ></textarea>
          </label>
          <label htmlFor="description" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Drug Description:</p>
            <textarea
              id="description"
              type="text"
              value={formData?.description}
              onChange={handleChange}
              className="w-full max-h-36 min-h-26 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            ></textarea>
          </label>
          <label htmlFor="disclaimer" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Disclaimer:</p>
            <input
              id="disclaimer"
              type="text"
              value={formData?.disclaimer}
              onChange={handleChange}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>
          <label htmlFor="manufacturer" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Manufacturer:</p>
            <input
              id="manufacturer"
              type="text"
              value={formData?.manufacturer}
              onChange={handleChange}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>
          <label htmlFor="category" className="w-11/12 md:w-6/12">
            <p className="font-medium">Category:</p>
            <select
              id="category"
              value={formData?.category}
              onChange={handleChange}
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
          <label htmlFor="consume_Type" className="w-11/12 md:w-6/12">
            <p className="font-medium">Consume Type:</p>
            <textarea
              id="consume_Type"
              type="text"
              value={formData?.consumeType}
              onChange={handleChange}
              className="w-full max-h-36 min-h-26 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            ></textarea>
          </label>
          <label htmlFor="price" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Price:</p>
            <input
              id="price"
              type="number"
              value={formData?.price}
              onChange={handleChange}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>
          <label htmlFor="expiry_Date" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Expiry Date:</p>
            <input
              id="expiry_Date"
              type="date"
              value={formData?.expiryDate}
              onChange={handleChange}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>
          <label htmlFor="count_In_Stock" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Count In Stock:</p>
            <input
              id="count_In_Stock"
              type="number"
              value={formData?.countInStock}
              onChange={handleChange}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>
          <label htmlFor="image" className="w-11/12 md:w-6/12">
            <p className="font-semibold">Drug Image:</p>
            <input
              id="image"
              type="file"
              accept="image/*"
              hidden
              ref={imageRef}
              onChange={handleImageUrl}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
            <img
              onClick={() => imageRef.current.click()}
              src={
                image
                  ? image
                  : formData?.image
                  ? formData.image
                  : "/images/image-insert.png"
              }
              className="cursor-pointer"
              alt="drug-image"
            />
          </label>
          <div className="w-11/12 md:w-6/12">
            {loading ? (
              <button
                disabled={loading}
                className="md:w-5/12 w-full py-4 uppercase bg-yellow-950 rounded-3xl text-lg text-white transition-all ease-in duration-500 cursor-pointer md:float-right"
              >
                Loading...
              </button>
            ) : (
              <button className="md:w-5/12 w-full py-4 uppercase bg-yellow-900 hover:bg-yellow-950 rounded-3xl text-lg text-white transition-all ease-in duration-500 cursor-pointer md:float-right">
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
