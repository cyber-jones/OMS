import { useEffect, useRef, useState } from "react";
import Input3 from "../../../components/Inputs/Input3";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import { oms_server_production_url, oms_url } from "../../../utils/SD";
import useAxiosAuthorization from "../../../hooks/useAxiosAuth";
import useSpecialty from "../../../hooks/useSpecialty";
import Circle from "../../../components/loading/Circle";
import useDoctor from "../../../hooks/useDoctor";





const UpdateDoctor = () => {
  // const [formData, setFormData] = useState({
  //   First_Name: "",
  //   Middle_Name: "",
  //   Last_Name: "",
  //   Email: "",
  //   Relationship: "",
  //   Cell_Phone: "",
  //   State: "",
  //   Address: "",
  //   NIN: "",
  //   Work_ID: "",
  //   Sex: "",
  //   DOB: "",
  //   MLN: "",
  //   Specialty_Id: "",
  //   Sub_Specialty_Id: "",
  //   CT_Start: "",
  //   CT_End: "",
  //   Certificate_Url: "",
  //   Clinic_Phone: ""
  // });
  // const [FirstName, setFirstName] = useState(null);
  // const [LastName, setLastName] = useState(null);
  // const [MidddleName, setMidddleName] = useState(null);
  // const [NIN, setNIN] = useState(null);
  // const [Email, setEmail] = useState(null);
  // const [CellPhone, setCellPhone] = useState(null);
  // const [Relationship, setRelationship] = useState(null);
  // const [State, setState] = useState(null);
  // const [Address, setAddress] = useState(null);
  // const [WorkID, setWorkID] = useState(null);
  // const [SpecialtyId, setSpecialtyId] = useState(null);
  // const [SubSpecialtyId, setSubSpecialtyId] = useState(null);
  // const [Sex, setSex] = useState(null);
  // const [DOB, setDOB] = useState(null);
  // const [MLN, setMLN] = useState(null);
  // const [CT_Start, setCT_Start] = useState(null);
  // const [CT_End, setCT_End] = useState(null);
  // const [ClinicPhone, setClinicPhone] = useState(null);
  const [CertificateUrl, setCertificateUrl] = useState("");
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const navigete = useNavigate();
  const imageRef = useRef();
  const { id } = useParams();
  const { loading: loadingDoctor, doctors: doctor } = useDoctor(id);
  const { specialties, loading: loadingSpecialty } = useSpecialty();
  const axiosAuth = useAxiosAuthorization(oms_server_production_url.doctor);




  // const getDoctorById = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await axiosAuth.get("/doctor/" + id);
  //     console.log(res);
  //     if (res?.status !== 200 && !res?.data)
  //       return enqueueSnackbar(res.data?.message || res.statusText, { variant: "error" });

  //     setFirstName(res.data.first_Name);
  //     setLastName(res.data.last_Name);
  //     setMidddleName(res.data.middle_Name);
  //     setNIN(res.data.nin);
  //     setEmail(res.data.email);
  //     setCellPhone(res.data.cell_Phone);
  //     setState(res.data.state);
  //     setWorkID(res.data.work_ID);
  //     setRelationship(res.data.relationship);
  //     setSpecialtyId(res.data.specialty_Id);
  //     setSubSpecialtyId(res.data.sub_Specialty_Id);
  //     setSex(res.data.sex);
  //     setDOB(res.data.dob);
  //     setMLN(res.data.mln);
  //     setCT_Start(res.data.cT_Start);
  //     setCT_End(res.data.cT_End);
  //     setClinicPhone(res.data.clinic_Phone);
  //     setCT_Start(res.data.cT_Start);
  //     setCT_End(res.data.cT_End);
  //     setAddress(res.data.address);
  //     setCertificateUrl(res.data.certificate_Url);

  //     enqueueSnackbar(res.statusText, { variant: "success" });
  //   } catch (err) {
  //     enqueueSnackbar(err?.response?.data?.message || err?.message, { variant: "error" });
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  // useEffect(() => {
  //   getDoctorById();
  // }, []);


  // useEffect(() => {
  //   setFormData({
  //     Address: Address,
  //     CT_End: CT_End,
  //     CT_Start: CT_Start,
  //     Cell_Phone: CellPhone,
  //     DOB: DOB,
  //     Email: Email,
  //     First_Name: FirstName,
  //     Middle_Name: MidddleName,
  //     Last_Name: LastName,
  //     MLN: MLN,
  //     Relationship: Relationship,
  //     Work_ID: WorkID,
  //     Sex: Sex,
  //     Sub_Specialty_Id: SubSpecialtyId,
  //     Specialty_Id: SpecialtyId,
  //     NIN: NIN,
  //     State: State,
  //     Certificate_Url: CertificateUrl,
  //     Clinic_Phone: ClinicPhone
  //   });
  //   }, [
  //     FirstName,
  //     Address,
  //     CT_End,
  //     CellPhone,
  //     DOB,
  //     CT_Start,
  //     MidddleName,
  //     LastName,
  //     MLN,
  //     Relationship,
  //     SpecialtyId,
  //     SubSpecialtyId,
  //     NIN,
  //     CertificateUrl,
  //     State,
  //     ClinicPhone,
  //     Sex,
  //     WorkID,
  //     Email
  //   ]);

  useEffect(() => {
    if (!loadingDoctor && doctor) setFormData(doctor);
  }, [doctor, loadingDoctor]);


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
      setCertificateUrl(fileReader.result);
      setFormData({
      ...formData,
      [e.target.id]: fileReader.result,
    });
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
        return enqueueSnackbar(res.data?.message || res.statusText, { variant: "error" });

      enqueueSnackbar(res.statusText, { variant: "success" });
      navigete(oms_url.doctorList);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || err?.message, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };



  console.log(formData);

  return (
    <>
      {!loadingDoctor && doctor ? (
        <form
          onSubmit={handleSubmit}
          className="w-[95%] h-11/12 text-sm md:text-lg pl-3 grid grid-cols-2 md:grid-cols-3 font-sans place-content-start place-items-center gap-8 md:overflow-auto overflow-y-scroll"
        >
          <Input3
            name={"first_Name"}
            label={"First Name"}
            type={"text"}
            value={formData?.first_Name}
            handleChange={handleChange}
          />
          <Input3
            name={"middle_Name"}
            label={"Middle Name"}
            type={"text"}
            value={formData?.midddle_Name}
            handleChange={handleChange}
          />
          <Input3
            name={"last_Name"}
            label={"Last Name"}
            type={"text"}
            value={formData?.last_Name}
            handleChange={handleChange}
          />
          <Input3
            name={"email"}
            label={"Email"}
            type={"email"}
            value={formData?.email}
            handleChange={handleChange}
          />
          <Input3
            name={"cell_Phone"}
            label={"Phone"}
            type={"text"}
            value={formData?.CellPhone}
            handleChange={handleChange}
          />
          <label htmlFor="relationship" className="w-full">
            <p className="font-medium">Relationship:</p>
            <select
              id="relationship"
              value={formData?.Relationship}
              onChange={handleChange}
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
              value={formData?.State}
              onChange={handleChange}
              className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            >
              <option>--select address state</option>
              <option value={"Lagos"}>Lagos</option>
              <option value={"Ikeja"}>Ikeja</option>
              <option value={"Abuja"}>Abuja</option>
            </select>
          </label>
          <Input3
            name={"address"}
            label={"Home Address"}
            type={"text"}
            value={formData?.Address}
            handleChange={handleChange}
          />
          <Input3
            name={"nin"}
            label={"National Identity No."}
            type={"text"}
            value={formData?.NIN}
            handleChange={handleChange}
          />
          <Input3
            name={"work_ID"}
            label={"Work ID"}
            type={"text"}
            value={formData?.WorkID}
            handleChange={handleChange}
          />
          <label htmlFor="sex" className="w-full">
            <p className="font-medium">Sex:</p>
            <select
              id="sex"
              value={formData?.Sex}
              onChange={handleChange}
              className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            >
              <option>--select sex</option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
            </select>
          </label>
          <Input3
            name={"dob"}
            label={"Date of birth"}
            type={"date"}
            value={formData?.dob}
            handleChange={handleChange}
          />
          <Input3
            name={"MLN"}
            label={"Medical Licence No."}
            type={"text"}
            value={formData?.MLN}
            handleChange={handleChange}
          />
          <label htmlFor="specialty" className="w-full">
            <p className="font-medium">Specialty:</p>
            <select
              id="specialty"
              value={formData?.specialty}
              onChange={handleChange}
              className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            >
              <option>--select specialty</option>
              {!loadingSpecialty ? (
                specialties.map((specialty, index) => (
                  <option key={index} value={formData?.specialty?.name}>
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
              value={formData?.sub_Specialty}
              onChange={handleChange}
              className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            >
              <option>--select specialty</option>
              {!loadingSpecialty ? (
                specialties.map((specialty, index) => (
                  <option key={index} value={formData?.specialty?.name}>
                    {specialty?.name}
                  </option>
                ))
              ) : (
                <option>Loading...</option>
              )}
            </select>
          </label>
          <Input3
            name={"clinic_Phone"}
            label={"Work Phone"}
            type={"text"}
            value={formData?.ClinicPhone}
            handleChange={handleChange}
          />
          <Input3
            name={"cT_Start"}
            label={"CT- (start)"}
            type={"time"}
            value={formData?.cT_Start}
            handleChange={handleChange}
          />
          <Input3
            name={"cT_End"}
            label={"CT- (end)"}
            type={"time"}
            value={formData?.cT_End}
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
              onChange={handleImageUrl}
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
