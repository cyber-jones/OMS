import axios from "axios";

export const axiosPrivate = (token) => {
    const axiosPrivate = axios.create({
        baseURL: "http://localhost:7005/api/user",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+ token
        },
        withCredentials: true
    });
    return axiosPrivate;
}