import { Link, useNavigate, useParams } from "react-router-dom";
import useAppointments from "../../hooks/useAppointment ";
import Circle from "../../components/loading/Circle";
import useSpecialty from "../../hooks/useSpecialty";
import useDoctor from "../../hooks/useDoctor";
import { oms_server_production_url, oms_url, Roles, Status } from "../../utils/SD";
import { useSnackbar } from "notistack";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";
import { useSelector } from "react-redux";
import { useAuth } from "../../utils/isAuthorized";
import { useEffect, useState } from "react";

const Appointment = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  const isAuthorized = useAuth([Roles.DOCTOR, Roles.STAFF]);
  const { loading, appointments: appointment } = useAppointments(
    null,
    null,
    id
  );
  const { specialties, loading: loadingSpecialty } = useSpecialty();
  const { doctors, loading: loadingDoctor } = useDoctor();
  const specialty = specialties !== null && appointment !== null
    ? specialties.find(
        (specialtyValue) => specialtyValue._id == appointment.specialty_Id
      )
    : null;
  const [doctor, setDoctor] = useState({});    
  const { enqueueSnackbar } = useSnackbar();
  const axiosAuth = useAxiosAuthorization(oms_server_production_url.appointment);
  const navigate = useNavigate();
  const isAuth = useAuth([Roles.ADMIN]);

  useEffect(() => {
    if (!loadingDoctor && doctors && !loading && appointment) {
      const doctor = doctors.find(
      (doctor) => doctor._id == appointment.doctor_Id
  );
    setDoctor(doctor);
    }
  }, [loadingDoctor, doctors, appointment, loading]);

  const handleDelete = async () => {
    try {
      const res = await axiosAuth.delete("/appointment/" + id);
      if (res && res?.status !== 204) {
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
      enqueueSnackbar(err?.response?.data?.message || err.message || err?.response?.statusText, {
        variant: "error",
      });
    }
  };

  const handleCancle = async () => {
    try {
      const res = await axiosAuth.get("/appointment/cancle/" + id);
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

  const handleApprove = async () => {
    try {
      const res = await axiosAuth.post("/appointment/approve/" + id, {
        name: user.email,
      });
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
      const res = await axiosAuth.post("/appointment/disapprove/" + id, {
        name: user.Email,
      });
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
        <div className="w-[90%] md:w-[50%] h-11/12 p-7 md:p-20 rounded-lg shadow-lg bg-green-200">
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
          <div className="w-full flex flex-col mt-10 h-7/12 justify-center pb-6 gap-2">
            {appointment?.status == Status.APPROVED ? (
              <button
                hidden={!isAuthorized}
                onClick={handleDisapprove}
                className="bg-yellow-700 w-full text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-yellow-950 transition duration-500 ease-in"
              >
                Disapprove <i className="bi bi-exclamation-octagon"></i>
              </button>
            ) : (
              <>
                <Link
                  to={oms_url.updateAppointment + "/" + id}
                  className="bg-purple-700 w-full text-white py-2 px-4 text-center rounded-lg font-semibold cursor-pointer hover:bg-purple-950 transition duration-500 ease-in"
                >
                  Reschedule <i className="bi bi-arrow-clockwise"></i>
                </Link>
                <button
                  hidden={!isAuthorized}
                  onClick={handleApprove}
                  className="bg-green-700 w-full text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-green-950 transition duration-500 ease-in"
                >
                  Approve <i className="bi bi-check2-circle"></i>
                </button>
                <button
                  hidden={isAuth && isAuthorized}
                  onClick={handleCancle}
                  className="bg-red-400 w-full text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-red-600 transition duration-500 ease-in"
                >
                  Cancle <i className="bi bi-x-circle"></i>
                </button>
              </>
            )}
            <button
              hidden={!isAuth}
              onClick={handleDelete}
              className="bg-red-900 w-full text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-red-950 transition duration-500 ease-in"
            >
              Delete <i className="bi bi-trash"></i>
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
