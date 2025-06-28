import { useEffect, useState } from "react";
import useDoctorLog from "../../hooks/useDoctorLog";
import useStaffLog from "../../hooks/useStaffLog";
import usePatientLog from "../../hooks/usePatientLog";
import useDrugLog from "../../hooks/useDrugLog";
import useAppointmentLog from "../../hooks/useAppointmentLog";
import useAuthLog from "../../hooks/useAuthLog";

const Log = () => {
  const { loading: loadingDoctorLogs, logs: doctorLogs } = useDoctorLog();
  const { loading: loadingStaffLogs, logs: staffLogs } = useStaffLog();
  const { loading: loadingPatientLogs, logs: patientLogs } = usePatientLog();
  const { loading: loadingDrugLogs, logs: drugLogs } = useDrugLog();
  const { loading: loadingAppointmentLogs, logs: appointmentLogs } =
    useAppointmentLog();
  const { loading: loadingAuthLogs, logs: authLogs } = useAuthLog();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (
      (!loadingDoctorLogs &&
        doctorLogs &&
        loadingStaffLogs &&
        staffLogs &&
        loadingPatientLogs &&
        patientLogs &&
        loadingDrugLogs &&
        drugLogs &&
        loadingAppointmentLogs,
      appointmentLogs,
      loadingAuthLogs && authLogs)
    ) {
      const allLogs = [
        ...doctorLogs,
        ...staffLogs,
        ...patientLogs,
        ...drugLogs,
        ...appointmentLogs,
        ...authLogs,
      ];
      const newArrLogs = allLogs.map((log) => ({
        blame: log.blame,
        description: log.description,
        victim: log.victim,
        createdAt: log.createdAt,
        color: log.description.includes("Update")
          ? "text-yellow-600"
          : log.description.includes("New")
          ? "text-green-600"
          : log.description.includes("Delete") ||
            log.description.includes("Cancle")
          ? "text-red-600"
          : "text-pint-600",
      }));
      // console.log("arr", newArrLogs);
      setData(newArrLogs);
    }
    return;
  }, [
    loadingDoctorLogs,
    doctorLogs,
    staffLogs,
    loadingStaffLogs,
    loadingPatientLogs,
    patientLogs,
    loadingDrugLogs,
    drugLogs,
    loadingAppointmentLogs,
    appointmentLogs,
    loadingAuthLogs,
    authLogs,
  ]);

  return (
    <div className="w-[95%] md:w-[90%] h-full pt-1">
      <h1 className="text-lg md:text-2xl h-1/12 text-blue-500">
        Logs: Event Tracker
      </h1>
      <div className="w-[95%] md:w-[90%] h-11/12 flex flex-col gap-2 font-sans overflow-auto">
        <div className="flex md:text-[10px] lg:text-sm text-[10px] justify-around items-center border border-t-0 border-l-0 border-r-0 border-b-gray-500 py-2">
          <div className="w-3/12">Blame</div>
          <div className="w-3/12">Description</div>
          <div className="w-3/12">Victim</div>
          <div className="w-3/12">Date</div>
        </div>
        {!loadingDoctorLogs ? (
          data ? (
            data.map((log, index) => (
              <div
                key={index}
                className="flex md:text-[10px] lg:text-sm text-[8px] justify-around items-center border border-t-0 border-l-0 border-r-0 border-b-gray-500"
              >
                <div className="w-4/12 text-blue-400">{log.blame}</div>
                <div className={`w-3/12 ${log.color}`}>{log.description}</div>
                <div className="w-4/12 text-purple-900">{log.victim}</div>
                <div className="w-1/12">
                  {new Date(log.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))
          ) : (
            <p className="text-red-500">No Logs found</p>
          )
        ) : (
          <p>Loading logs...</p>
        )}
      </div>
    </div>
  );
};

export default Log;
