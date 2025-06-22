import { useParams } from "react-router-dom";
import Circle from "../../components/loading/Circle";
import useSpecialty from "../../hooks/useSpecialty";






const DetailedSpecialty = () => {
  const { id } = useParams();
  const {loading, specialties: specialty} = useSpecialty(id)



  return (
    <>
      {!loading && specialty ? (
        <div className="w-[90%] md:w-[50%] p-7 md:p-20 bg-gray-300 rounded-lg shadow-lg">
          <h1 className="text-xl md:text-3xl font-bold mb-6">{specialty?.name}</h1>
          <p className="font-sans">{specialty?.description}</p>
        </div>
      ) : (
        <Circle />
      )}
    </>
  );
};

export default DetailedSpecialty;
