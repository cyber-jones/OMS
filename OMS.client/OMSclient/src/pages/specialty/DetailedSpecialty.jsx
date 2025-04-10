/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { oms_server_dev_url } from "../../utils/SD";
import Circle from "../../components/loading/Circle";
import { useSnackbar } from "notistack";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";






const DetailedSpecialty = () => {
  const [specialty, setSpecialty] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const axiosAuth = useAxiosAuthorization(oms_server_dev_url.doctor)

  const getSpecialty = async () => {
    setLoading(true);
    try {
      const res = await axiosAuth.get(
        "/specialty/" + id
      );
      if (res?.status !== 200)
        enqueueSnackbar(res.statusText, { variant: "error" });

      setSpecialty(res.data);
    } catch (err) {
      enqueueSnackbar(err?.response?.statusText, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSpecialty();
  }, []);




  return (
    <>
      {!loading && specialty ? (
        <div className="w-[90%] md:w-[50%] p-20 bg-gray-300 rounded-lg shadow-lg">
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
