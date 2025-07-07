import { useNavigate } from "react-router-dom";
import { oms_url } from "../../utils/SD";

const List = ({ patient, index, handleSetPatientForPrescribe }) => {
  const navigate = useNavigate();

  return (
    <li
      key={index}
      className="list-row hover:bg-gray-400 bg-gray-200"
      onClick={() => handleSetPatientForPrescribe(patient)}
    >
      <div>
        <img
          className="size-10 rounded-box"
          src={
            patient?.profile_Url
              ? patient?.profile_Url
              : patient?.sex == "Male"
              ? "/images/profile-masculine.jpeg"
              : "/images/profile-femine.jpeg"
          }
        />
      </div>
      <div
        onClick={() => navigate(`${oms_url.patient}/action/${patient?._id}`)}
        className="hover:cursor-pointer"
      >
        <div>
          {patient?.first_Name} {patient?.last_Name} {patient?.middle_Name}
        </div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {patient?.sex}{" "}
        </div>
      </div>
    </li>
  );
};

export default List;
