/* eslint-disable react-hooks/exhaustive-deps */
import { oms_server_production_url } from '../utils/SD';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import useAxiosAuthorization from './useAxiosAuth';




const usePatient = (Id = null) => {
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [patients, setPatients] = useState(null);
    const axiosAuth = useAxiosAuthorization(oms_server_production_url.patient);

    const getPatients = async () => {
        setLoading(true)
        try {
            let res = null;
            if (Id)
                res = await axiosAuth.get("/patient/"+Id);
            else
                res = await axiosAuth.get("/patient/all");
            
            console.log(res);
            if (res?.status !== 200 && res) {
                enqueueSnackbar(res?.statusText || res?.message, { variant: "error" });
                return;
            }
            
            setPatients(res?.data);
        } catch (err) {
            enqueueSnackbar(err?.response?.statusText || err.message, { variant: "error" });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPatients();
    }, []);

    return { patients, loading };
}


export default usePatient;