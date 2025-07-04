/* eslint-disable react-hooks/exhaustive-deps */
import { oms_server_production_url } from '../utils/SD';
import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import useAxiosAuthorization from './useAxiosAuth';




const usePatientLog = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const axiosAuth = useAxiosAuthorization(oms_server_production_url.patient);

    const getlogs = async () => {
        setLoading(true)
        try {
            const res = await axiosAuth.get("/logs");
            if (res && res?.status !== 200) 
                enqueueSnackbar(res?.data?.message || res?.statusText, { variant: "error" });

            setLogs(res.data?.data);
        } catch (err) {
            enqueueSnackbar(err?.response?.data?.message || err.message, { variant: "error" });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getlogs();
    }, []);

    return { logs, loading };
}


export default usePatientLog;