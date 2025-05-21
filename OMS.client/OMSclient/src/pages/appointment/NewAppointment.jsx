import { useState } from "react";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";
import { oms_server_dev_url, oms_url } from "../../utils/SD";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import useSpecialty from "../../hooks/useSpecialty";

const NewAppointment = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { specialties, loading: loadingSpecialty } = useSpecialty();
  const axiosAuth = useAxiosAuthorization(oms_server_dev_url.appointment);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosAuth.post("/", { formData });
      if (res?.status !== 201)
        return enqueueSnackbar(res.statusText, { variant: "error" });

      enqueueSnackbar(res.data.message, { variant: "success" });
      setFormData({});
      navigate(oms_url.appointment);
    } catch (err) {
      enqueueSnackbar(err?.response?.statusText, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[95%] flex flex-col-reverse md:flex-row-reverse h-11/12 font-sans">
      <div className="flex h-9/12 md:h-11/12 flex-col w-full md:w-[55%] justify-center items-center">
        <p className="text-blue-700 text-3xl mb-6 md:pl-0 pl-3 font-semibold mt-6 md:mt-0">
          Create An Appointment
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full h-11/12 flex pl-3 flex-col justify-start items-satrt gap-8 font-sans"
        >
          <label htmlFor="Specialty_Id" className="w-full">
            <p className="font-medium">Specialty:</p>
            <select
              id="Specialty_Id"
              onChange={handleChange}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
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
          <label htmlFor="illness_Description" className="w-full">
            <p className="font-semibold">Describe illness:</p>
            <textarea
              id="illness_Description"
              type="text"
              onChange={handleChange}
              className="w-full max-h-36 min-h-26 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            ></textarea>
          </label>
          <label htmlFor="date" className="w-full">
            <p className="font-semibold">Appointment Date:</p>
            <input
              id="date"
              type="datetime-local"
              onChange={(e) => handleChange(e)}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>
          <div className="w-11/12">
            {loading ? (
              <button
                disabled={loading}
                className="md:w-5/12 w-full py-4 uppercase bg-yellow-950 rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-pointer md:float-right"
              >
                Loading...
              </button>
            ) : (
              <button className="md:w-5/12 w-full py-4 uppercase bg-green-900 hover:bg-green-950 rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-pointer md:float-right">
                Create Appiontment
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="w-full md:w-[40%] h-3/12 md:h-full flex justify-center items-center">
        <img
          src="/images/calender.webp"
          className="md:pr-10 w-[50%]"
          alt="drug-img"
        />
      </div>
    </div>
  );
};

export default NewAppointment;
