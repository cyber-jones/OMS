import { useRef, useState } from "react";
import Input2 from "../../../components/Inputs/Input2";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { oms_server_production_url, oms_url } from "../../../utils/SD";
import useAxiosAuthorization from "../../../hooks/useAxiosAuth";
import useSpecialty from "../../../hooks/useSpecialty";

const RegisterDoctor = () => {
  const [formData, setFormData] = useState({});
  const [CertificateUrl, setCertificateUrl] = useState("");
  const imageRef = useRef();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigete = useNavigate();
  const { specialties, loading: loadingSpecialty } = useSpecialty();
  const axiosAuth = useAxiosAuthorization(oms_server_production_url.doctor);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCertificateImageUrl = (e) => {
    const file = e.target.files[0];

    if (!file.type.startsWith("image/")) {
      enqueueSnackbar("Please select an image file", { variant: "error" });
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setCertificateUrl(fileReader.result);
      setFormData({
        ...formData,
        [e.target.id]: fileReader.result,
      });
    };
    fileReader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password.length !== 4)
      return enqueueSnackbar("Password should be four digits only", {
        variant: "error",
      });

    try {
      const res = await axiosAuth.post("/doctor", formData);

      if (res.status !== 201)
        return enqueueSnackbar(res.data?.message || res.statusText, {
          variant: "error",
        });

        enqueueSnackbar(res.data?.message || res.statusText, { variant: "success" });
        setFormData({});
        navigete(oms_url.doctorList);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || err?.message, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="w-[95%] h-11/12 flex flex-col font-sans">
      <p className="text-blue-700 text-3xl mb-6 pl-3 font-semibold">
        Register New Doctor
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full h-11/12 text-sm md:text-lg pl-3 grid grid-cols-2 md:grid-cols-3 place-content-start place-items-center gap-8 md:overflow-auto overflow-y-scroll"
      >
        <Input2
          name={"first_Name"}
          label={"First Name"}
          type={"text"}
          handleChange={handleChange}
        />
        <Input2
          name={"middle_Name"}
          label={"Middle Name"}
          type={"text"}
          handleChange={handleChange}
        />
        <Input2
          name={"last_Name"}
          label={"Last Name"}
          type={"text"}
          handleChange={handleChange}
        />
        <Input2
          name={"email"}
          label={"Email"}
          type={"email"}
          handleChange={handleChange}
        />
        <Input2
          name={"cell_Phone"}
          label={"Phone"}
          type={"text"}
          handleChange={handleChange}
        />
        <label htmlFor="Relationship" className="w-full">
          <p className="font-medium">Relationship:</p>
          <select
            id="relationship"
            onChange={(e) => handleChange(e)}
            className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
          >
            <option>--select relationship</option>
            <option value={"Married"}>Married</option>
            <option value={"Single"}>Single</option>
            <option value={"Devorced"}>Devorced</option>
          </select>
        </label>
        <label htmlFor="state" className="w-full">
          <p className="font-medium">Address State:</p>
          <select
            id="state"
            onChange={(e) => handleChange(e)}
            className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
          >
            <option>--select address state</option>
            <option value={"Lagos"}>Lagos</option>
            <option value={"Ikeja"}>Ikeja</option>
            <option value={"Abuja"}>Abuja</option>
          </select>
        </label>
        <Input2
          name={"address"}
          label={"Home Address"}
          type={"text"}
          handleChange={handleChange}
        />
        <Input2
          name={"nin"}
          label={"National Identity No."}
          type={"text"}
          handleChange={handleChange}
        />
        <Input2
          name={"work_ID"}
          label={"Work ID"}
          type={"text"}
          handleChange={handleChange}
        />
        <label htmlFor="sex" className="w-full">
          <p className="font-medium">Sex:</p>
          <select
            id="sex"
            onChange={(e) => handleChange(e)}
            className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
          >
            <option>--select sex</option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          </select>
        </label>
        <Input2
          name={"dob"}
          label={"Date of birth"}
          type={"date"}
          handleChange={handleChange}
        />
        <Input2
          name={"mln"}
          label={"Medical Licence No."}
          type={"text"}
          handleChange={handleChange}
        />
        <label htmlFor="specialty" className="w-full">
          <p className="font-medium">Specialty:</p>
          <select
            id="specialty"
            onChange={(e) => handleChange(e)}
            className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
          >
            <option>--select specialty</option>
            {!loadingSpecialty && specialties ? (
              specialties.map((specialty, index) => (
                <option key={index} value={specialty?._id}>
                  {specialty?.name}
                </option>
              ))
            ) : (
              <option>Loading...</option>
            )}
          </select>
        </label>
        <label htmlFor="sub_Specialty" className="w-full">
          <p className="font-medium">Sub Specialty:</p>
          <select
            id="sub_Specialty"
            onChange={(e) => handleChange(e)}
            className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
          >
            <option>--select specialty</option>
            {!loadingSpecialty && specialties ? (
              specialties.map((specialty, index) => (
                <option key={index} value={specialty?._id}>
                  {specialty?.name}
                </option>
              ))
            ) : (
              <option>Loading...</option>
            )}
          </select>
        </label>
        <Input2
          name={"clinic_Phone"}
          label={"Work Phone"}
          type={"text"}
          handleChange={handleChange}
        />
        <Input2
          name={"cT_Start"}
          label={"CT- (start)"}
          type={"time"}
          handleChange={handleChange}
        />
        <Input2
          name={"cT_End"}
          label={"CT- (end)"}
          type={"time"}
          handleChange={handleChange}
        />
        <Input2
          name={"password"}
          label={"Password"}
          type={"text"}
          handleChange={handleChange}
        />
        <label htmlFor="certificate_Url" className="w-full">
          <p className="font-medium">Upload Certificate:</p>
          <input
            id="certificate_Url"
            type="file"
            accept="image/*"
            hidden
            ref={imageRef}
            onChange={handleCertificateImageUrl}
            className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
          />
          <img
            onClick={() => imageRef.current.click}
            src={CertificateUrl ? CertificateUrl : "/images/image-insert.png"}
            className="cursor-pointer"
            alt="certi-image"
          />
        </label>
        <div className="w-full">
          {loading ? (
            <button
              disabled={loading}
              className="w-10/12 py-4 uppercase bg-green-950 rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-pointer"
            >
              Loading...
            </button>
          ) : (
            <button className="w-10/12 py-4 uppercase bg-green-900 hover:bg-green-950 rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-pointer">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterDoctor;
