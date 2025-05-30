import { useParams } from "react-router-dom";
import useAppointments from "../../hooks/useAppointment ";
import Circle from "../../components/loading/Circle";
import useSpecialty from "../../hooks/useSpecialty";
import useDoctor from "../../hooks/useDoctor";

const Appointment = () => {
  const { id } = useParams();
  const { loading, appointments: appointment } = useAppointments(
    null,
    null,
    id
  );
  const { specialties, loading: loadingSpecialty } = useSpecialty();
  const { doctors, loading: loadingDoctor } = useDoctor();
  const specialty = specialties.find(specialty => specialty.specialty_Id == appointment.specialty_Id);
  const doctor = doctors.find(doctor => doctor.doctor_Id == appointment.doctor_Id);

  return (
    <>
      {!loading && appointment ? (
        <div className="w-[90%] md:w-[50%] h-11/12 p-7 md:p-20 rounded-lg shadow-lg">
          <h1 className="text-xl md:text-3xl text-red-400 font-bold mb-6">
            {new Date(appointment?.date).toDateString()}
          </h1>
          <div className="flex flex-col gap-5">
            <p className="font-sans"><b>Doctor</b>: { !loadingDoctor && doctor ? `${doctor.first_Name} ${doctor.last_Name}` : "loading..."}</p>
            <p className="font-sans"><b>Specialty</b>: { !loadingSpecialty && specialty ? `${specialty.name}` : "loading..."}</p>
            <p className="font-sans"><b>Time</b>: {appointment?.time}</p>
            <p className="font-sans"><b>Illness Descroption</b>: {appointment?.illness_Description}</p>
          </div>
        </div>
      ) : (
        <Circle />
      )}
    </>
  );
};

export default Appointment;
