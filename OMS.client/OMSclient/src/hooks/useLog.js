/* eslint-disable react-hooks/exhaustive-deps */
import { oms_server_production_url } from '../utils/SD';
import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import useAxiosAuthorization from './useAxiosAuth';




const useLog = () => {
    const [logs, setLogs] = useState(null);
    const [doctorLogs, setDoctorLogs] = useState([]);
    const [staffLogs, setstaffLogs] = useState([]);
    const [drugLogs, setDrugLogs] = useState([]);
    const [patientLogs, setPatientLogs] = useState([]);
    const [appointmentLogs, setAppointmentLogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const axiosAuthDoctor = useAxiosAuthorization(oms_server_production_url.doctor);
    const axiosAuthStaff = useAxiosAuthorization(oms_server_production_url.staff);
    const axiosAuthPatient = useAxiosAuthorization(oms_server_production_url.patient);
    const axiosAuthDrug = useAxiosAuthorization(oms_server_production_url.drug);
    const axiosAutAppointment = useAxiosAuthorization(oms_server_production_url.appointment);

    const getlogs = async () => {
        setLoading(true)
        try {
            const resDoctor = await axiosAuthDoctor.get("/logs");
            const resStaff = await axiosAuthStaff.get("/logs");
            const resPatient = await axiosAuthPatient.get("/logs");
            const resDrug = await axiosAuthDrug.get("/logs");
            const resAppointment = await axiosAutAppointment.get("/logs");
    
            if (resDoctor?.status !== 200 && resDoctor) 
                enqueueSnackbar(resDoctor?.data?.message || resDoctor?.statusText, { variant: "error" });
            if (resStaff?.status !== 200 && resStaff) 
                enqueueSnackbar(resStaff?.data?.message || resStaff?.statusText, { variant: "error" });
            if (resPatient?.status !== 200 && resPatient) 
                enqueueSnackbar(resPatient?.data?.message || resPatient?.statusText, { variant: "error" });
            if (resDrug?.status !== 200 && resDrug) 
                enqueueSnackbar(resDrug?.data?.message || resDrug?.statusText, { variant: "error" });
            if (resAppointment?.status !== 200 && resAppointment) 
                enqueueSnackbar(resAppointment?.data?.message || resAppointment?.statusText, { variant: "error" });

            setDoctorLogs(resDoctor?.data?.data);
            setstaffLogs(resStaff?.data?.data);
            setPatientLogs(resPatient?.data?.data);
            setAppointmentLogs(resAppointment?.data?.data);
            setDrugLogs(resDrug?.data?.data);
            
            setLogs([...doctorLogs, ...staffLogs, ...patientLogs, ...drugLogs, ...appointmentLogs]);
        } catch (err) {
            console.log(err);
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


export default useLog;