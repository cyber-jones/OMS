import { connect } from "mongoose";



export const connectDb = async (uri) => {
    try {
        await connect(uri);
        console.log('connected to OMS_AppointmentService DB');
    } catch (err) {
        throw err;
    }
}