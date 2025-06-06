import { Link, useNavigate, useParams } from "react-router-dom";
import useAppointments from "../../hooks/useAppointment ";
import Circle from "../../components/loading/Circle";
import useSpecialty from "../../hooks/useSpecialty";
import useDoctor from "../../hooks/useDoctor";
import { oms_server_dev_url, oms_url, Roles } from "../../utils/SD";
import { useSnackbar } from "notistack";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";
import { useSelector } from "react-redux";

const Appointment = () => {
  const { id } = useParams();
const { authUser } = useSelector((state) => state.authUser);
const { user } = useSelector((state) => state.user);
const requiredRoles = [Roles.DOCTOR, Roles.STAFF];
const isAuthorized = authUser?.roles
    .map((role) => requiredRoles.includes(role))
    .find((value) => value == true);
  const { loading, appointments: appointment } = useAppointments(
    null,
    null,
    id
  );
  const { specialties, loading: loadingSpecialty } = useSpecialty();
  const { doctors, loading: loadingDoctor } = useDoctor();
    const specialty = specialties ? specialties?.find(
    (specialty) => specialty.specialty_Id == appointment.specialty_Id
  ) : null;
  const doctor = doctors?.find(
    (doctor) => doctor.doctor_Id == appointment.doctor_Id
  );
  const { enqueueSnackbar } = useSnackbar();
  const axiosAuth = useAxiosAuthorization(oms_server_dev_url.appointment);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const res = await axiosAuth.get("/appointment/" + id);
      if (res?.status !== 204 && res) {
        enqueueSnackbar(res?.data?.message || res?.statusText, {
          variant: "error",
        });
        return;
      }

      enqueueSnackbar(res?.data?.message || res?.statusText, {
        variant: "success",
      });
      navigate(oms_url.appointments);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || err.message, {
        variant: "error",
      });
    }
  };

  const handleApprove = async () => {
    try {
      const res = await axiosAuth.post("/appointment/approve/" + id, { name: user.email });
      if (res?.status !== 200 && res) {
        enqueueSnackbar(res?.data?.message || res?.statusText, {
          variant: "error",
        });
        return;
      }

      enqueueSnackbar(res?.data?.message || res?.statusText, {
        variant: "success",
      });
      navigate(oms_url.appointments);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || err.message, {
        variant: "error",
      });
    }
  };

  const handleDisapprove = async () => {
    try {
      const res = await axiosAuth.post("/appointment/disapprove/" + id, { name: user.email });
      if (res?.status !== 200 && res) {
        enqueueSnackbar(res?.data?.message || res?.statusText, {
          variant: "error",
        });
        return;
      }

      enqueueSnackbar(res?.data?.message || res?.statusText, {
        variant: "success",
      });
      navigate(oms_url.appointments);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || err.message, {
        variant: "error",
      });
    }
  };

  return (
    <>
      {!loading && appointment ? (
        <div className="w-[90%] md:w-[50%] h-11/12 p-7 md:p-20 rounded-lg shadow-lg bg-amber-200">
          <h1 className="text-xl md:text-3xl text-red-400 font-bold mb-6">
            {new Date(appointment?.date).toDateString()}
          </h1>
          <div className="flex flex-col gap-5">
            <p className="font-sans">
              <b>Doctor</b>:{" "}
              {!loadingDoctor && doctor
                ? `${doctor?.first_Name} ${doctor?.last_Name}`
                : "loading..."}
            </p>
            <p className="font-sans">
              <b>Specialty</b>:{" "}
              {!loadingSpecialty && specialty
                ? `${specialty?.name}`
                : "loading..."}
            </p>
            <p className="font-sans">
              <b>Time</b>: {appointment?.time}
            </p>
            <p className="font-sans text-red-700">
              <b className="text-black">Status</b>: {appointment?.status}
            </p>
            <p className="font-sans">
              <b>Illness Descroption</b>: {appointment?.illness_Description}
            </p>
          </div>
          <div className="w-full flex flex-col mt-10 gap-2">
            <Link
              to={oms_url.updateAppointment + "/" + id}
              className="bg-purple-700 w-full text-white py-2 px-4 text-center rounded-lg font-semibold cursor-pointer hover:bg-purple-950 transition duration-500 ease-in"
            >
              Reschedule <i className="bi bi-arrow-clockwise"></i>
            </Link>
            <button
              hidden={isAuthorized ? false : true}
              onClick={handleApprove}
              className="bg-green-700 w-full text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-green-950 transition duration-500 ease-in"
            >
              Approve <i className="bi bi-check2-circle"></i>
            </button>
            <button
              hidden={isAuthorized ? false : true}
              onClick={handleDisapprove}
              className="bg-yellow-700 w-full text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-yellow-950 transition duration-500 ease-in"
            >
              Disapprove <i className="bi bi-exclamation-octagon"></i>
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-700 w-full text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-red-950 transition duration-500 ease-in"
            >
              Cancle <i className="bi bi-x-circle"></i>
            </button>
          </div>
        </div>
      ) : (
        <Circle />
      )}
    </>
  );
};

export default Appointment;
