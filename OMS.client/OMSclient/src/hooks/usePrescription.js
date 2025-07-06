/* eslint-disable react-hooks/exhaustive-deps */
import { oms_server_dev_url, oms_server_production_url } from '../utils/SD';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import useAxiosAuthorization from './useAxiosAuth';




const usePrescription = (patient_Id = null, Id = null) => {
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [prescriptions, setPrescription] = useState(null);
    const axiosAuth = useAxiosAuthorization(oms_server_dev_url.appointment);

    const getPrescription = async () => {
        setLoading(true)
        try {
            let res = null;
            if (patient_Id)
                res = await axiosAuth.get("/prescription/patient/"+patient_Id);
            else if (Id)
                res = await axiosAuth.get("/prescription/"+Id);
            else
                res = await axiosAuth.get("/prescription/all");
            
            if (res?.status !== 200 && res) {
                enqueueSnackbar(res?.data?.message || res?.statusText, { variant: "error" });
                return;
            }
            
            setPrescription(res?.data.prescriptions);
        } catch (err) {
            enqueueSnackbar(err?.response?.data?.message || err.message, { variant: "error" });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPrescription();
    }, []);

    return { prescriptions, loading };
}


export default usePrescription;