/* eslint-disable react-hooks/exhaustive-deps */
import { oms_server_dev_url } from "../utils/SD";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import useAxiosAuthorization from "./useAxiosAuth";

const useMessage = () => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [messages, setMessage] = useState([]);
  const axiosAuth = useAxiosAuthorization(oms_server_dev_url.appointment);

  const getMessage = async () => {
    setLoading(true);
    try {
      const res = await axiosAuth.get("/message/all");

      console.log(res);
      if (res?.status !== 200 && res) {
        enqueueSnackbar(res?.data?.message || res?.statusText, {
          variant: "error",
        });
        return;
      }

      setMessage(res.data?.messages);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || err.message, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  return { messages, loading };
};

export default useMessage;
