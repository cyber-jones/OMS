/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import useAppointments from "../../hooks/useAppointment ";
import { Link, useNavigate } from "react-router-dom";
import { oms_url } from "../../utils/SD";
import { appointmentData } from "../../data/oms.data";
import Circle from "../../components/loading/Circle";


const Appointments = () => {
    const { loading, appointments } = useAppointments();
      const navigate = useNavigate();
      const [data, setData] = useState(appointmentData);
    
      useEffect(() => {
        if (!loading) {
          const mutateAppointments = appointments.map( appointment => ({
            id: appointment._id,
            specialty_Name: appointment.specialty_Id,
            illness_Description: appointment.illness_Description,
            date: new Date(appointment.date).toDateString()
          }));

          setData([...mutateAppointments]);
        }
      }, [appointments]);


  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "specialty_Name", //access nested data with dot notation
        header: "Specialty Name",
        size: 100,
      },
      {
        accessorKey: "illness_Description",
        header: "Description of illness",
        size: 250,
      },
      {
        accessorKey: "date", //normal accessorKey
        header: "Date",
        size: 100,
      }
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
      {!loading ? (
        <div className="w-[95%] h-11/12">
          <Link to={oms_url.newAppointment} className="float-right"><i className="bi bi-plus text-green-600 text-lg md:text-3xl border border-green-600 px-1 mr-2"></i></Link>
          <p className="text-lg text-center md:text-left md:text-3xl font-semibold text-blue-500 mb-5">
            My Appointments
          </p>
          {data.length > 0 && appointments.length > 0 ? (
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
