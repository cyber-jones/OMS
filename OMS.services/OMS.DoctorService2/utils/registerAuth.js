import { axiosPrivate } from "../config/axiosConfig.js";

export const RegisterAuthUser = async (data) => {
    try {
        const res = await axiosPrivate.post("/register", data);
        return res.data;
    } catch (err) {
        return err;
    }
}


