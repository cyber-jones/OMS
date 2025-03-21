import axios from "axios";




export const axiosStaff = axios.create({
    baseURL: "http://localhost:7004",
    withCredentials: true
});