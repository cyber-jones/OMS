import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { oms_server_dev_url, oms_url } from "../../../utils/SD";
import useAxiosAuthorization from "../../../hooks/useAxiosAuth";
import Form from "../../../components/Form";


const RegisterDrug = () => {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const navigete = useNavigate();
    const axiosAuth = useAxiosAuthorization(oms_server_dev_url.drug);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const res = await axiosAuth.post("/drug", formData);
        console.log(res);
        if (res?.status !== 201)
          return enqueueSnackbar(res.statusText, { variant: "error" });
  
        enqueueSnackbar(res.statusText, { variant: "success" });
        setFormData({});
        navigete(oms_url.doctorList);
      } catch (err) {
        enqueueSnackbar(err?.response?.statusText, { variant: "error" });
      } finally {
        setLoading(false);
      }
    };
    console.log(formData);
  
    return (
      <Form handleChange={handleChange} handleSubmit={handleSubmit} name={"Drug"} loading={loading} />
    );
}

export default RegisterDrug