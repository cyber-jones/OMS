import React, { useState } from "react";
import Input from "../Inputs/Input";
import { useSnackbar } from "notistack";
import { axioAnonymous } from "../../data/axios";
import { oms_server_dev_url, oms_url } from "../../utils/SD";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../redux/auth/authUserSlice";





const Login = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const prevLoc = location.state?.from?.pathname || oms_url.dashBoard;

 
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axioAnonymous(oms_server_dev_url.auth).post(
        "/user/login",
        formData
      );

      if (res?.status !== 200)
        return enqueueSnackbar(res?.data?.message, { variant: "error" });

      const { accessToken: access, ...data } = res.data.body;
      dispatch(setAuthUser({ authUser: data, accessToken: access }));
      localStorage.setItem("authUser_Id", data._id);

      enqueueSnackbar(res.statusText, { variant: "success" });
      navigete(prevLoc, { replace: true });

    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || err.message, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-full gap-4"
      onSubmit={(e) => handleLogin(e)}
    >
      <p className="text-2xl font-bold my-4">Login Here!</p>
      <Input
        type={"email"}
        name={"Email"}
        label={"Email"}
        handleChange={handleChange}
        width="w-full"
      />
      <Input
        type={"password"}
        name={"Password"}
        label={"Password"}
        handleChange={handleChange}
        width="w-full"
      />
      {loading ? (
        <button
          disabled={loading}
          className="w-[80%] py-4 uppercase bg-green-950 rounded-3xl mt-7 text-lg text-white transition-all ease-in duration-500 cursor-pointer"
        >
          Logging in...
        </button>
      ) : (
        <button className="w-[80%] py-4 uppercase bg-green-900 hover:bg-green-950 rounded-3xl mt-7 text-lg text-white transition-all ease-in duration-500 cursor-pointer">
          Login
        </button>
      )}
      <p className="text-red-600 cursor-pointer hover:text-red-800 transition-all ease-in duration-500">
        Forgot password?
      </p>
    </form>
  );
};

export default Login;
