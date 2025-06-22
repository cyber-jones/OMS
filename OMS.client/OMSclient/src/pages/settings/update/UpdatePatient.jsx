import { useEffect, useState } from "react";
import Input3 from "../../../components/Inputs/Input3";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import { oms_server_production_url, oms_url } from "../../../utils/SD";
import useAxiosAuthorization from "../../../hooks/useAxiosAuth";
import Circle from "../../../components/loading/Circle";
import usePatient from "../../../hooks/usePatient";










const UpdatePatient = () => {
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
  //   Sex: "",
  //   DOB: "",
  //   Profile_Url: "",
  //   EC_FullName: "",
  //   EC_Cell_Phone: "",
  //   EC_Address: "",
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
  // const [Sex, setSex] = useState(null);
  // const [DOB, setDOB] = useState(null);
  // const [EC_FullName, setEC_FullName] = useState(null);
  // const [EC_Cell_Phone, setEC_Cell_Phone] = useState(null);
  // const [EC_Address, setEC_Address] = useState(null);
  const [formData, setFormData] = useState({});
  const [ProfileUrl, setProfileUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigete = useNavigate();
  const { id } = useParams();
  const { loading:loadingPatient, patients: patient } = usePatient(id);
  const axiosAuth = useAxiosAuthorization(oms_server_production_url.patient);






  // const getDoctorById = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await axiosAuth.get("/patient/" + id);
  //     console.log(res);
  //     if (res?.status !== 200 && !res.data?.patient)
  //       return enqueueSnackbar(res.data?.message || res.statusText, { variant: "error" });

  //     setFirstName(res.data.patient.first_Name);
  //     setLastName(res.data.patient.last_Name);
  //     setMidddleName(res.data.patient.middle_Name);
  //     setNIN(res.data.patient.nin);
  //     setEmail(res.data.patient.email);
  //     setCellPhone(res.data.patient.cell_Phone);
  //     setState(res.data.patient.state);
  //     setRelationship(res.data.patient.relationship);
  //     setSex(res.data.patient.sex);
  //     setDOB(res.data.patient.dob);
  //     setAddress(res.data.patient.address);
  //     setProfileUrl(res.data.patient.profile_Url);
  //     setEC_FullName(res.data.patient.eC_FullName);
  //     setEC_Cell_Phone(res.data.patient.eC_Cell_Phone);
  //     setEC_Address(res.data.patient.eC_Address);

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
  //     Cell_Phone: CellPhone,
  //     DOB: DOB,
  //     Email: Email,
  //     First_Name: FirstName,
  //     Middle_Name: MidddleName,
  //     Last_Name: LastName,
  //     Relationship: Relationship,
  //     Sex: Sex,
  //     NIN: NIN,
  //     State: State,
  //     Profile_Url: ProfileUrl,
  //     EC_Address: EC_Address,
  //     EC_FullName: EC_FullName,
  //     EC_Cell_Phone: EC_Cell_Phone,
  //   });
  // }, [
  //   Address,
  //   CellPhone,
  //   DOB,
  //   Email,
  //   FirstName,
  //   MidddleName,
  //   LastName,
  //   Relationship,
  //   Sex,
  //   NIN,
  //   State,
  //   ProfileUrl,
  //   EC_Address,
  //   EC_FullName,
  //   EC_Cell_Phone,
  // ]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    if (!loadingPatient && patient) setFormData(patient);
  }, [patient, loadingPatient]);

  const handleImageUrl = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      enqueueSnackbar("Please select an image file", { variant: "error" });
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setProfileUrl(fileReader.result);
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

    try {
      const res = await axiosAuth.put("/patient/" + id, formData);
      console.log(res);
      if (res?.status !== 205)
        return enqueueSnackbar(res.data?.message || res.statusText, { variant: "error" });

      enqueueSnackbar(res.statusText, { variant: "success" });
      navigete(oms_url.patientList);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || err?.message, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  console.log(formData);







  return (
    <>
      {!loadingPatient && patient ? (
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
            value={formData?.middle_Name}
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
            value={formData?.cell_Phone}
            handleChange={handleChange}
          />
          <label htmlFor="relationship" className="w-full">
            <p className="font-medium">Relationship:</p>
            <select
              id="relationship"
              value={formData?.relationship}
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
              value={formData?.state}
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
            value={formData?.address}
            handleChange={handleChange}
          />
          <Input3
            name={"nin"}
            label={"National Identity No."}
            type={"text"}
            value={formData?.nin}
            handleChange={handleChange}
          />
          <label htmlFor="Sex" className="w-full">
            <p className="font-medium">Sex:</p>
            <select
              id="sex"
              value={formData?.sex}
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
          <label htmlFor="profile_Url" className="w-full">
            <p className="font-medium">Uplaod Profile:</p>
            <input
              id="profile_Url"
              type="file"
              accept="image/*"
              onChange={handleImageUrl}
              className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>

          <div className="w-full">
            <p className="text-red-600 float-left font-bold text-md">
              Emegency Info:
            </p>
          </div>
          
          <Input3
            name={"eC_FullName"}
            label={"Full Name"}
            type={"text"}
            value={formData?.eC_FullName}
            handleChange={handleChange}
          />
          <Input3
            name={"eC_Cell_Phone"}
            label={"Phone"}
            type={"text"}
            value={formData?.eC_Cell_Phone}
            handleChange={handleChange}
          />
          <Input3
            name={"eC_Address"}
            label={"Full Name"}
            type={"text"}
            value={formData?.eC_Address}
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

export default UpdatePatient;
