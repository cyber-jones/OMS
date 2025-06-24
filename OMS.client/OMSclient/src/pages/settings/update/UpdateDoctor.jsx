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
  const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const navigete = useNavigate();
  const imageRef = useRef();
  const { id } = useParams();
  const { loading: loadingDoctor, doctors: doctor } = useDoctor(id);
  const { specialties, loading: loadingSpecialty } = useSpecialty();
  const axiosAuth = useAxiosAuthorization(oms_server_production_url.doctor);

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
    const fileSize = 2048000;
    if (!file.type.startsWith("image/")) {
      enqueueSnackbar("Please select an image file", { variant: "error" });
      return;
    }

    if (file.size > fileSize) {
      enqueueSnackbar("Image size too large { maximum - 2mb}", {
        variant: "error",
      });
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
    formData.specialty = formData.specialty._id;
    formData.sub_Specialty = formData.sub_Specialty._id;
    try {
      const res = await axiosAuth.put("/doctor/" + id, formData);

      if (res?.status !== 205)
        return enqueueSnackbar(res.data?.message || res.statusText, {
          variant: "error",
        });
      else {
        if (image) {
          const form = new FormData();
          form.append("image_file", formData?.profile_Url);
          const res2 = await axiosAuth.put(
            "/doctor/image-upload/" + id,
            form,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          if (res2?.status !== 205)
            return enqueueSnackbar(res.data?.message || res.statusText, {
              variant: "error",
            });

          enqueueSnackbar(res.statusText, { variant: "success" });
          return navigete(oms_url.patientList);
        } else {
          enqueueSnackbar(res.statusText, { variant: "success" });
          navigete(oms_url.patientList);
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
          <Input3
            name={"work_ID"}
            label={"Work ID"}
            type={"text"}
            value={formData?.work_ID}
            handleChange={handleChange}
          />
          <label htmlFor="sex" className="w-full">
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
          <Input3
            name={"MLN"}
            label={"Medical Licence No."}
            type={"text"}
            value={formData?.mln}
            handleChange={handleChange}
          />
          <label htmlFor="specialty" className="w-full">
            <p className="font-medium">Specialty:</p>
            <select
              id="specialty"
              value={formData?.specialty._id}
              onChange={handleChange}
              className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            >
              <option>--select specialty</option>
              {!loadingSpecialty && specialties ? (
                specialties.map((specialty, index) => (
                  <option key={index} value={specialty._id}>
                    {specialty.name}
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
              value={formData?.sub_Specialty._id}
              onChange={handleChange}
              className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            >
              <option>--select specialty</option>
              {!loadingSpecialty && specialties ? (
                specialties.map((specialty, index) => (
                  <option key={index} value={specialty?._id}>
                    {specialty.name}
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
            value={formData?.clinic_Phone}
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
              id="profile_Url"
              type="file"
              accept="image/*"
              hidden
              ref={imageRef}
              onChange={handleImageUrl}
              className="w-10/12 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
            <img
              onClick={() => imageRef.current.click()}
              src={
                image
                  ? image
                  : formData?.profile_Url
                  ? formData.profile_Url
                  : "/images/image-insert.png"
              }
              className="cursor-pointer"
              alt="profile-image"
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
