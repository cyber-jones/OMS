import { Link, useParams } from "react-router-dom";
import { oms_url } from "../../utils/SD";

const PatientAction = () => {
  const { id } = useParams();

  return (
    <div className="w-[95%] h-11/12 flex flex-col justify-center items-center">
      <div className="text-center w-[85%] md:w-[60%] h-6/12 rounded-lg py-3 font-serif grid grid-cols-1 bg-gray-300 gap-6 place-content-center place-items-center">
        <p>Take action on patient</p>
        <Link
          to={oms_url.newPrescription + "/" + id}
          className=" w-[80%] rounded-lg py-2 px-5 bg-green-600 text-white"
        >
          Prescribe drug
        </Link>
        <Link
          to={oms_url.profile + "/patient/" + id}
          className="w-[80%] rounded-lg py-2 px-5 bg-blue-600 text-white"
        >
          View profile
        </Link>
        <Link
          to={oms_url.prescriptions + "/patient/" + id}
          className="w-[80%] rounded-lg py-2 px-5 bg-purple-600 text-white"
        >
          View prescriptions
        </Link>
        <Link
          to={oms_url.report + "/" + id}
          className="w-[80%] rounded-lg py-2 px-5 bg-red-600 text-white"
        >
          Report patient
        </Link>
      </div>
    </div>
  );
};

export default PatientAction;
