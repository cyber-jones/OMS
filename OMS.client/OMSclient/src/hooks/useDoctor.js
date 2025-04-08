/* eslint-disable react-hooks/exhaustive-deps */
import { axioAnonymous } from '../data/axios';
import { oms_server_dev_url } from '../utils/SD';
import { useSnackbar } from 'notistack';
import { useState, useEffect } from 'react';




const useDoctor = () => {
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [doctors, setDoctors] = useState([]);

    const getDoctors = async () => {
        setLoading(true)
        try {
            const res = await axioAnonymous(oms_server_dev_url.doctor).get("/doctor/all");
            console.log(res)
            if (res.status !== 200) 
                enqueueSnackbar(res.statusText, { variant: "error" });
            
            setDoctors(res.data)
        } catch (err) {
            enqueueSnackbar(err?.message, { variant: "error" });
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