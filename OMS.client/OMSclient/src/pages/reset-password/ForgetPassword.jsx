import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { oms_server_production_url, oms_url } from "../../utils/SD";
import { useSnackbar } from "notistack";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";

const ForgetPassword = () => {
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const axiosAuth = useAxiosAuthorization(oms_server_production_url.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosAuth.post("/user/forget-password", { Email: email });

      if (res.status !== 200)
        return enqueueSnackbar(res.data?.message || res.statusText, {
          variant: "error",
        });

      enqueueSnackbar(res.data?.message || res.statusText, {
        variant: "success",
      });
      setEmail(null);
      navigate(oms_url.verifyOtp);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || err?.message, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col w-full h-screen">
      <img src="/images/forgot-password.jpeg" alt="forget-password-img" />
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
        <legend className="fieldset-legend text-blue-600">
          What is your email?
        </legend>
        <input
          type="email"
          id="Email"
          className="input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p
          onClick={() => navigate(oms_url.auth)}
          className="label text-red-600 cursor-pointer"
        >
          Return
        </p>
        {!loading ? (
          <button className="btn btn-success">
            Success
          </button>
        ) : (
          <button disabled={loading} className="btn btn-primary">
            Verifying...
          </button>
        )}
      </fieldset>
      </form>
    </div>
  );
};

export default ForgetPassword;
