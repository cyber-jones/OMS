import { useEffect, useState } from "react";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";
import { oms_server_dev_url, oms_url, Roles } from "../../utils/SD";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import useSpecialty from "../../hooks/useSpecialty";
import useDoctor from "../../hooks/useDoctor";
import Circle from "../../components/loading/Circle";
import { useSelector } from "react-redux";
import useAppointments from "../../hooks/useAppointment ";

const UpdateAppointment = () => {
  const { id } = useParams();
  const { appointments: appointment, loading: loadingAppointment } =
    useAppointments(null, null, id);
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [specialty, setSpecialty] = useState();
  const [time, setTime] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { authUser } = useSelector((state) => state.authUser);
  const requiredRoles = [Roles.ADMIN, Roles.DOCTOR, Roles.STAFF];
  const isAuthorized = authUser?.roles
    .map((role) => requiredRoles.includes(role))
    .find((value) => value == true);
  const { specialties, loading: loadingSpecialty } = useSpecialty();
  const { doctors, loading: loadingDoctor } = useDoctor();
  const axiosAuth = useAxiosAuthorization(oms_server_dev_url.appointment);
  const month = new Date().getMonth();
  const date = new Date().getDate();
  const today = `${new Date().getFullYear()}-${
    month > 9 ? month : "0" + month
  }-${date > 9 ? date : "0" + date}`;

  useEffect(() => {
    if (!loadingAppointment && appointment && !loadingDoctor && doctors) {
      setData(doctors);
      setTime(appointment.time);
      setSpecialty(appointment.specialty_Id);
      setFormData({
        doctor_Id: appointment.doctor_Id,
        illness_Description: appointment.illness_Description,
        date: appointment.date,
      });
      const filterDoctors = doctors.filter(
        (doctor) => doctor.specialty_Id == appointment.specialty_Id
      );
      setData(filterDoctors);
    }
  }, [doctors, loadingDoctor, loadingAppointment, appointment]);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSpecialtyChange = (e) => {
    setSpecialty(e.target.value);
    const filterDoctors = doctors.filter(
      (doctor) => doctor.specialty_Id == e.target.value
    );
    setData(filterDoctors);
  };

  const handleTimeChange = (e) => {
    const timeValue = e.target.value;
    const [hours, minutes] = timeValue.split(":");
    const reqTime = hours + minutes;

    if (formData?.doctor_Id) {
      const doctor = doctors.find((doc) => doc.doctor_Id == formData.doctor_Id);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosAuth.put("/appointment", {
        ...formData,
        specialty_Id: specialty,
        time: time,
        patient_Id: authUser?.user_Profile_Id,
      });
      if (res?.status !== 204)
        return enqueueSnackbar(res.data.message || res.statusText, {
          variant: "error",
        });

      enqueueSnackbar(res.data.message, { variant: "success" });
      setFormData({});
      navigate(oms_url.appointment);
    } catch (err) {
      enqueueSnackbar(err.response.data.message || err.response.statusText, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!loadingAppointment && appointment ? (
        <>
          <div className="w-[95%] flex flex-col-reverse md:flex-row-reverse h-11/12 font-sans">
            <div className="flex h-9/12 md:h-11/12 flex-col w-full md:w-[55%] justify-center items-center">
              <p className="text-blue-700 text-3xl mb-6 md:pl-0 pl-3 font-semibold mt-6 md:mt-0">
                Reschedule Appointment
              </p>
              <form
                onSubmit={handleSubmit}
                className="w-full h-full flex pl-3 flex-col justify-start items-satrt gap-5 font-sans overflow-auto"
              >
                <label htmlFor="Specialty_Id" className="w-full">
                  <p className="font-medium">
                    Specialty: <b className="text-red-800">*</b>
                  </p>
                  <select
                    disabled={isAuthorized ? false : true}
                    id="Specialty_Id"
                    value={specialty}
                    required
                    onChange={handleSpecialtyChange}
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
                <label
                  hidden={specialty == null ? true : false}
                  htmlFor="doctor_Id"
                  className="w-full"
                >
                  <p className="font-medium">
                    Doctor: <b className="text-red-800">*</b>
                  </p>
                  <select
                    disabled={isAuthorized ? false : true}
                    id="doctor_Id"
                    value={formData?.doctor_Id}
                    required
                    onChange={handleFormChange}
                    className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
                  >
                    {data.length > 0 ? (
                      <option>--choose doctor</option>
                    ) : (
                      <option>No doctor with this specialty</option>
                    )}
                    {!loadingDoctor ? (
                      data.map((doctor, index) => (
                        <option key={index} value={doctor?.doctor_Id}>
                          {doctor?.first_Name} {doctor?.last_Name}
                        </option>
                      ))
                    ) : (
                      <option>Loading...</option>
                    )}
                  </select>
                </label>
                <label htmlFor="illness_Description" className="w-full">
                  <p className="font-semibold">
                    Describe illness: <b className="text-red-800">*</b>
                  </p>
                  <textarea
                    disabled={isAuthorized ? false : true}
                    id="illness_Description"
                    type="text"
                    value={formData?.illness_Description}
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
                    value={formData?.date}
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
                    value={time}
                    required
                    onChange={handleTimeChange}
                    className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 border-gray-300 bg-gray-200"
                  />
                </label>
                <div className="w-11/12">
                  <button
                    disabled={loading}
                    className="md:w-5/12 w-full py-4 uppercase bg-green-900 hover:bg-green-950 rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-pointer md:float-right"
                  >
                    {loading ? <Circle /> : null} Update Appiontment
                  </button>
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
        </>
      ) : (
        <Circle />
      )}
    </>
  );
};

export default UpdateAppointment;
