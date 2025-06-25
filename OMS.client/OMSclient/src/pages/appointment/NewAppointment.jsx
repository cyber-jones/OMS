import { useEffect, useState } from "react";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";
import { oms_server_dev_url, oms_url } from "../../utils/SD";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import useSpecialty from "../../hooks/useSpecialty";
import useDoctor from "../../hooks/useDoctor";
import Circle from "../../components/loading/Circle";
import { useSelector } from "react-redux";

const NewAppointment = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [specialty, setSpecialty] = useState(null);
  const [time, setTime] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { authUser } = useSelector((state) => state.authUser);
  const { specialties, loading: loadingSpecialty } = useSpecialty();
  const { doctors, loading: loadingDoctor } = useDoctor();
  const axiosAuth = useAxiosAuthorization(oms_server_dev_url.appointment);
  const month = new Date().getMonth();
  const date = new Date().getDate();
  const today = `${new Date().getFullYear()}-${
    month > 9 ? month : "0" + month
  }-${date > 9 ? date : "0" + date}`;
console.log(today)

  useEffect(() => {
    setData(doctors);
  }, [doctors]);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSpecialtyChange = (e) => {
    setSpecialty(e.target.value);
    const filterDoctors = doctors.filter(
      (doctor) => doctor.specialty._id == e.target.value
    );
    setData(filterDoctors);
  };

  const handleTimeChange = (e) => {
    const timeValue = e.target.value;
    const [hours, minutes] = timeValue.split(":");
    const reqTime = hours + minutes;

    if (formData?.doctor_Id) {
      const doctor = doctors.find((doc) => doc._id == formData.doctor_Id);
      const [hrs, mins] = doctor.cT_Start.split(":");
      const [hrs1, mins1] = doctor.cT_End.split(":");
      const docCTS = hrs + mins;
      const docCTE = hrs1 + mins1;

      if (reqTime > docCTS && reqTime < docCTE) setTime(e.target.value);
      else {
        e.target.value = null;
        enqueueSnackbar(
          `Dr ${doctor.first_Name} consultation time starts from ${doctor.cT_Start}am and ends at ${doctor.cT_End}pm`
        );
      }
    }
  };

  console.log({ ...formData, specialty_Id: specialty, time: time, patient_Id: authUser?.user_Profile_Id });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosAuth.post("/appointment", {
        ...formData,
        specialty_Id: specialty,
        time: time,
        patient_Id: authUser?.user_Profile_Id
      });
      if (res && res?.status !== 201)
        return enqueueSnackbar(res.data?.message || res.statusText, { variant: "warning" });

      enqueueSnackbar(res.data.message, { variant: "success" });
      setFormData({});
      navigate(oms_url.appointment);
    } catch (err) {
      enqueueSnackbar(err.response?.data.message || err?.statusText || err.message, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[95%] flex flex-col-reverse md:flex-row-reverse h-11/12 font-sans">
      <div className="flex h-7/12 md:h-11/12 flex-col w-full md:w-[55%] justify-center items-center">
        <p className="text-blue-700 text-3xl mb-6 md:pl-0 pl-3 font-semibold mt-6 md:mt-0">
          Create An Appointment
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full h-11/12 flex pl-3 flex-col justify-start items-satrt gap-5 font-sans overflow-auto"
        >
          <label htmlFor="specialty_Id" className="w-full">
            <p className="font-medium">Specialty:</p>
            <select
              id="specialty_Id"
              required
              onChange={handleSpecialtyChange}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            >
              <option>--select specialty</option>
              {!loadingSpecialty && specialties ? (
                specialties.map((specialty, index) => (
                  <option key={index} value={specialty?._id}>
                    {specialty?.name}
                  </option>
                ))
              ) : (
                <option>Loading...</option>
              )}
            </select>
          </label>
          <label
            hidden={specialty == null ? true : false}
            htmlFor="doctor_Id"
            className="w-full"
          >
            <p className="font-medium">Doctor:</p>
            <select
              id="doctor_Id"
              required
              onChange={handleFormChange}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            >
              {data?.length > 0 ? (
                <option>--choose doctor</option>
              ) : (
                <option>No doctor with this specialty</option>
              )}
              {!loadingDoctor && data ? (
                data.map((doctor, index) => (
                  <option key={index} value={doctor?._id}>
                    {doctor?.first_Name} {doctor?.last_Name}
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
              required
              onChange={handleFormChange}
              className="w-full max-h-36 min-h-26 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            ></textarea>
          </label>
          <label htmlFor="date" className="w-full">
            <p className="font-semibold">Appointment Date:</p>
            <input
              id="date"
              type="date"
              min={today}
              required
              onChange={handleFormChange}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>
          <label
            hidden={specialty == null ? true : false}
            htmlFor="time"
            className="w-full"
          >
            <p className="font-semibold">Appointment Time:</p>
            <input
              id="time"
              type="time"
              required
              onChange={handleTimeChange}
              className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
            />
          </label>
          <div className="w-full">
            <button
              disabled={loading}
              className="md:w-5/12 w-full py-4 uppercase bg-green-900 hover:bg-green-950 rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-pointer md:float-right"
            >
              {loading ? "Creating..." : "Create Appiontment"}
            </button>
          </div>
        </form>
      </div>
      <div className="w-full md:w-[40%] h-5/12 md:h-full flex justify-center items-center">
        <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
          <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
          <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
          <calendar-month></calendar-month>
        </calendar-date>
      </div>
    </div>
  );
};

export default NewAppointment;
