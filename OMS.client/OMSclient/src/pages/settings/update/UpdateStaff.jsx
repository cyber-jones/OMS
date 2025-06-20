/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Input3 from "../../../components/Inputs/Input3";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import { oms_server_production_url, oms_url } from "../../../utils/SD";
import useAxiosAuthorization from "../../../hooks/useAxiosAuth";
import Circle from "../../../components/loading/Circle";








const UpdateStaff = () => {
  const [formData, setFormData] = useState({
    Staff_Id: "",
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
    Profile_Url: "",
  });
  const [Staff_Id, setStaff_Id] = useState(null);
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
  const [Sex, setSex] = useState(null);
  const [DOB, setDOB] = useState(null);
  const [ProfileUrl, setProfileUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigete = useNavigate();
  const { id } = useParams();
  const axiosAuth = useAxiosAuthorization(oms_server_production_url.staff);






  const getDoctorById = async () => {
    setLoading(true);
    try {
      const res = await axiosAuth.get("/staff/" + id);
      console.log(res);
      if (res?.status !== 200 && !res?.data)
        return enqueueSnackbar(res.statusText, { variant: "error" });

      setStaff_Id(res.data.Staff_Id);
      setFirstName(res.data.first_Name);
      setLastName(res.data.last_Name);
      setMidddleName(res.data.middle_Name);
      setNIN(res.data.nin);
      setEmail(res.data.email);
      setCellPhone(res.data.cell_Phone);
      setState(res.data.state);
      setWorkID(res.data.work_ID);
      setRelationship(res.data.relationship);
      setSex(res.data.sex);
      setDOB(res.data.dob);
      setAddress(res.data.address);
      setProfileUrl(res.data.profile_Url);

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
      Staff_Id: Staff_Id,
      Address: Address,
      Cell_Phone: CellPhone,
      DOB: DOB,
      Email: Email,
      First_Name: FirstName,
      Middle_Name: MidddleName,
      Last_Name: LastName,
      Relationship: Relationship,
      Work_ID: WorkID,
      Sex: Sex,
      NIN: NIN,
      State: State,
      Profile_Url: ProfileUrl,
    });
  }, [
    Address,
    CellPhone,
    DOB,
    Email,
    FirstName,
    MidddleName,
    LastName,
    Relationship,
    WorkID,
    Sex,
    NIN,
    State,
    ProfileUrl,
  ]);

  const handleImageUrl = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      enqueueSnackbar("Please select an image file", { variant: "error" });
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setProfileUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosAuth.put("/staff/" + id, formData);
      console.log(res);
      if (res?.status !== 205)
        return enqueueSnackbar(res.statusText, { variant: "error" });

      enqueueSnackbar(res.statusText, { variant: "success" });
      navigete(oms_url.staffList);
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
          <label htmlFor="Profile_Url" className="w-full">
            <p className="font-medium">Uplaod Profile:</p>
            <input
              id="Profile_Url"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUrl(e)}
              className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
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

export default UpdateStaff;
