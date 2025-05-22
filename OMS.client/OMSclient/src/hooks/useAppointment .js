/* eslint-disable react-hooks/exhaustive-deps */
import { oms_server_dev_url } from '../utils/SD';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import useAxiosAuthorization from './useAxiosAuth';




const useAppointments = () => {
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [appointments, setAppointment] = useState([]);
    const axiosAuth = useAxiosAuthorization(oms_server_dev_url.appointment);

    const getAppointments = async () => {
        setLoading(true)
        try {
            const res = await axiosAuth.get("/appointment/all");
            console.log(res);
            if (res?.status !== 200 && res) {
                enqueueSnackbar(res?.data?.message || res?.statusText, { variant: "error" });
                return;
            }
            
            setAppointment(res?.data.appointments);
        } catch (err) {
            enqueueSnackbar(err?.response?.data?.message || err.message, { variant: "error" });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAppointments();
    }, []);

    return { appointments, loading };
}


export default useAppointments;