import React, { useState } from "react";
import Input2 from "../../../components/Inputs/Input2";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { oms_server_production_url, oms_url } from "../../../utils/SD";
import useAxiosAuthorization from "../../../hooks/useAxiosAuth";
import { axioAnonymous } from "../../../data/axios";

const RegisterStaff = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigete = useNavigate();
  const axiosAuth = useAxiosAuthorization(oms_server_production_url.staff);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // useEffect(()=> {
  //   let val = Object.keys(formData);
  //   val.forEach(key => {
  //     localStorage.setItem(key, "");
  //   });

  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { password, ...data } = formData;
    try {
      const res = await axiosAuth.post("/staff", data);

      if (res.status !== 201)
        return enqueueSnackbar(res.data?.message || res.statusText, {
          variant: "error",
        });
      else {
        const body = {
          Email: formData.email,
          Password: password,
          AccType: "staff",
          Role: "staff",
          User_Profile_Id: res.data?.patient._id,
        };

        console.log(body);
        const res2 = await axioAnonymous(oms_server_production_url.auth).post(
          "/user/register",
          body
        );

        if (res2.status !== 201)
          return enqueueSnackbar(res.data?.message || res.statusText, {
            variant: "error",
          });

        enqueueSnackbar(res.statusText, { variant: "success" });
        setFormData({});
        navigete(oms_url.doctorList);
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
    <div className="w-[95%] h-11/12 flex flex-col font-sans">
      <p className="text-blue-700 text-3xl mb-6 pl-3 font-semibold">
        Register New Staff
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full h-11/12 text-sm md:text-lg pl-3 grid grid-cols-2 md:grid-cols-3 font-sans  place-content-start place-items-center gap-8 md:overflow-auto overflow-y-scroll"
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
        <label htmlFor="relationship" className="w-full">
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
          name={"password"}
          label={"Password"}
          type={"text"}
          handleChange={handleChange}
        />
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

export default RegisterStaff;
