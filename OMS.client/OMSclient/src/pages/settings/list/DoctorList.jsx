/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import useDoctor from "../../../hooks/useDoctor";
import { useNavigate } from "react-router-dom";
import { oms_url } from "../../../utils/SD";
import Circle from "../../../components/loading/Circle";
import { doctorData } from "../../../data/oms.data";

const DoctorList = () => {
  const { loading, doctors } = useDoctor();
  const navigate = useNavigate();
  const [data, setData] = useState(doctorData);

  useEffect(() => {
    if (!loading) setData([...doctors]);

    console.log(data);
  }, [doctors]);

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "first_Name", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "middle_Name",
        header: "Middle Name",
        size: 150,
      },
      {
        accessorKey: "last_Name",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "mln", //normal accessorKey
        header: "MLN",
        size: 150,
      },
      {
        accessorKey: "sex",
        header: "Gender",
        size: 150,
      },
      {
        accessorKey: "specialty.name",
        header: "Specialty",
        size: 150,
      },
      {
        accessorKey: "sub_Specialty.name",
        header: "Sub Specialty",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => {
        navigate(oms_url.doctor + "/" + row.original.doctor_Id);
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
          <p className="text-lg text-center md:text-left md:text-3xl font-semibold text-blue-500 mb-5">
            All Doctors
          </p>
          {data.length > 0 ? (
            <div className="w-full h-11/12 overflow-auto">
              <MaterialReactTable table={table} />
            </div>
          ) : (
            <p className="text-center text-red-500 text-2xl mt-10">
              No Data found
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

export default DoctorList;
