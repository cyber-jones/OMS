/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useNavigate } from "react-router-dom";
import { oms_url } from "../../../utils/SD";
import useDrug from "../../../hooks/useDrug";
import { drugData } from "../../../data/oms.data";
import Circle from "../../../components/loading/Circle";

const DrugList = () => {
  const { loading, drugs } = useDrug();
  const navigate = useNavigate();
  const [data, setData] = useState(drugData);

  useEffect(() => {
    if (!loading) setData([...drugs]);
  }, [drugs]);

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "drug_Name", //access nested data with dot notation
        header: "Drug Name",
        size: 150,
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 150,
      },
      {
        accessorKey: "count_In_Stock",
        header: "Count In Stock",
        size: 150,
      },
      {
        accessorKey: "manufacturer", //normal accessorKey
        header: "Manufacturer",
        size: 150,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 150,
      },
      {
        accessorKey: "created_By",
        header: "Created By",
        size: 150,
      },
      {
        accessorKey: "expiry_Date",
        header: "Expiry Date",
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
        navigate(oms_url.drug + "/" + row.original.drug_Id);
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
          <p className="text-lg text-center md:text-left md:text-3xl font-semibold text-blue-500 mb-5">All Drugs</p>
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

export default DrugList;
