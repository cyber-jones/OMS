import { ALLOWEDORIGINS } from "../utils/SD.js";


export const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (ALLOWEDORIGINS.includes(origin))
        res.header("Access-Control-Allow-Origin", "http://localhost:5173");
        res.header("Access-Control-Allow-Origin", "https://oms-ochre.vercel.app");
        res.header("Access-Control-Allow-Origin", "http://oms-doctor-api.onrender.com/api");
        res.header("Access-Control-Allow-Origin", "http://oms-patient-api.onrender.com/api");
        res.header("Access-Control-Allow-Origin", "http://oms-staff-api.onrender.com/api");
        res.header("Access-Control-Allow-Origin", "http://oms-drug-api.onrender.com/api");
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization");
    return next();
} 