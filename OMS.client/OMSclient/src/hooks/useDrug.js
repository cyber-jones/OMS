/* eslint-disable react-hooks/exhaustive-deps */
import { oms_server_production_url } from '../utils/SD';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import useAxiosAuthorization from './useAxiosAuth';




const useDrug = (Id = null) => {
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [drugs, setDrugs] = useState(null);
    const axiosAuth = useAxiosAuthorization(oms_server_production_url.drug);

    const getDrugs = async () => {
        setLoading(true)
        try {
            let res = null;
            if (Id)
                res = await axiosAuth.get("/drug/"+Id);
            else
                res = await axiosAuth.get("/drug/all");

            console.log(res)
            if (res?.status !== 200 && res) {
                enqueueSnackbar(res.data?.message || res?.statusText, { variant: "error" });
                return;
            }
            
            setDrugs(res.data?.drug);
        } catch (err) {
            enqueueSnackbar(err?.response?.data?.message || err.message, { variant: "error" });
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDrugs();
    }, []);

    return { drugs, loading };
}


export default useDrug;