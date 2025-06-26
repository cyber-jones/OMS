import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { oms_server_production_url, oms_url } from "../../utils/SD";
import { useSnackbar } from "notistack";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";

const VerifyOtp = () => {
  const [otp, setOTP] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const axiosAuth = useAxiosAuthorization(oms_server_production_url.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosAuth.post("/user/verify-otp", { otp });

      if (res.status !== 200)
        return enqueueSnackbar(res.data?.message || res.statusText, {
          variant: "error",
        });

      enqueueSnackbar(res.data?.message || res.statusText, {
        variant: "success",
      });
      setOTP(null);
      navigate(oms_url.resetPassword);
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
      <img src="/images/otp.jpeg" alt="otp-img" />
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-blue-600">
            5-digit OTP code
          </legend>
          <input
            type="text"
            className="input"
            id="otp"
            onChange={(e) => setOTP(e.target.value)}
            placeholder="OTP code"
            required
          />
          <p
            onClick={() => navigate(oms_url.auth)}
            className="label text-red-600 cursor-pointer"
          >
            Cancle
          </p>
          {!loading ? (
            <button className="btn btn-primary">Verify</button>
          ) : (
            <button disabled={loading} className="btn btn-primary">
              Validating...
            </button>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default VerifyOtp;
