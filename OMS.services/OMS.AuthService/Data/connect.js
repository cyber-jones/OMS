import { connect } from "mongoose";



export const connectDb = async (uri) => {
    try {
        await connect(uri);
        console.log('connected to OMS_AuthService DB');
    } catch (err) {
        throw err
    }
}