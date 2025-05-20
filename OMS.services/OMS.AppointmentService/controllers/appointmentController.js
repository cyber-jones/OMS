import Appointment from "../models/appointmentModel";
import { AppointmentValidator } from "../validators/validateSchema";


export const getAppointMents = async (req, res, next) => {
    try {
        const appointments = await Appointment.find();
        return res.status(200).json({ success: true, appointments });
    } catch (err) {
        next(err);
    }
}  


export const postAppointMent = async (req, res, next) => {
    try {
        const { error, value } = AppointmentValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const Appointed = await Appointment.findOne({ date: value.date });
        if (Appointed)
            return res.status(400).json({ success: false, message: "Appointment already scheduled!" });

        const newAppointment = new Appointment({ ...value });
        await newAppointment.save();  

        return res.status(201).json({ success: true, newAppointment });
    } catch (err) {
        next(err);
    }
}  


export const updateAppointMent = async (req, res, next) => {
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


export const approveAppointMent = async (req, res, next) => {
    try {
        const findAppointment = await Appointment.findById(req.params.id);

        if (findAppointment.approved)
            return res.status(400).json({ success: false, message: "This appointment has been approved!" });

        findAppointment.approved = true;
        await findAppointment.save();

        return res.status(205).json({ success: true, updateAppointment, message: "Appointement approved successfully" });
    } catch (err) {
        next(err);
    }
}  


export const disapproveAppointMent = async (req, res, next) => {
    try {
        const findAppointment = await Appointment.findById(req.params.id);

        if (!findAppointment.approved)
            return res.status(400).json({ success: false, message: "This appointment isn't approved!" });

        findAppointment.approved = false;
        await findAppointment.save();

        return res.status(205).json({ success: true, updateAppointment, message: "Appointement disapproved successfully" });
    } catch (err) {
        next(err);
    }
}  


export const deleteAppointMent = async (req, res, next) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        return res.status(204).json({ success: true, message: "Appointement deleted successfully" });
    } catch (err) {
        next(err);
    }
}  