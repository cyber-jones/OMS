import { useState } from "react";
import { useParams } from "react-router-dom";
import {  Roles } from "../../utils/SD";
import Circle from "../../components/loading/Circle";
import { useSnackbar } from "notistack";
import { useAuth } from "../../utils/isAuthorized";
import useDrug from "../../hooks/useDrug";
import { setPrescribedDrugs } from "../../redux/prescription/prescriptionSlice";
import { useDispatch, useSelector } from "react-redux";

const DetailedDrug = () => {
  const { id } = useParams();
  const { prescribedDrugs } = useSelector(state => state.prescription);
  const { loading, drugs: drug } = useDrug(id);
  const [amount, setAmount] = useState(1);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const isNotDoctor = useAuth([Roles.DOCTOR]);
  


  const handleAddToPrescription = () => {
    if (!loading && drug) {
      console.log(prescribedDrugs);
      const foundDrug = prescribedDrugs.find(value => value.drug_Id == drug.drug_Id);
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

  const handleAddToCart = () => {};

  return (
    <>
      {!loading && drug ? (
        <div className="w-[90%] md:w-[50%] p-7 md:p-20 bg-gray-300 rounded-lg shadow-lg">
          <h1 className="text-xl md:text-3xl font-bold mb-1">
            {drug?.drug_Name}
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
            <span>
              <strong className="text-blue-600">Expiry: </strong>
              <span className="font-sans">{drug?.expiry_Date}</span>
            </span>
            <span className="ml-4">
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
