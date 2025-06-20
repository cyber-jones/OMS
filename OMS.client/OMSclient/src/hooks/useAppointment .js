/* eslint-disable react-hooks/exhaustive-deps */
import { oms_server_production_url } from '../utils/SD';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import useAxiosAuthorization from './useAxiosAuth';




const useAppointments = (patient_Id = null, doctor_Id = null, Id = null) => {
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [appointments, setAppointment] = useState(null);
    const axiosAuth = useAxiosAuthorization(oms_server_production_url.appointment);

    const getAppointments = async () => {
        setLoading(true)
        try {
            let res = null;
            if (patient_Id)
                res = await axiosAuth.get("/appointment/patient/all/"+patient_Id);
            else if (doctor_Id)
                res = await axiosAuth.get("/appointment/doctor/all/"+doctor_Id);
            else if (Id)
                res = await axiosAuth.get("/appointment/"+Id);
            else
                res = await axiosAuth.get("/appointment/all");

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