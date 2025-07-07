/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import useAppointments from "../../hooks/useAppointment ";
import { Link, useNavigate } from "react-router-dom";
import { oms_url, Roles } from "../../utils/SD";
import { appointmentData } from "../../data/oms.data";
import Circle from "../../components/loading/Circle";
import useSpecialty from "../../hooks/useSpecialty";
import { useSelector } from "react-redux";
import { useAuth } from "../../utils/isAuthorized";

const Appointments = () => {
  const { authUser } = useSelector((state) => state.authUser);
  const isPatient = useAuth([Roles.PATIENT]);
  let appointment = null;
  if (authUser.roles.includes(Roles.PATIENT))
    appointment = useAppointments(authUser._id);
  else if(authUser.roles.includes(Roles.DOCTOR))
    appointment = useAppointments(null, authUser._id);
  else
    appointment = useAppointments();
  
  const { loading, appointments } = appointment;
  const { loading: loadingSpecialty, specialties } = useSpecialty();
  const navigate = useNavigate();
  const [data, setData] = useState(appointmentData);

  useEffect(() => {
    if (!loading && !loadingSpecialty && appointmentData && specialties && appointments) {
      const mutateAppointments = appointments.map((appointment) => ({
        id: appointment._id,
        specialty_Name: specialties.find(
          (specialty) => specialty._id == appointment.specialty_Id
        ).name,
        illness_Description: appointment.illness_Description,
        date: new Date(appointment.date).toDateString(),
        status: appointment.status,
        time: appointment.time,
      }));

      setData([...mutateAppointments]);
    }
  }, [appointments, loadingSpecialty, loading]);

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "specialty_Name", //access nested data with dot notation
        header: "Specialist",
        size: 100,
      },
      {
        accessorKey: "illness_Description",
        header: "Description of illness",
        size: 150,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 100,
      },
      {
        accessorKey: "date", //normal accessorKey
        header: "Date",
        size: 100,
      },
      {
        accessorKey: "time", //normal accessorKey
        header: "Time",
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => {
        navigate(oms_url.appointment + "/" + row.original.id);
      },
      sx: {
        cursor: "pointer", //you might want to change the cursor too when adding an onClick
      },
    }),
  });

  return (
    <>
      {!loading && !loadingSpecialty ? (
        <div className="w-[95%] h-11/12">
          <Link hidden={!isPatient} to={oms_url.newAppointment} className="float-right">
            <i className="bi bi-plus text-green-600 text-lg md:text-3xl border border-green-600 px-1 mr-2"></i>
          </Link>
          <p className="text-lg text-center md:text-left md:text-3xl font-semibold text-blue-500 mb-5">
            {authUser?.roles.includes(Roles.DOCTOR)
              ? "Appointments"
              : "My Appointments"}
          </p>
          {data.length > 0 && appointments ? (
            <div className="w-full h-11/12 overflow-auto">
              <MaterialReactTable table={table} />
            </div>
          ) : (
            <p className="text-center text-red-500 text-2xl mt-10">
              No appointment made
            </p>
          )}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <Circle />
        </div>
      )}
    </>
  );
};

export default Appointments;
