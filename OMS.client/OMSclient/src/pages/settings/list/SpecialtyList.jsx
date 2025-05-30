/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useNavigate } from "react-router-dom";
import { oms_url } from "../../../utils/SD";
import { specialtyData } from "../../../data/oms.data";
import Circle from "../../../components/loading/Circle";
import useSpecialty from "../../../hooks/useSpecialty";

const SpecialtyList = () => {
  const { loading, specialties } = useSpecialty();
  const navigate = useNavigate();
  const [data, setData] = useState(specialtyData);

  useEffect(() => {
    if (!loading && specialties) setData(specialties);
  }, [specialties]);

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Specialty Name",
        size: 100,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 250,
      },
      {
        accessorKey: "createdAt",
        header: "Created Date",
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
        navigate(oms_url.specialty + "/" + row.original.specialty_Id);
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
          <p className="text-lg text-center md:text-left md:text-3xl font-semibold text-blue-500 mb-5">All Specialties</p>
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

export default SpecialtyList;
