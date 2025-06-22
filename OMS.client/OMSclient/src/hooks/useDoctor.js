/* eslint-disable react-hooks/exhaustive-deps */
import { oms_server_production_url } from '../utils/SD';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import useAxiosAuthorization from './useAxiosAuth';




const useDoctor = (Id = null) => {
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [doctors, setDoctors] = useState(null);
    const axiosAuth = useAxiosAuthorization(oms_server_production_url.doctor);

    const getDoctors = async () => {
        setLoading(true);
        try {
            let res = null;
            if (Id)
                res = await axiosAuth.get("/doctor/"+Id);
            else
                res = await axiosAuth.get("/doctor/all");

            console.log(res);
            if (res?.status !== 200 && res) {
                enqueueSnackbar(res.data?.message || res?.statusText, { variant: "error" });
                return;
            }
            
            setDoctors(res.data?.doctor);
        } catch (err) {
            enqueueSnackbar(err?.response?.data?.message || err.message, { variant: "error" });
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDoctors();
    }, []);

    return { doctors, loading };
}


export default useDoctor;