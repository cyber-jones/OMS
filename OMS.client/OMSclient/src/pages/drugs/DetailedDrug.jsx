/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { oms_server_dev_url } from "../../utils/SD";
import Circle from "../../components/loading/Circle";
import { useSnackbar } from "notistack";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";





const DetailedDrug = () => {
  const [drug, setDrug] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const axiosAuth = useAxiosAuthorization(oms_server_dev_url.drug)

  const getDrug = async () => {
    setLoading(true);
    try {
      const res = await axiosAuth.get(
        "/drug/" + id
      );
      if (res?.status !== 200)
        enqueueSnackbar(res.statusText, { variant: "error" });

      setDrug(res.data);
    } catch (err) {
      enqueueSnackbar(err?.response?.statusText, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDrug();
  }, []);




  return (
       <>
          {!loading && drug ? (
            <div className="w-[90%] md:w-[50%] p-20 bg-gray-300 rounded-lg shadow-lg">
              <h1 className="text-xl md:text-3xl font-bold mb-6">{drug?.drug_Name}</h1>
              <p className="font-sans">{drug?.description}</p>
            </div>
          ) : (
            <Circle />
          )}
        </>
  )
}

export default DetailedDrug