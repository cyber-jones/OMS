import { Link } from "react-router-dom";
import Circle from "../../components/loading/Circle";
import useSpecialty from "../../hooks/useSpecialty";
import { oms_url } from "../../utils/SD";





const Specialty = () => {
  const { specialties, loading } = useSpecialty();

  return (
    <div className="w-[95%] h-11/12 flex justify-center items-center">
      {!loading && specialties ? (
        <div className="w-full md:w-[70%] py-3 h-11/12 grid grid-cols-1 gap-4 bg-white place-content-start place-items-center scroll-smooth overflow-y-scroll">
          {specialties.map((specialty, index) => (
            <Link
              to={`${oms_url.specialty}/${specialty.specialty_Id}`}
              key={index}
              className="bg-gray-200 h-20 w-[80%] rounded-lg shadow-lg flex justify-center items-center hover:bg-gray-400 transition-all ease-in-out duration-700"
            >
              <div className="text-sm md:text-xl text-center">{specialty.name}</div>
            </Link>
          ))}
        </div>
      ) : (
        <Circle />
      )}
    </div>
  );
};

export default Specialty;
