import axios from "axios";

export const axiosPrivate = (token) => {
    const axiosPrivate = axios.create({
        baseURL: "https://oms-auth-api.onrender.com/api/user",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+ token
        },
        withCredentials: true
    });
    return axiosPrivate;
}