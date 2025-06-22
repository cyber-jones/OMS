/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useNavigate } from "react-router-dom";
import { oms_url } from "../../../utils/SD";
import { patientData } from "../../../data/oms.data";
import Circle from "../../../components/loading/Circle";
import useStaff from "../../../hooks/useStaff";

const StaffList = () => {
  const { loading, staffs } = useStaff();
    const navigate = useNavigate();
    const [data, setData] = useState(patientData);
  
    useEffect(() => {
      if (!loading && staffs) setData(staffs);
    }, [staffs]);
  
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
        accessorKey: "nin", //normal accessorKey
        header: "NIN",
        size: 150,
      },
      {
        accessorKey: "sex",
        header: "Gender",
        size: 150,
      },
      {
        accessorKey: "relationship",
        header: "Relationship",
        size: 150,
      },
      {
        accessorKey: "cell_Phone",
        header: "Phone",
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
          navigate(oms_url.profile + "/staff/" + row.original._id);
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
          <p className="text-lg text-center md:text-left md:text-3xl font-semibold text-blue-500 mb-5">All Staff</p>
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

export default StaffList;
