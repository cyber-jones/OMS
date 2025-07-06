import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";
import { oms_server_production_url, oms_url } from "../../utils/SD";
import { useSnackbar } from "notistack";
import { setPrescribedDrugs } from "../../redux/prescription/prescriptionSlice";

const NewPrescription = () => {
  const { id } = useParams();
  const { prescribedDrugs, patient } = useSelector(
    (state) => state.prescription
  );
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState([]);
  const axiosAuth = useAxiosAuthorization(
    oms_server_production_url.appointment
  );
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosAuth.post(
        "/prescription/" + user._id + "/" + patient._id,
        formData
      );
      if (res?.status !== 201)
        return enqueueSnackbar(res.statusText, { variant: "error" });

      enqueueSnackbar(res.statusText, { variant: "success" });
      setFormData({});
      navigate(oms_url.prescription + "/" + id);
    } catch (err) {
      enqueueSnackbar(err?.response?.statusText, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveDrug = (drug) => {
    const newPrescribedDrugs = prescribedDrugs.filter(
      (value) => value._id !== drug._id
    );
    dispatch(setPrescribedDrugs([...newPrescribedDrugs]));
  };

  const handleChange = (e) => {
    let prescribed = formData.find((value) => value.drug_Id == e.target.id);
    if (prescribed) {
      prescribed.prescription = e.target.value;
      const newResult = formData.filter(
        (value) => value.drug_Id !== e.target.id
      );
      newResult.push(prescribed);
      setFormData(newResult);
    } else {
      const newPrescription = {
        drug_Id: e.target.id,
        prescription: e.target.value,
      };
      setFormData([...formData, newPrescription]);
    }
  };

  const handleChangeAmount = (e) => {
    let prescribed = formData.find((value) => value.drug_Id == e.target.id);
    if (prescribed) {
      prescribed.amount = e.target.value;
      const newResult = formData.filter(
        (value) => value.drug_Id !== e.target.id
      );
      newResult.push(prescribed);
      setFormData(newResult);
    }
  };

  console.log(formData);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[95%] h-11/12 flex flex-col justify-start items-center gap-8 font-sans"
    >
      <h1 className="w-11/12 md:w-6/12 text-2xl text-blue-600 mb-8 font-semibold">
        New Prescription For {patient?.first_Name}
      </h1>
      <p className="font-semibold w-11/12 md:w-6/12 font-serif">
        Patient: {patient?.first_Name} {patient?.last_Name}{" "}
        {patient?.middle_Name}{" "}
        <b
          className="float-right text-red-400 cursor-pointer"
          onClick={() => setPrescribedDrugs([])}
        >
          Clear
        </b>
      </p>
      <div className="w-11/12 md:w-6/12 overflow-y-scroll">
        {prescribedDrugs.length > 0 ? (
          prescribedDrugs.map((drug, index) => (
            <div key={index}>
              <label htmlFor={drug.drug_Name} className="w-11/12 md:w-6/12">
                <p className="font-semibold mb-3">
                  {drug.drug_Name}:{" "}
                  <button
                    type="button"
                    onClick={() => handleRemoveDrug(drug)}
                    className="py-1 px-3 float-right text-sm rounded-lg text-white bg-red-500 hover:cursor-pointer"
                  >
                    <i className="bi bi-trash" />
                  </button>
                </p>
                <textarea
                  id={drug._id}
                  type="text"
                  onChange={handleChange}
                  className="w-full max-h-46 min-h-36 opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 mb-3 border-gray-300 bg-gray-200"
                ></textarea>
              </label>
              <input
                id={drug._id}
                placeholder="Input amount to purchase"
                type="number"
                onChange={handleChangeAmount}
                className="w-full opacity-75 p-2 focus:outline-0 px-3 rounded-lg border-1 mb-3 border-gray-300 bg-gray-200"
              />
            </div>
          ))
        ) : (
          <p className="text-red-400 text-lg">
            No drugs added for prescription
          </p>
        )}
        <div className="w-full mt-5" hidden={prescribedDrugs.length < 1}>
          {loading ? (
            <button
              disabled={loading}
              className="md:w-5/12 w-full py-4 uppercase bg-yellow-950 rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-pointer md:float-right"
            >
              Loading...
            </button>
          ) : (
            <button className="md:w-5/12 w-full py-4 uppercase bg-green-900 hover:bg-green-950 rounded-3xl text-sm text-white transition-all ease-in duration-500 cursor-pointer md:float-right">
              Create
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default NewPrescription;
