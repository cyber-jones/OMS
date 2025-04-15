/* eslint-disable react-hooks/exhaustive-deps */
import { oms_server_dev_url } from '../utils/SD';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import useAxiosAuthorization from './useAxiosAuth';




const useDoctor = () => {
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [doctors, setDoctors] = useState([]);
    const axiosAuth = useAxiosAuthorization(oms_server_dev_url.doctor);

    const getDoctors = async () => {
        setLoading(true)
        try {
            const res = await axiosAuth.get("/doctor/all");
            console.log(res)
            if (res?.status !== 200 && res) {
                enqueueSnackbar(res?.statusText || res?.message, { variant: "error" });
                return;
            }
            
            setDoctors(res?.data);
        } catch (err) {
            enqueueSnackbar(err?.response?.statusText || err.message, { variant: "error" });
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