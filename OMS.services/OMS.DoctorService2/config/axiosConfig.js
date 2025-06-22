import axios from "axios";

export const axiosPrivate = axios.create({
    baseURL: process.env.AUTH_DEV_URL,
    headers: {
        "Content-Type": "application/json"
    }
});