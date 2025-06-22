import { axiosPrivate } from "../config/axiosConfig.js";

export const RegisterAuthUser = async (data) => {
    try {
        await axiosPrivate.post("/register", data);
    } catch (err) {
        throw err;
    }
}


