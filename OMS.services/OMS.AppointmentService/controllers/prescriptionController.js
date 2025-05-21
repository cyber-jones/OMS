import Prescription from "../models/prescriptionModel.js";
import { PrescriptionValidator } from "../validators/validateSchema.js";


export const getPrescriptions = async (req, res, next) => {
    try {
        const prescriptions = await Prescription.find();
        return res.status(200).json({ success: true, prescriptions });
    } catch (err) {
        next(err);
    }
}  


export const postPrescription = async (req, res, next) => {
    try {
        const { error, value } = PrescriptionValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const newPrescription = new Prescription({ ...value });
        await newPrescription.save();  

        return res.status(201).json({ success: true, newAppointment, message: "Drug prescribed successfully" });
    } catch (err) {
        next(err);
    }
}  


export const updatePrescription = async (req, res, next) => {
    try {
        const { error, value } = PrescriptionValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const updatePrescription = await Prescription.findByIdAndUpdate(req.params.id, { $set: { ...value }}, { new: true });

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

        if (findPrescription.approved)
            return res.status(400).json({ success: false, message: "This Prescription has been approved!" });

        findPrescription.approved = true;
        findPrescription.approved_By = value;
        await findPrescription.save();

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

        if (!findPrescription.approved)
            return res.status(400).json({ success: false, message: "This Prescription isn't approved!" });

        findPrescription.approved = false;
        findPrescription.disapproved_By = value.name;
        await findPrescription.save();

        return res.status(205).json({ success: true, findPrescription, message: "Appointement disapproved successfully" });
    } catch (err) {
        next(err);
    }
}  


export const deletePrescription = async (req, res, next) => {
    try {
        await Prescription.findByIdAndDelete(req.params.id);
        return res.status(204).json({ success: true, message: "Prescription deleted successfully" });
    } catch (err) {
        next(err);
    }
}  