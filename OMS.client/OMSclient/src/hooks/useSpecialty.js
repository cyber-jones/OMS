/* eslint-disable react-hooks/exhaustive-deps */
import { oms_server_dev_url } from '../utils/SD';
import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import useAxiosAuthorization from './useAxiosAuth';




const useSpecialty = () => {
    const [specialties, setSpecialties] = useState([]);
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const axiosAuth = useAxiosAuthorization(oms_server_dev_url.doctor);

    const getSpecialties = async () => {
        setLoading(true)
        try {
            const res = await axiosAuth.get("/specialty/all");
            if (res?.status !== 200 && res) {
                enqueueSnackbar(res?.statusText || res?.message, { variant: "error" });
                return;
            }

            setSpecialties(res?.data)
        } catch (err) {
            console.log(err);
            enqueueSnackbar(err?.response?.statusText || err.message, { variant: "error" });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getSpecialties();
    }, []);

    return { specialties, loading };
}


export default useSpecialty;