// import { useState } from 'react';
import { oms_server_dev_url } from '../utils/SD';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { logOut, setUser } from '../redux/auth/authSlice';
import { axioAnonymous } from '../data/axios';


const useRefresh = () => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar(); 


    const refresh = async () => {
        try {
            const res = await axioAnonymous(oms_server_dev_url.auth).get("/refresh");

            if (res?.status === 401 || res?.status === 403) {
                enqueueSnackbar(res?.data?.message, { variant: "error" });
                dispatch(logOut());
            }
            console.log(res);
            const { accessToken: token, ...rest } = res.data.user;
            dispatch(setUser({ user: rest, accessToken: token }));
            return token;
        } catch (err) {
            enqueueSnackbar(err?.response?.data?.message, { variant: "error" });
        }
    }

    return refresh;
}


export default useRefresh;