import Prescription from "../models/prescriptionModel.js";
import { Logger } from "../utils/log.js";
import { STATUS } from "../utils/SD.js";


export const getPrescriptions = async (req, res, next) => {
    try {
        const prescriptions = await Prescription.find();
        return res.status(200).json({ success: true, prescriptions });
    } catch (err) {
        next(err);
    }
}  


export const getPrescription = async (req, res, next) => {
    try {
        const prescription = await Prescription.findById(req.params.id);
        return res.status(200).json({ success: true, prescriptions: prescription });
    } catch (err) {
        next(err);
    }
}  


export const getPatientPrescriptions = async (req, res, next) => {
    try {
        const prescriptions = await Prescription.find({ patient_Id: req.params.id });
        return res.status(200).json({ success: true, prescriptions });
    } catch (err) {
        next(err);
    }
}  


export const getDoctorPrescriptions = async (req, res, next) => {
    try {
        const prescriptions = await Prescription.find({ doctor_Id: req.params.id });
        return res.status(200).json({ success: true, prescriptions });
    } catch (err) {
        next(err);
    }
}  


export const postPrescription = async (req, res, next) => {
    const { doctorId, patientId } = req.params;
    try {
        const newPrescription = new Prescription({ doctor_Id: doctorId, patient_Id: patientId, prescription: req.body});
        await newPrescription.save();  

        await Logger(req.email, "New Prescription", newPrescription.patient_Id);

        return res.status(201).json({ success: true, newPrescription, message: "Drug prescribed successfully" });
    } catch (err) {
        next(err);
    }
}  


export const updatePrescription = async (req, res, next) => {
    try {
        const updatePrescription = await Prescription.findByIdAndUpdate(req.params.id, { $set: { ...req.body }}, { new: true });
        await Logger(req.email, "Update Prescription", updatePrescription.patient_Id);

        return res.status(205).json({ success: true, updatePrescription, message: "Prescription updated successfully" });
    } catch (err) {
        next(err);
    }
}  


export const approvePrescription = async (req, res, next) => {
    try {
        const { error, value } = ApprovalValidator.validate(req.body);

            if (error)
            return res.status(400).json({ success: false, message: error.message });

        const findPrescription = await Prescription.findById(req.params.id);

        if (findPrescription.status == STATUS.approved)
            return res.status(400).json({ success: false, message: "This Prescription has been approved!" });

        findPrescription.status = STATUS.approved;
        findPrescription.approved_By = value;
        await findPrescription.save();

        await Logger(req.email, "Approve Prescription", findPrescription.patient_Id);

        return res.status(205).json({ success: true, findPrescription, message: "Prescription approved successfully" });
    } catch (err) {
        next(err);
    }
}  


export const disapprovePrescription = async (req, res, next) => {
    try {
        const { error, value } = ApprovalValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const findPrescription = await Prescription.findById(req.params.id);

        if (!findPrescription.status !== STATUS.approved)
            return res.status(400).json({ success: false, message: "This Prescription isn't approved!" });

        findPrescription.status = STATUS.disapproved;
        findPrescription.disapproved_By = value.name;
        await findPrescription.save();

        await Logger(req.email, "Disapprove Prescription", findPrescription.patient_Id);

        return res.status(205).json({ success: true, findPrescription, message: "Appointement disapproved successfully" });
    } catch (err) {
        next(err);
    }
}  


export const deletePrescription = async (req, res, next) => {
    try {
        const prescription = await Prescription.findByIdAndDelete(req.params.id);
        await Logger(req.email, "Delete Prescription", prescription.patient_Id);
        
        return res.status(204).json({ success: true, message: "Prescription deleted successfully" });
    } catch (err) {
        next(err);
    }
}  