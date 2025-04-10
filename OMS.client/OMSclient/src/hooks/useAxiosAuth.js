import { useSelector } from "react-redux";
// import { useEffect } from "react";
import useRefresh from "./useRefresh";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { oms_url } from "../utils/SD";
import { setUser } from "../redux/auth/authSlice";



const useAxiosAuthorization = (url) => {
    const { token } = useSelector(state => state.auth);
    const refresh = useRefresh();
    const navigate = useNavigate();
    const dispatch = useSelector(state => state.auth);

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
                const refreshToken = await refresh();
                prevReq.headers.Authorization = `Bearer ${refreshToken}`;

                return axiosAuth(prevReq);
            } catch (err) {
                console.log("Expired");
                dispatch(setUser({ user: null, accessToken: null }))
                navigate(oms_url.auth);
                return Promise.reject(err);
            }
        }

    });

    return axiosAuth;
} 

export default useAxiosAuthorization; 