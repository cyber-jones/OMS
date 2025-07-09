import { useState } from "react";
import Input from "../Inputs/Input";
import TextArea from "../Inputs/TextArea";
import { useSnackbar } from "notistack";
import { axioAnonymous } from "../../data/axios";
import { oms_server_production_url, oms_url } from "../../utils/SD";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [passwordType, setPasswordType] = useState("password");
  const navigete = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password.length !== 4)
      return enqueueSnackbar("Password should be four digits only", {
        variant: "error",
      });

    try {
      setLoading(true);
      const res = await axioAnonymous(oms_server_production_url.patient).post(
        "/patient",
        formData
      );

      if (res.status !== 201)
        return enqueueSnackbar(res.data?.message || res.statusText, {
          variant: "error",
        });

      enqueueSnackbar(res.data?.message || res.statusText, {
        variant: "success",
      });
      setFormData({});
      navigete(oms_url.dashBoard);
    } catch (err) {
      enqueueSnackbar(err.response?.data?.message || err.response?.statusText, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-full h-10/12 gap-3 md:gap-2"
      onSubmit={(e) => handleSignup(e)}
    >
      <p className="text-lg font-bold my-2">SignUp Here!</p>
      <p className="text-[12px] text-red-600 font-bold">Please submit a correct infomation!</p>
      <div className="flex gap-2 w-full">
        <Input
          type={"text"}
          name={"first_Name"}
          label={"First Name"}
          handleChange={handleChange}
        />
        <Input
          type={"text"}
          name={"last_Name"}
          label={"Last Name"}
          handleChange={handleChange}
        />
      </div>
      <div className="flex gap-2 w-full">
        <Input
          type={"text"}
          name={"middle_Name"}
          label={"Middle Name"}
          handleChange={handleChange}
        />
        <Input
          type={"email"}
          name={"email"}
          label={"Email"}
          handleChange={handleChange}
        />
      </div>
      <div className="flex gap-2 w-full">
        <Input
          type={"text"}
          name={"cell_Phone"}
          label={"Cell Phone"}
          handleChange={handleChange}
        />
        <label htmlFor="relationship" className="w-1/2">
          <p className="font-medium">Relationship:</p>
          <select
            id="relationship"
            required
            onChange={(e) => handleChange(e)}
            className="w-full border-t-0 border-r-0 opacity-75 pt-2 focus:outline-0 px-1 border-b-1 border-l-1 border-b-gray-300 border-l-gray-300 rounded-bl-xl"
          >
            <option></option>
            <option value={"Married"}>Married</option>
            <option value={"Single"}>Single</option>
            <option value={"Devorced"}>Devorced</option>
          </select>
        </label>
      </div>
      <div className="flex gap-2 w-full">
        <Input
          type={"text"}
          name={"nin"}
          label={"National Identity No"}
          handleChange={handleChange}
        />
        <label htmlFor="state" className="w-1/2">
          <p className="font-medium">Address State:</p>
          <select
            id="state"
            required
            onChange={handleChange}
            className="w-full border-t-0 border-r-0 opacity-75 pt-2 focus:outline-0 px-1 border-b-1 border-l-1 border-b-gray-300 border-l-gray-300 rounded-bl-xl"
          >
            <option></option>
            <option value={"Lagos"}>Lagos</option>
            <option value={"Ikeja"}>Ikeja</option>
            <option value={"Abuja"}>Abuja</option>
          </select>
        </label>
      </div>
      <div className="flex gap-2 w-full">
        <Input
          type={"date"}
          name={"dob"}
          label={"Date of birth"}
          handleChange={handleChange}
        />
        <label htmlFor="Sex" className="w-1/2">
          <p className="font-medium">Sex:</p>
          <select
            id="sex"
            required
            onChange={(e) => handleChange(e)}
            className="w-full opacity-75 pt-2 border-t-0 border-r-0 focus:outline-0 px-1 border-b-1 border-l-1 border-b-gray-300 border-l-gray-300 rounded-bl-xl"
          >
            <option></option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          </select>
        </label>
      </div>
      <div className="flex gap-2 w-full">
        <TextArea
          name={"address"}
          label={"Home Address"}
          handleChange={handleChange}
        />
        <label htmlFor={"password"}>
          <p className="font-medium">Password (4 digits only):</p>
          <input
            required
            id={"password"}
            type={passwordType}
            onChange={(e) => handleChange(e)}
            className="w-full opacity-75 pt-2 border-t-0 border-r-0 focus:outline-0 px-2 border-b-1 border-l-1 border-b-gray-300 border-l-gray-300 rounded-bl-xl"
          />
          {passwordType == "text" ? (
            <i
              className="bi bi-eye absolute text-lg"
              onClick={() => setPasswordType("password")}
            ></i>
          ) : (
            <i
              className="bi bi-eye-slash absolute"
              onClick={() => setPasswordType("text")}
            ></i>
          )}
        </label>
      </div>

      <div className="w-full">
        <p className="text-red-600 float-left font-bold text-md">
          Emegency Info:
        </p>
      </div>

      <div className="flex gap-2 w-full">
        <Input
          type={"text"}
          name={"eC_FullName"}
          label={"Full Name"}
          handleChange={handleChange}
        />
        <Input
          type={"text"}
          name={"eC_Cell_Phone"}
          label={"Cell phone"}
          handleChange={handleChange}
        />
      </div>
      <div className="flex gap-2 w-full">
        <TextArea
          name={"eC_Address"}
          label={"Address"}
          handleChange={handleChange}
        />
        <div className="w-1/2">
          {loading ? (
            <button
              disabled={loading}
              className="w-full py-4 bg-yellow-950 uppercase rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-not-allowedr"
            >
              Loading...
            </button>
          ) : (
            <button className="w-full py-4 bg-yellow-900 uppercase hover:bg-yellow-950 rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-pointer">
              Submit
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Signup;
