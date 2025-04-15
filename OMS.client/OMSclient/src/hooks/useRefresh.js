// import { useState } from 'react';
import { oms_server_dev_url } from '../utils/SD';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { logOut, setAuthUser } from '../redux/auth/authUserSlice';
import useAxiosAuthorization from './useAxiosAuth';


const useRefresh = () => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar(); 
    const axiosAuth = useAxiosAuthorization(oms_server_dev_url.auth);

    const refresh = async () => {
        try {
            const res = await axiosAuth.get("/refresh");

            if (res?.status === 401 || res?.status === 403 && res) {
                enqueueSnackbar(res?.data?.message, { variant: "error" });
                dispatch(logOut());
            }

            console.log(res);
            const { accessToken: token, ...rest } = res.data.user;
            dispatch(setAuthUser({ authUser: rest, accessToken: token }));
            return token;
        } catch (err) {
            enqueueSnackbar(err?.response?.data?.message || err.message, { variant: "error" });
        }
    }

    return refresh;
}


export default useRefresh;