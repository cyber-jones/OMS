import { connect } from "mongoose";



export const connectDb = async (uri) => {
    try {
        await connect(uri, { dbName: "OMS.AuthService"});
        console.log('connected to DB');
    } catch (err) {
        throw err
    }
}