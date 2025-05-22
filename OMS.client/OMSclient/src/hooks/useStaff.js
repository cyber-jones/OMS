/* eslint-disable react-hooks/exhaustive-deps */
import { oms_server_dev_url } from '../utils/SD';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import useAxiosAuthorization from './useAxiosAuth';




const useStaff = () => {
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [staff, setStaff] = useState([]);
    const axiosAuth = useAxiosAuthorization(oms_server_dev_url.staff);

    const getstaff = async () => {
        setLoading(true)
        try {
            const res = await axiosAuth.get("/staff/all");
            console.log(res);
            if (res?.status !== 200 && res) {
                enqueueSnackbar(res?.statusText || res?.message, { variant: "error" });
                return;
            }
            
            setStaff(res?.data);
        } catch (err) {
            enqueueSnackbar(err?.response?.statusText || err.message, { variant: "error" });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getstaff();
    }, []);

    return { staff, loading };
}


export default useStaff;