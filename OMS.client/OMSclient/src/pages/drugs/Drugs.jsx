import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useDrug from "../../hooks/useDrug";
import { oms_url } from "../../utils/SD";
import Circle from "../../components/loading/Circle";

const Drugs = () => {
  const { drugs, loading } = useDrug();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(drugs);
  }, [drugs]);

  const handleSearch = (e) => {
    const drugSearched = drugs.filter((drug)=>
      drug.drug_Name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );

    setData(drugSearched);
  };

  return (
    <div className="w-[95%] h-11/12 flex flex-col justify-center items-center">
      <input
        className="px-8 focus:outline-0 ml-3 w-[80%] md:w-[60%] text-md my-3"
        type="text"
        onChange={handleSearch}
        placeholder="Search Drug"
      />
      {!loading ? (
        <div className="w-full md:w-[70%] py-3 font-serif h-11/12 grid grid-cols-1 gap-4 bg-white place-content-start place-items-center scroll-smooth overflow-y-scroll">
          {data.length > 0 ? (
            data.map((drug, index) => (
              <Link
                to={`${oms_url.drug}/${drug?.drug_Id}`}
                key={index}
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
              >
                <div className="text-sm md:text-xl text-center">
                  {drug?.drug_Name}
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-red-500 text-2xl mt-10">
              No Data found
            </p>
          )}
        </div>
      ) : (
        <Circle />
      )}
    </div>
  );
};

export default Drugs;
