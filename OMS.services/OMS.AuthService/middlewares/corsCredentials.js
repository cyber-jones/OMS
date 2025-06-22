import { ALLOWEDORIGINS } from "../utils/SD.js";


export const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (ALLOWEDORIGINS.includes(origin))
        res.header("Access-Control-Allow-Origin", "http://localhost:5173");
        res.header("Access-Control-Allow-Origin", "http://localhost:7001");
        // res.header("Access-Control-Allow-Origin", "https://oms-ochre.vercel.app");
        // res.header("Access-Control-Allow-Origin", "http://oms-doctor-api.runasp.net/api");
        // res.header("Access-Control-Allow-Origin", "http://oms-patient-api.runasp.net/api");
        // res.header("Access-Control-Allow-Origin", "http://oms-staff-api.runasp.net/api");
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization");
    return next();
} 