import { useState } from "react";
import { useSnackbar } from "notistack";
import { axioAnonymous } from "../../data/axios";
import { oms_server_production_url, oms_url } from "../../utils/SD";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../redux/auth/authUserSlice";
import useSocket from "../../hooks/useSocket";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const prevLoc = location.state?.from?.pathname || oms_url.dashBoard;
  const { connectSocket } = useSocket();

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
      const res = await axioAnonymous(oms_server_production_url.auth).post(
        "/user/login",
        formData
      );

      if (res?.status !== 200)
        return enqueueSnackbar(res?.data?.message || res.statusText, {
          variant: "error",
        });

      const { accessToken: access, ...data } = res.data.body;
      dispatch(setAuthUser({ authUser: data, accessToken: access }));
      connectSocket(res.data.body.email);

      enqueueSnackbar(res.statusText, {
        variant: "success",
      });
      navigete(prevLoc, { replace: true });
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || err.message, {
        variant: "error",
      });
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

      <label htmlFor={"Email"} className="w-full">
        <p className="font-medium">Email:</p>
        <input
          required
          id={"Email"}
          type={"email"}
          onChange={(e) => handleChange(e)}
          className="w-full opacity-75 pt-2 border-t-0 border-r-0 focus:outline-0 px-2 border-b-1 border-l-1 border-b-gray-300 border-l-gray-300 rounded-bl-xl"
        />
        <i className="bi bi-envelope relative float-right right-10 bottom-10 text-lg "></i>
      </label>
      <label htmlFor={"Password"} className="w-full">
        <p className="font-medium">Password:</p>
        <input
          required
          id={"Password"}
          type={passwordType}
          onChange={(e) => handleChange(e)}
          className="w-full opacity-75 pt-2 border-t-0 border-r-0 focus:outline-0 px-2 border-b-1 border-l-1 border-b-gray-300 border-l-gray-300 rounded-bl-xl"
        />
        {passwordType == "text" ? (
          <i
            className="bi bi-eye relative float-right right-10 bottom-10 text-lg"
            onClick={() => setPasswordType("password")}
          ></i>
        ) : (
          <i
            className="bi bi-eye-slash relative float-right right-10 bottom-10"
            onClick={() => setPasswordType("text")}
          ></i>
        )}
      </label>
      {loading ? (
        <button
          disabled={loading}
          className="w-[80%] py-4 uppercase bg-green-950 rounded-3xl mt-7 text-lg text-white transition-all ease-in duration-500 cursor-not-allowed"
        >
          Logging in...
        </button>
      ) : (
        <button className="w-[80%] py-4 uppercase bg-green-900 hover:bg-green-950 rounded-3xl mt-7 text-lg text-white transition-all ease-in duration-500 cursor-pointer">
          Login
        </button>
      )}
      <Link to={oms_url.forgetPassword} className="text-red-600 cursor-pointer hover:text-red-800 transition-all ease-in duration-500">
        Forgot password?
      </Link>
    </form>
  );
};

export default Login;
