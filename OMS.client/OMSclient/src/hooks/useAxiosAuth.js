import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logOut, setAuthUser } from "../redux/auth/authUserSlice";
import { useSnackbar } from "notistack";
import useSocket from "./useSocket";
import { oms_server_production_url } from "../utils/SD";

const useAxiosAuthorization = (url) => {
  const { token } = useSelector((state) => state.authUser);
  const { disconnectSocket } = useSocket();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
console.log("Token", "Bearer "+token);
  const axiosAuth = axios.create({
    baseURL: url,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });

  axiosAuth.interceptors.request.use(
    (config) => {
      console.log("Interceptors", config);
      if (token && !config.headers.Authorization)
        config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosAuth.interceptors.response.use(
    (res) => res,
    async (error) => {
      console.log("Interceptors-error", error);
      const prevReq = error.config;

      if (error.response?.status === 401 || error.response?.status === 403 && !prevReq._retry) {
        prevReq._retry = true;

        try {
          const res = await axios.get(oms_server_production_url.auth + "/refresh", {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          });

          if (res && res?.status === 401 || res?.status === 403) {
            enqueueSnackbar(res.data?.message, { variant: "error" });
            disconnectSocket();
            return dispatch(logOut());
          }

          console.log("refresh => ", res);
          const { accessToken, ...rest } = res.data.user;
          dispatch(setAuthUser({ authUser: rest, accessToken }));
          prevReq.headers.Authorization = `Bearer ${accessToken}`;

          return axiosAuth(prevReq);
        } catch (err) {
          // enqueueSnackbar(err?.response?.data?.message || err.message, { variant: "error" });
          enqueueSnackbar("Session Expired!", { variant: "warning" });
          disconnectSocket();
          dispatch(logOut());
          return Promise.reject(err);
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosAuth;
};

export default useAxiosAuthorization;
