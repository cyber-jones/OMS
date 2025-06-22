import { Link } from "react-router-dom";
import Circle from "../../components/loading/Circle";
import useSpecialty from "../../hooks/useSpecialty";
import { oms_url } from "../../utils/SD";
import { useEffect, useState } from "react";

const Specialties = () => {
  const { specialties, loading } = useSpecialty();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!loading && specialties) setData(specialties);
  }, [specialties, loading]);

  const handleSearch = (e) => {
    const specialtySearched = specialties.filter((specialty) =>
      specialty.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );

    setData(specialtySearched);
  };

  return (
    <div className="w-[95%] h-11/12 flex flex-col justify-center items-center">
      <input
        className="px-8 focus:outline-0 ml-3 border-0 w-[80%] md:w-[60%] text-md my-3"
        type="text"
        onChange={handleSearch}
        placeholder="Search Specialty"
      />
      {!loading ? (
        <div className="w-full md:w-[70%] py-3 h-11/12 font-serif grid grid-cols-1 gap-4 bg-white place-content-start place-items-center scroll-smooth overflow-y-scroll">
          {data.length > 0 ? (
            data.map((specialty, index) => (
              <Link
                to={`${oms_url.specialty}/${specialty._id}`}
                key={index}
                className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
              >
                <div className="text-sm md:text-xl text-center">
                  {specialty.name}
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

export default Specialties;
