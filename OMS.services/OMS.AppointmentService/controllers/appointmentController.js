import Appointment from "../models/appointmentModel.js";
import { STATUS } from "../utils/SD.js";
import { AppointmentValidator, ApprovalValidator } from "../validators/validateSchema.js";


export const getAllAppointments = async (req, res, next) => {
    try {
        const appointments = await Appointment.find();
        return res.status(200).json({ success: true, appointments });
    } catch (err) {
        next(err);
    }
}  


export const getAppointmentById = async (req, res, next) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        return res.status(200).json({ success: true, appointments: appointment });
    } catch (err) {
        next(err);
    }
}  


export const getAppointmentsBySpecialty_Id = async (req, res, next) => {
    try {
        const appointments = await Appointment.find({ doctor_Id: req.params.specialty_Id });
        return res.status(200).json({ success: true, appointments });
    } catch (err) {
        next(err);
    }
}  


export const getAppointmentsByDoctor_Id = async (req, res, next) => {
    try {
        const appointments = await Appointment.find({ doctor_Id: req.params.doctor_Id });
        return res.status(200).json({ success: true, appointments });
    } catch (err) {
        next(err);
    }
}  


export const getAppointmentsByPatient_Id = async (req, res, next) => {
    try {
        const appointments = await Appointment.find({ patient_Id: req.params.patient_Id });
        return res.status(200).json({ success: true, appointments });
    } catch (err) {
        next(err);
    }
}  


export const postAppointment = async (req, res, next) => {
    try {
        const { error, value } = AppointmentValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const pendingAppointment = await Appointment.find({ patient_Id: value.patient_Id, approved: STATUS.pending });
        console.log(pendingAppointment);
        if (pendingAppointment.length > 0) 
            return res.status(400).json({ success: false, message: "You have pending appointments!" });

        const appointment = await Appointment.findOne({ doctor_Id: value.doctor_Id, date: value.date, time: value.time });
        if (appointment)
            return res.status(400).json({ success: false, message: "An appointment has been scheduled with this doctor by this time!" });

        const newAppointment = new Appointment({ ...value, status: STATUS.pending });
        await newAppointment.save();  

        return res.status(201).json({ success: true, newAppointment });
    } catch (err) {
        next(err);
    }
}  


export const updateAppointment = async (req, res, next) => {
    try {
        const { error, value } = AppointmentValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const updateAppointment = await Appointment.findByIdAndUpdate(req.params.id, { $set: { ...value }}, { new: true });

        return res.status(205).json({ success: true, updateAppointment, message: "Appointement updated successfully" });
    } catch (err) {
        next(err);
    }
}  


export const approveAppointment = async (req, res, next) => {
    try {
        const { error, value } = ApprovalValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const findAppointment = await Appointment.findById(req.params.id);

        if (findAppointment.status.equals(STATUS.approved))
            return res.status(400).json({ success: false, message: "This appointment has been approved!" });

        findAppointment.approved = STATUS.approved;
        findAppointment.approved_By = value.name;
        await findAppointment.save();

        return res.status(205).json({ success: true, updateAppointment, message: "Appointement approved successfully" });
    } catch (err) {
        next(err);
    }
}  


export const disapproveAppointment = async (req, res, next) => {
    try {
        const { error, value } = ApprovalValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const findAppointment = await Appointment.findById(req.params.id);

        if (findAppointment.status.equals(STATUS.disapproved))
            return res.status(400).json({ success: false, message: "This appointment has been disapproved!" });

        findAppointment.approved = STATUS.approved;
        findAppointment.disapproved_By = value.name;
        await findAppointment.save();

        return res.status(205).json({ success: true, updateAppointment, message: "Appointement disapproved successfully" });
    } catch (err) {
        next(err);
    }
}  


export const deleteAppointment = async (req, res, next) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        return res.status(204).json({ success: true, message: "Appointement deleted successfully" });
    } catch (err) {
        next(err);
    }
}  