import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logOut, setAuthUser } from "../redux/auth/authUserSlice";
import { useSnackbar } from "notistack";



const useAxiosAuthorization = (url) => {
    const { token } = useSelector(state => state.authUser);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const axiosAuth = axios.create({
        baseURL: url,
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      });

    axiosAuth.interceptors.request.use((config) => {
        console.log("Interceptors", config);
        if (token && !config.headers.Authorization)
            config.headers.Authorization = `Bearer ${token}`;
        return config;
    }, (error) => Promise.reject(error));
    
    axiosAuth.interceptors.response.use(res => res, async (error) => {
        console.log("Interceptors-error", error);
        const prevReq = error.config;

        if (error.response?.status === 401 && !prevReq._retry) {
            prevReq._retry = true;

            try {
                const res = await axiosAuth.get("/refresh");
    
                if (res?.status === 401 || res?.status === 403 && res) {
                    enqueueSnackbar(res?.data?.message, { variant: "error" });
                    return dispatch(logOut());
                }
    
                console.log(res);
                const { accessToken: token, ...rest } = res.data.user;
                dispatch(setAuthUser({ authUser: rest, accessToken: token }));
                prevReq.headers.Authorization = `Bearer ${token}`;

                return axiosAuth(prevReq);
            } catch (err) {
                // enqueueSnackbar(err?.response?.data?.message || err.message, { variant: "error" });
                enqueueSnackbar("Session Expired!", { variant: "error" });
                console.log("Expired");
                dispatch(logOut())
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    });

    return axiosAuth;
} 

export default useAxiosAuthorization; 