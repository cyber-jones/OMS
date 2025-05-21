import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import useDoctor from "../../../hooks/useDoctor";
import { Link } from "react-router-dom";
import { oms_url } from "../../../utils/SD";
import Circle from "../../../components/loading/Circle";

const DoctorList = () => {
  const { loading, doctors } = useDoctor();

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
        size: 200,
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


  console.log(loading, doctors);
  const table = useMaterialReactTable({
    columns,
    doctors, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
    <>
      { !loading ? (
        <div className="w-[95%] h-11/12 text-center">
          <MaterialReactTable table={table} />
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
