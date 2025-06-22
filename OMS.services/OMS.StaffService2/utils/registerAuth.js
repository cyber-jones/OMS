import { axiosPrivate } from "../config/axiosConfig.js";

export const RegisterAuthUser = async (data) => {
    try {
        const res = await axiosPrivate.post("/register", data);
        console.log(res);
        return res.data;
    } catch (err) {
        throw err;
    }
}


