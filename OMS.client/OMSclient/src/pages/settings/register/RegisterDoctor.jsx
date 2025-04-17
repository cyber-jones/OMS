/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Input2 from "../../../components/Inputs/Input2";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { oms_server_dev_url, oms_url } from "../../../utils/SD";
import useAxiosAuthorization from "../../../hooks/useAxiosAuth";
import useSpecialty from "../../../hooks/useSpecialty";






const RegisterDoctor = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigete = useNavigate();
  const { specialties, loading: loadingSpecialty } = useSpecialty();
  const axiosAuth = useAxiosAuthorization(oms_server_dev_url.doctor);

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
    try {
      const res = await axiosAuth.post("/doctor", formData);
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
  console.log(formData);







  return (
    <form
      onSubmit={handleSubmit}
      className="w-[95%] h-11/12 text-sm md:text-lg pl-3 grid grid-cols-2 md:grid-cols-3 font-sans place-content-start place-items-center gap-8 md:overflow-auto overflow-y-scroll"
    >
      <Input2
        name={"First_Name"}
        label={"First Name"}
        type={"text"}
        handleChange={handleChange}
      />
      <Input2
        name={"Middle_Name"}
        label={"Middle Name"}
        type={"text"}
        handleChange={handleChange}
      />
      <Input2
        name={"Last_Name"}
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
        name={"Cell_Phone"}
        label={"Phone"}
        type={"text"}
        handleChange={handleChange}
      />
      <label htmlFor="Relationship" className="w-full">
        <p className="font-medium">Relationship:</p>
        <select
          id="Relationship"
          onChange={(e) => handleChange(e)}
          className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        >
          <option>--select relationship</option>
          <option value={"Married"}>Married</option>
          <option value={"Single"}>Single</option>
          <option value={"Devorced"}>Devorced</option>
        </select>
      </label>
      <label htmlFor="State" className="w-full">
        <p className="font-medium">Address State:</p>
        <select
          id="State"
          onChange={(e) => handleChange(e)}
          className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        >
          <option>--select address state</option>
          <option value={"Male"}>Lagos</option>
          <option value={"Female"}>Ikeja</option>
        </select>
      </label>
      <Input2
        name={"Address"}
        label={"Home Address"}
        type={"text"}
        handleChange={handleChange}
      />
      <Input2
        name={"NIN"}
        label={"National Identity No."}
        type={"text"}
        handleChange={handleChange}
      />
      <Input2
        name={"Work_ID"}
        label={"Work ID"}
        type={"text"}
        handleChange={handleChange}
      />
      <label htmlFor="Sex" className="w-full">
        <p className="font-medium">Sex:</p>
        <select
          id="Sex"
          onChange={(e) => handleChange(e)}
          className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        >
          <option>--select sex</option>
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>
        </select>
      </label>
      <Input2
        name={"DOB"}
        label={"Date of birth"}
        type={"date"}
        handleChange={handleChange}
      />
      <Input2
        name={"MLN"}
        label={"Medical Licence No."}
        type={"text"}
        handleChange={handleChange}
      />
      <label htmlFor="Specialty_Id" className="w-full">
        <p className="font-medium">Specialty:</p>
        <select
          id="Specialty_Id"
          onChange={(e) => handleChange(e)}
          className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        >
          <option>--select specialty</option>
          {!loadingSpecialty ? (
            specialties.map((specialty, index) => (
              <option key={index} value={specialty?.specialty_Id}>
                {specialty?.name}
              </option>
            ))
          ) : (
            <option>Loading...</option>
          )}
        </select>
      </label>
      <label htmlFor="Sub_Specialty_Id" className="w-full">
        <p className="font-medium">Sub Specialty:</p>
        <select
          id="Sub_Specialty_Id"
          onChange={(e) => handleChange(e)}
          className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
        >
          <option>--select specialty</option>
          {!loadingSpecialty ? (
            specialties.map((specialty, index) => (
              <option key={index} value={specialty?.specialty_Id}>
                {specialty?.name}
              </option>
            ))
          ) : (
            <option>Loading...</option>
          )}
        </select>
      </label>
      <Input2
        name={"Clinic_Phone"}
        label={"Work Phone"}
        type={"text"}
        handleChange={handleChange}
      />
      <Input2
        name={"Certificate_Url"}
        label={"Uplaod Certificate:"}
        type={"file"}
        handleChange={handleChange}
      />
      <Input2
        name={"CT_Start"}
        label={"CT- (start)"}
        type={"time"}
        handleChange={handleChange}
      />
      <Input2
        name={"CT_End"}
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
      <div className="w-full">
        {loading ? (
          <button
            disabled={loading}
            className="w-10/12 py-4 bg-green-950 rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-pointer"
          >
            Loading...
          </button>
        ) : (
          <button className="w-10/12 py-4 bg-green-900 hover:bg-green-950 rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-pointer">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default RegisterDoctor;
