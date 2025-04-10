// import { useState } from 'react';
import { oms_server_dev_url, oms_url } from '../utils/SD';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/auth/authSlice';
import { axioAnonymous } from '../data/axios';
import { useNavigate } from 'react-router-dom';


const useRefresh = () => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar(); 
    const navigate = useNavigate();
    const { user } = useSelector(state => state.auth);


    const refresh = async () => {
        try {
            const res = await axioAnonymous(oms_server_dev_url.auth).get("/refresh");

            if (res?.status !== 401) 
                return enqueueSnackbar(res?.data?.message, { variant: "error" });

            if (res?.status !== 403) {
                enqueueSnackbar(res?.data?.message, { variant: "error" });
                dispatch(setUser({ user: null, accessToken: null }));
                navigate(oms_url.auth);
            }
            
            const { accessToken, roles } = res.data.body;
            dispatch(setUser({ user: {...user, roles: roles}, accessToken }));
            return accessToken;
        } catch (err) {
            enqueueSnackbar(err?.response?.data?.message, { variant: "error" });
        }
    }

    return refresh;
}


export default useRefresh;