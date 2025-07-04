import { ALLOWEDORIGINS } from "../utils/SD.js";


export const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (ALLOWEDORIGINS.includes(origin))
        res.header("Access-Control-Allow-Origin", "http://localhost:7001");
        res.header("Access-Control-Allow-Origin", "http://localhost:7002");
        res.header("Access-Control-Allow-Origin", "http://localhost:7003");
        res.header("Access-Control-Allow-Origin", "http://localhost:7004");
        res.header("Access-Control-Allow-Origin", "http://localhost:5173");
        res.header("Access-Control-Allow-Origin", "https://oms-ochre.vercel.app");
        res.header("Access-Control-Allow-Origin", "https://oms-doctor-api.onrender.com");
        res.header("Access-Control-Allow-Origin", "https://oms-patient-api.onrender.com");
        res.header("Access-Control-Allow-Origin", "https://oms-staff-api.onrender.com");
        res.header("Access-Control-Allow-Origin", "https://oms-drug-api.onrender.com");
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization");
    return next();
} 