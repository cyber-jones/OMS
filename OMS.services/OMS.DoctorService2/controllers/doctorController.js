import Doctor from "../models/doctorModel.js";
import Log from "../models/logModel.js";
import { Logger } from "../utils/log.js";
import { RegisterAuthUser } from "../utils/registerAuth.js";
import { ROLES } from "../utils/SD.js";
import { DoctorValidator } from "../validators/validateSchema.js";


export const getDoctors = async (req, res, next) => {
    try {
        const doctors = await Doctor.find();
        return res.status(200).json({ success: true, data: doctors });
    } catch (err) {
        next(err);
    }
}  


export const getDoctor = async (req, res, next) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        return res.status(200).json({ success: true, doctor });
    } catch (err) {
        next(err);
    }
} 

export const postDoctor = async (req, res, next) => {
    try {
        const { error, value } = DoctorValidator.validate(req.body);
        const { Password, ...data } = value;

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const newDoctor = new Doctor({ Created_By: req.email, ...data });  

        await Logger(req.email, "New Doctor", value.Email);
        const respone = await RegisterAuthUser({ Email: value.Email, Password: Password, AccType: ROLES[1], Role: ROLES[1], User_Profile_Id: newDoctor._id });

        await newDoctor.save();
        if (respone.success == false)
            return res.status(400).json({ success: false, message: respone.message });

        return res.status(201).json({ success: true, data: newDoctor, message: "Doctor created successfully" });
    } catch (err) {
        next(err);
    }
}  


export const updateDoctor = async (req, res, next) => {
    try {
        const { error, value } = DoctorValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, { $set: { Updated_By: req.email, ...value }}, { new: true });

        await Logger(req.email, "Updated Doctor", value.Email);

        return res.status(205).json({ success: true, data: updatedDoctor, message: "Doctor updated successfully" });
    } catch (err) {
        next(err);
    }
}


export const deleteDoctor = async (req, res, next) => {
    try {
        const doctor = await Doctor.findByIdAndDelete(req.params.id);
        await Logger(req.email, "Deleted Doctor", `${doctor.First_Name} ${doctor.Last_Name} ${doctor.Middle_Name}`);
        return res.status(200).json({ success: true, message: "Doctor deleted successfully" });
    } catch (err) {
        next(err);
    }
}


export const getLogs = async (req, res, next) => {
    try {
        const logs = await Log.find();
        return res.status(200).json({ success: true, data: logs });
    } catch (err) {
        next(err);
    }
}    