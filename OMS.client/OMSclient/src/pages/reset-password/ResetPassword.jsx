import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { oms_server_production_url, oms_url } from "../../utils/SD";
import { useSnackbar } from "notistack";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";

const ResetPassword = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const axiosAuth = useAxiosAuthorization(oms_server_production_url.auth);

  const handleSubmit = async (e) => {
    if (formData.Password !== formData.ConfirmPassword)
      return enqueueSnackbar("Passwords do not match", {
        variant: "error",
      });
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosAuth.post("/user/reset-password", formData);

      if (res.status !== 205)
        return enqueueSnackbar(res.data?.message || res.statusText, {
          variant: "error",
        });

      enqueueSnackbar(res.data?.message || res.statusText, {
        variant: "success",
      });
      setFormData({});
      navigate(oms_url.auth);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || err?.message, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center flex-col w-full h-screen gap-6">
      <img
        src="/images/reset-password-2.png"
        className="w-[50%] md:w-auto shadow-2xl p-10 rounded-full"
        alt="reset-password-img"
      />
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">New password</legend>
          <input
            type="text"
            id="Password"
            className="input"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Confirm here!</legend>
          <input
            type="text"
            id="ConfirmPassword"
            className="input"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
          <p
            onClick={() => navigate(oms_url.auth)}
            className="label text-red-600 cursor-pointer"
          >
            Cancle
          </p>
          {!loading ? (
          <button className="btn btn-success">
            Save
          </button>
        ) : (
          <button disabled={loading} className="btn btn-primary">
            Saving...
          </button>
        )}
        </fieldset>
      </form>
    </div>
  );
};

export default ResetPassword;
