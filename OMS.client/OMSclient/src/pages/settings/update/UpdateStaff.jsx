import { useEffect, useRef, useState } from "react";
import Input3 from "../../../components/Inputs/Input3";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import { oms_server_production_url, oms_url } from "../../../utils/SD";
import useAxiosAuthorization from "../../../hooks/useAxiosAuth";
import Circle from "../../../components/loading/Circle";
import useStaff from "../../../hooks/useStaff";

const UpdateStaff = () => {
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigete = useNavigate();
    const imageRef = useRef();
  const { id } = useParams();
  const { loading: loadingStaff, staffs: staff } = useStaff(id);
  const axiosAuth = useAxiosAuthorization(oms_server_production_url.staff);

  useEffect(() => {
    if (!loadingStaff && staff) setFormData(staff);
  }, [loadingStaff, staff]);

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

    try {
      const res = await axiosAuth.put("/staff/" + id, formData);

      if (res?.status !== 205)
        return enqueueSnackbar(res.data?.message || res.statusText, {
          variant: "error",
        });
      else {
        if (image) {
          const form = new FormData();
          form.append("image_file", formData?.profile_Url);
          const res2 = await axiosAuth.put(
            "/staff/image-upload/" + id,
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
      {!loadingStaff && staff ? (
        <form
          onSubmit={handleSubmit}
          className="w-[95%] h-11/12 text-sm md:text-lg pl-3 grid grid-cols-2 md:grid-cols-3 font-sans place-content-start place-items-center gap-8 md:overflow-auto overflow-y-scroll"
        >
          <Input3
            name={"first_Name"}
            label={"First Name"}
            type={"text"}
            value={formData?.firstName}
            handleChange={handleChange}
          />
          <Input3
            name={"middle_Name"}
            label={"Middle Name"}
            type={"text"}
            value={formData?.midddleName}
            handleChange={handleChange}
          />
          <Input3
            name={"last_Name"}
            label={"Last Name"}
            type={"text"}
            value={formData?.lastName}
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
            value={formData?.cellPhone}
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
            value={formData?.workID}
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
          <label htmlFor="profile_Url" className="w-full">
            <p className="font-medium">Uplaod Profile:</p>
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

export default UpdateStaff;
