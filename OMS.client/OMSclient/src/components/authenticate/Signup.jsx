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
  const navigete = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axioAnonymous(oms_server_production_url.patient).post(
        "/patient",
        formData
      );

      console.log(res);

      if (res?.status !== 201)
        return enqueueSnackbar(res.statusText, { variant: "error" });

      enqueueSnackbar(res.statusText, { variant: "success" });
      setFormData({});
      navigete(oms_url.dashBoard);
    } catch (err) {
      console.log(err);
      enqueueSnackbar(err.response?.data?.message || err.response?.statusText, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-full h-10/12 overflow-y-scroll gap-3 md:gap-2"
      onSubmit={(e) => handleSignup(e)}
    >
      <p className="text-2xl font-bold my-2">SignUp Here!</p>
      <div className="flex gap-2 w-full">
        <Input
          type={"text"}
          name={"First_Name"}
          label={"First Name"}
          handleChange={handleChange}
        />
        <Input
          type={"text"}
          name={"Last_Name"}
          label={"Last Name"}
          handleChange={handleChange}
        />
      </div>
      <div className="flex gap-2 w-full">
        <Input
          type={"text"}
          name={"Middle_Name"}
          label={"Middle Name"}
          handleChange={handleChange}
        />
        <Input
          type={"email"}
          name={"Email"}
          label={"Email"}
          handleChange={handleChange}
        />
      </div>
      <div className="flex gap-2 w-full">
        <Input
          type={"text"}
          name={"Cell_Phone"}
          label={"Cell Phone"}
          handleChange={handleChange}
        />
        <label htmlFor="Relationship" className="w-1/2">
          <p className="font-medium">Relationship:</p>
          <select
            id="Relationship"
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
          name={"NIN"}
          label={"National Identity No"}
          handleChange={handleChange}
        />
        <Input
          type={"text"}
          name={"State"}
          label={"State"}
          handleChange={handleChange}
        />
      </div>
      <div className="flex gap-2 w-full">
        <Input
          type={"date"}
          name={"DOB"}
          label={"Date of birth"}
          handleChange={handleChange}
        />
        <label htmlFor="Sex" className="w-1/2">
          <p className="font-medium">Sex:</p>
          <select
            id="Sex"
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
          name={"Address"}
          label={"Home Address"}
          handleChange={handleChange}
        />
        <Input
          type={"password"}
          name={"Password"}
          label={"Password (4 digits only)"}
          handleChange={handleChange}
        />
      </div>

      <div className="w-full">
        <p className="text-red-600 float-left font-bold text-md">
          Emegency Info:
        </p>
      </div>

      <div className="flex gap-2 w-full">
        <Input
          type={"text"}
          name={"EC_FullName"}
          label={"Full Name"}
          handleChange={handleChange}
        />
        <Input
          type={"text"}
          name={"EC_Cell_Phone"}
          label={"Cell phone"}
          handleChange={handleChange}
        />
      </div>
      <div className="flex gap-2 w-full">
        <TextArea
          name={"EC_Address"}
          label={"Address"}
          handleChange={handleChange}
        />
        <div className="w-1/2">
          {loading ? (
            <button
              disabled={loading}
              className="w-full py-4 bg-yellow-950 uppercase rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-pointer"
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
