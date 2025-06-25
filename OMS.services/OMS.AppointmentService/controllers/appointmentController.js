import Appointment from "../models/appointmentModel.js";
import Log from "../models/logModel.js";
import { Logger } from "../utils/log.js";
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

        const pendingAppointment = await Appointment.findOne({ patient_Id: value.patient_Id, approved: STATUS.pending });

        if (pendingAppointment) 
            return res.status(400).json({ success: false, message: "You have pending appointment!" });

        const appointment = await Appointment.findOne({ doctor_Id: value.doctor_Id, date: value.date, time: value.time });
        if (appointment)
            return res.status(400).json({ success: false, message: "An appointment has been scheduled with this doctor by this time!" });

        const newAppointment = new Appointment({ ...value, status: STATUS.pending });
        await newAppointment.save();  

        await Logger(req.email, "New Appointment", newAppointment.patient_Id);

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

         const appointment = await Appointment.findOne({ _id: req.params.id, doctor_Id: value.doctor_Id, date: value.date, time: value.time });
        if (appointment)
            return res.status(400).json({ success: false, message: "An appointment has been scheduled with this doctor by this time!" });

        const updateAppointment = await Appointment.findByIdAndUpdate(req.params.id, { $set: { ...value }}, { new: true });
        await Logger(req.email, "Update Appointment", updateAppointment.patient_Id);

        return res.status(200).json({ success: true, updateAppointment, message: "Appointement updated successfully" });
    } catch (err) {
        next(err);
    }
}  


export const approveAppointment = async (req, res, next) => {
    try {
        const { error, value } = ApprovalValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const appointment = await Appointment.findById(req.params.id);

        if (appointment.status == STATUS.approved)
            return res.status(400).json({ success: false, message: "This appointment has been approved!" });

        appointment.status = STATUS.approved;
        appointment.approved_By = value.email;
        await appointment.save();

        await Logger(req.email, "Approve Appointment", appointment.patient_Id);

        return res.status(200).json({ success: true, updateAppointment, message: "Appointement approved successfully" });
    } catch (err) {
        next(err);
    }
}  


export const cancleAppointment = async (req, res, next) => {
    try {
        const appointment = await Appointment.findById(req.params.id);

        if (appointment.status == STATUS.approved)
            return res.status(400).json({ success: false, message: "This appointment has been approved!" });
        
        appointment.status = STATUS.cancle;
        await appointment.save();

        await Logger(req.email, "Cancle Appointment", appointment.patient_Id);

        return res.status(200).json({ success: true, updateAppointment, message: "Appointement cancled successfully" });
    } catch (err) {
        next(err);
    }
}  


export const disapproveAppointment = async (req, res, next) => {
    try {
        const { error, value } = ApprovalValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const appointment = await Appointment.findById(req.params.id);

        if (appointment.status == STATUS.disapproved)
            return res.status(400).json({ success: false, message: "This appointment has been disapproved!" });

        appointment.status = STATUS.disapproved;
        appointment.disapproved_By = value.email;
        await appointment.save();

        await Logger(req.email, "Disapprove Appointment", appointment.patient_Id);

        return res.status(200).json({ success: true, appointment, message: "Appointement disapproved successfully" });
    } catch (err) {
        next(err);
    }
}  


export const deleteAppointment = async (req, res, next) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        await Logger(req.email, "Delete Appointment", appointment.patient_Id);

        return res.status(204).json({ success: true, message: "Appointement deleted successfully" });
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
};