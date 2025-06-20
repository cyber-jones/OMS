/* eslint-disable react-hooks/exhaustive-deps */
import { oms_server_production_url } from '../utils/SD';
import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import useAxiosAuthorization from './useAxiosAuth';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/user/userSlice';




const useUser = () => {
    const [user, setThisUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const { authUser } = useSelector(state => state.authUser);
    const dispatch = useDispatch();
    let axiosAuthUrl = null
    let url = null;

    if (authUser?.accType == "patient") {
        axiosAuthUrl = oms_server_production_url.patient
        url =  "/patient";
    }
    else if (authUser?.accType == "doctor") {
        axiosAuthUrl = oms_server_production_url.doctor
        url =  "/doctor";
    }
    else if (authUser?.accType == "staff") {
        axiosAuthUrl = oms_server_production_url.staff
        url =  "/staff";
    }
    else
        enqueueSnackbar("Error: Invalid account type", { variant: "error" });

    const axiosAuth = useAxiosAuthorization(axiosAuthUrl);


    const getUser = async () => {
        setLoading(true)
        try {
            const res = await axiosAuth.get(url+"/"+authUser?.user_Profile_Id);
            console.log(res);
            if (res?.status !== 200 && res) {
                enqueueSnackbar(res?.statusText || res?.message, { variant: "error" });
                return;
            }

            dispatch(setUser(res?.data));
            setThisUser(res?.data);
        } catch (err) {
            console.log(err);
            enqueueSnackbar(err?.response?.statusText || err.message, { variant: "error" });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return { user, loading };
}


export default useUser;