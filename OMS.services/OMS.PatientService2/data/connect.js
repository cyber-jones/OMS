import { connect } from "mongoose";


export const connectDb = async (uri) => {
  try {
    await connect(uri);
    console.log("connected to OMS_PatientService DB");
  } catch (err) {
    throw err;
  }
};

