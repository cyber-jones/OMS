import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  oms_server_production_url, oms_url, Roles } from "../../utils/SD";
import Circle from "../../components/loading/Circle";
import { useSnackbar } from "notistack";
import { useAuth } from "../../utils/isAuthorized";
import useDrug from "../../hooks/useDrug";
import { setPrescribedDrugs } from "../../redux/prescription/prescriptionSlice";
import { useDispatch, useSelector } from "react-redux";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";

const DetailedDrug = () => {
  const { id } = useParams();
  const { prescribedDrugs } = useSelector(state => state.prescription);
  const { loading: laodingDrug, drugs: drug } = useDrug(id);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(1);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const isNotDoctor = useAuth([Roles.DOCTOR]);
  const isNotAdmin = useAuth([Roles.ADMIN]);
  const navigate = useNavigate();
  const axiosAuth = useAxiosAuthorization(oms_server_production_url.drug);
  


  const handleAddToPrescription = () => {
    if (!loading && drug) {
      const foundDrug = prescribedDrugs.find(value => value._id == drug._id);
      if (foundDrug) enqueueSnackbar("Drug already in prescription!", { variant: "warning" }); 
      else {
        dispatch(setPrescribedDrugs([...prescribedDrugs, drug]));
        enqueueSnackbar("Drug added to prescription", { variant: "success" });
      }
    }

    return;
  }

  const handleIncrement = () => {
    if (amount < 30 && amount > 0) 
      return setAmount(amount + 1);

    enqueueSnackbar("Limit reached", { variant: "error" });
  };

  const handleDecrement = () => {
    if (amount <= 30 && amount > 1)
      return setAmount(amount - 1);

    enqueueSnackbar("Limit reached", { variant: "error" });
  };

    const handleDelete = async () => {
      setLoading(true);
      try {
        const res = await axiosAuth.delete("/drug/" + id);
        if (res && res?.status !== 200)
          return enqueueSnackbar(res.data?.message || res.statusText, {
            variant: "warning",
          });
  
        enqueueSnackbar(res.data.message, { variant: "success" });
        navigate(oms_url.drugs);
      } catch (err) {
        enqueueSnackbar(err.response?.data.message || err.response.statusText, {
          variant: "error",
        });
      } finally {
        setLoading(false);
      }
    };
  

  const handleAddToCart = () => {};

  return (
    <>
      {!laodingDrug && drug ? (
        <div className="w-[90%] md:w-[50%] p-7 md:p-20 bg-gray-300 rounded-lg shadow-lg">
          <h1 className="text-xl md:text-3xl font-bold mb-1">
            {drug?.drug_Name}
            <button
            hidden={!isNotAdmin}
            className="float-right font-thin px-3 py-1 rounded-lg text-white bg-red-600 cursor-pointer font-serif hover:bg-red-900 duration-500 ease-in"
            onClick={handleDelete}
          >
            Delete
          </button>
          </h1>
          <div className="w-full text-end my-4">
            <p><strong className="text-blue-600">Manufacturer: </strong>{drug?.manufacturer}</p>
          </div>
          <p className="font-sans">{drug?.description}</p>
          <div className="text-sm mt-3">
            <strong className="text-red-600">Side Effect: </strong>
            <p className="font-sans">{drug?.side_Effects}</p>
          </div>
          <div className="text-sm mt-3">
            {/* <span>
              <strong className="text-blue-600">Expiry: </strong>
              <span className="font-sans">{drug?.expiry_Date}</span>
            </span> */}
            <span className=" ">
              <strong className="text-blue-600">Price: </strong>
              <span className="font-sans">{drug?.price} Naira</span>
            </span>
          </div>
          <div className="mt-8 w-full">
            <button
              className="px-2 py-1 rounded-tl-lg rounded-bl-lg text-white bg-red-700 cursor-pointer"
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              type="number"
              disabled={true}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-white w-8 p-1"
            />
            <button
              className="px-2 py-1 rounded-tr-lg rounded-br-lg text-white bg-green-700 cursor-pointer"
              onClick={handleIncrement}
            >
              +
            </button>
            <button
              hidden={isNotDoctor}
              className="float-right px-3 py-1 rounded-lg text-white bg-green-950 cursor-pointer font-serif hover:bg-green-900 duration-500 ease-in"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
            <button
              hidden={!isNotDoctor}
              className="float-right px-3 py-1 rounded-lg text-white bg-blue-950 cursor-pointer font-serif hover:bg-blue-900 duration-500 ease-in"
              onClick={handleAddToPrescription}
            >
              Add to prescription
            </button>
          </div>
        </div>
      ) : (
        <Circle />
      )}
    </>
  );
};

export default DetailedDrug;
