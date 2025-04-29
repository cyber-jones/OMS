/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Input3 from "../../../components/Inputs/Input3";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import { oms_server_dev_url, oms_url } from "../../../utils/SD";
import useAxiosAuthorization from "../../../hooks/useAxiosAuth";
import useSpecialty from "../../../hooks/useSpecialty";
import Circle from "../../../components/loading/Circle";





const UpdateDoctor = () => {
  const [formData, setFormData] = useState({
    Doctor_Id: "",
    First_Name: "",
    Middle_Name: "",
    Last_Name: "",
    Email: "",
    Relationship: "",
    Cell_Phone: "",
    State: "",
    Address: "",
    NIN: "",
    Work_ID: "",
    Sex: "",
    DOB: "",
    MLN: "",
    Specialty_Id: "",
    Sub_Specialty_Id: "",
    CT_Start: "",
    CT_End: "",
    Certificate_Url: "",
    Clinic_Phone: ""
  });
  const [Doctor_Id, setDoctor_Id] = useState(null);
  const [FirstName, setFirstName] = useState(null);
  const [LastName, setLastName] = useState(null);
  const [MidddleName, setMidddleName] = useState(null);
  const [NIN, setNIN] = useState(null);
  const [Email, setEmail] = useState(null);
  const [CellPhone, setCellPhone] = useState(null);
  const [Relationship, setRelationship] = useState(null);
  const [State, setState] = useState(null);
  const [Address, setAddress] = useState(null);
  const [WorkID, setWorkID] = useState(null);
  const [SpecialtyId, setSpecialtyId] = useState(null);
  const [SubSpecialtyId, setSubSpecialtyId] = useState(null);
  const [Sex, setSex] = useState(null);
  const [DOB, setDOB] = useState(null);
  const [MLN, setMLN] = useState(null);
  const [CT_Start, setCT_Start] = useState(null);
  const [CT_End, setCT_End] = useState(null);
  const [ClinicPhone, setClinicPhone] = useState(null);
  const [CertificateUrl, setCertificateUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigete = useNavigate();
  const imageRef = useRef();
  const { id } = useParams();
  const { specialties, loading: loadingSpecialty } = useSpecialty();
  const axiosAuth = useAxiosAuthorization(oms_server_dev_url.doctor);




  const getDoctorById = async () => {
    setLoading(true);
    try {
      const res = await axiosAuth.get("/doctor/" + id);
      console.log(res);
      if (res?.status !== 200 && !res?.data)
        return enqueueSnackbar(res.statusText, { variant: "error" });

      setDoctor_Id(res.data.doctor_Id)
      setFirstName(res.data.first_Name);
      setLastName(res.data.last_Name);
      setMidddleName(res.data.middle_Name);
      setNIN(res.data.nin);
      setEmail(res.data.email);
      setCellPhone(res.data.cell_Phone);
      setState(res.data.state);
      setWorkID(res.data.work_ID);
      setRelationship(res.data.relationship);
      setSpecialtyId(res.data.specialty_Id);
      setSubSpecialtyId(res.data.sub_Specialty_Id);
      setSex(res.data.sex);
      setDOB(res.data.dob);
      setMLN(res.data.mln);
      setCT_Start(res.data.cT_Start);
      setCT_End(res.data.cT_End);
      setClinicPhone(res.data.clinic_Phone);
      setCT_Start(res.data.cT_Start);
      setCT_End(res.data.cT_End);
      setAddress(res.data.address);
      setCertificateUrl(res.data.certificate_Url);

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
      Doctor_Id: Doctor_Id,
      Address: Address,
      CT_End: CT_End,
      CT_Start: CT_Start,
      Cell_Phone: CellPhone,
      DOB: DOB,
      Email: Email,
      First_Name: FirstName,
      Middle_Name: MidddleName,
      Last_Name: LastName,
      MLN: MLN,
      Relationship: Relationship,
      Work_ID: WorkID,
      Sex: Sex,
      Sub_Specialty_Id: SubSpecialtyId,
      Specialty_Id: SpecialtyId,
      NIN: NIN,
      State: State,
      Certificate_Url: CertificateUrl,
      Clinic_Phone: ClinicPhone
    });
    }, [
      FirstName,
      Address,
      CT_End,
      CellPhone,
      DOB,
      CT_Start,
      MidddleName,
      LastName,
      MLN,
      Relationship,
      SpecialtyId,
      SubSpecialtyId,
      NIN,
      CertificateUrl,
      State,
      ClinicPhone,
      Sex,
      WorkID,
      Email
    ]);


  const handleImageUrl = (e) => {
    const file = e.target.files[0];

    if (!file.type.startsWith("image/")) {
      enqueueSnackbar("Please select an image file", { variant: "error" });
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setCertificateUrl(fileReader.result);
    }
    fileReader.readAsDataURL(file);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosAuth.put("/doctor/"+id, formData);
      console.log(res);
      if (res?.status !== 205)
        return enqueueSnackbar(res.statusText, { variant: "error" });

      enqueueSnackbar(res.statusText, { variant: "success" });
      navigete(oms_url.doctorList);
    } catch (err) {
      enqueueSnackbar(err?.response?.statusText || err.message, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };



  console.log(formData);

  return (
    <>
      {!loading && FirstName ? (
        <form
          onSubmit={handleSubmit}
          className="w-[95%] h-11/12 text-sm md:text-lg pl-3 grid grid-cols-2 md:grid-cols-3 font-sans place-content-start place-items-center gap-8 md:overflow-auto overflow-y-scroll"
        >
          <Input3
            name={"First_Name"}
            label={"First Name"}
            type={"text"}
            value={FirstName}
            handleChange={(e) => setFirstName(e.target.value)}
          />
          <Input3
            name={"Middle_Name"}
            label={"Middle Name"}
            type={"text"}
            value={MidddleName}
            handleChange={(e) => setMidddleName(e.target.value)}
          />
          <Input3
            name={"Last_Name"}
            label={"Last Name"}
            type={"text"}
            value={LastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <Input3
            name={"Email"}
            label={"Email"}
            type={"email"}
            value={Email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <Input3
            name={"Cell_Phone"}
            label={"Phone"}
            type={"text"}
            value={CellPhone}
            handleChange={(e) => setCellPhone(e.target.value)}
          />
          <label htmlFor="Relationship" className="w-full">
            <p className="font-medium">Relationship:</p>
            <select
              id="Relationship"
              value={Relationship}
              onChange={(e) => setRelationship(e.target.value)}
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
              value={State}
              onChange={(e) => setState(e.target.value)}
              className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            >
              <option>--select address state</option>
              <option value={"Lagos"}>Lagos</option>
              <option value={"Ikeja"}>Ikeja</option>
              <option value={"Abuja"}>Abuja</option>
            </select>
          </label>
          <Input3
            name={"Address"}
            label={"Home Address"}
            type={"text"}
            value={Address}
            handleChange={(e) => setAddress(e.target.value)}
          />
          <Input3
            name={"NIN"}
            label={"National Identity No."}
            type={"text"}
            value={NIN}
            handleChange={(e) => setNIN(e.target.value)}
          />
          <Input3
            name={"Work_ID"}
            label={"Work ID"}
            type={"text"}
            value={WorkID}
            handleChange={(e) => setWorkID(e.target.value)}
          />
          <label htmlFor="Sex" className="w-full">
            <p className="font-medium">Sex:</p>
            <select
              id="Sex"
              value={Sex}
              onChange={(e) => setSex(e.target.value)}
              className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            >
              <option>--select sex</option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
            </select>
          </label>
          <Input3
            name={"DOB"}
            label={"Date of birth"}
            type={"date"}
            value={DOB}
            handleChange={(e) => setDOB(e.target.value)}
          />
          <Input3
            name={"MLN"}
            label={"Medical Licence No."}
            type={"text"}
            value={MLN}
            handleChange={(e) => setMLN(e.target.value)}
          />
          <label htmlFor="Specialty_Id" className="w-full">
            <p className="font-medium">Specialty:</p>
            <select
              id="Specialty_Id"
              value={SpecialtyId}
              onChange={(e) => setSpecialtyId(e.target.value)}
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
              value={SubSpecialtyId}
              onChange={(e) => setSubSpecialtyId(e.target.value)}
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
          <Input3
            name={"Clinic_Phone"}
            label={"Work Phone"}
            type={"text"}
            value={ClinicPhone}
            handleChange={(e) => ClinicPhone(e.target.value)}
          />
          <Input3
            name={"CT_Start"}
            label={"CT- (start)"}
            type={"time"}
            value={CT_Start}
            handleChange={(e) => setCT_Start(e.target.value)}
          />
          <Input3
            name={"CT_End"}
            label={"CT- (end)"}
            type={"time"}
            value={CT_End}
            handleChange={(e) => setCT_End(e.target.value)}
          />
          <label htmlFor="Certificate_Url" className="w-full">
          <p className="font-medium">Upload Certificate:</p>
            <input
              id="Certificate_Url"
              type="file"
              accept="image/*"
              hidden
              ref={imageRef}
              onChange={(e) => handleImageUrl(e)}
              className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
            <img
              onClick={() => imageRef.current.click()}
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
              <button className="w-10/12 py-4 uppercase bg-yellow-900 hover:bg-yellow-950 rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-pointer">
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

export default UpdateDoctor;
