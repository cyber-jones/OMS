import Patient from "../models/patientModel.js";
import Log from "../models/logModel.js";
import { Logger } from "../utils/log.js";
import { v2 as cloudinary } from "cloudinary";
import { PatientValidator } from "../validators/validateSchema.js";
import { ROLES } from "../utils/SD.js";
import { axiosPrivate } from "../config/axiosConfig.js";
import mail from "../config/emailConfig.js";

export const getPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find();
    return res.status(200).json({ success: true, patient: patients });
  } catch (err) {
    next(err);
  }
};

export const getPatient = async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.id);
    return res.status(200).json({ success: true, patient });
  } catch (err) {
    next(err);
  }
};

export const postPatient = async (req, res, next) => {
  try {
    const { password, ...data } = req.body;
    const { error, value } = PatientValidator.validate(data);

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const newPatient = new Patient({ ...value });

    const body = {
      Email: value.email,
      Password: password,
      AccType: ROLES[3],
      Role: ROLES[3],
      User_Profile_Id: newPatient._id,
    };

    const authRes = await axiosPrivate(req.token).post("/register", body);
    if (authRes && authRes.status !== 201)
      return res.status(400).json({
        success: false,
        message: authRes.data?.message || authRes.statusText,
      });

    await newPatient.save();
    await Logger(value.email, "New Patient", value.email);
    await mail(
      newPatient.email,
      `${newPatient.first_Name} ${newPatient.last_Name}`,
      "Patient Registration",
      "Thank you for trusting us"
    );

    return res.status(201).json({
      success: true,
      patient: newPatient,
      message: "Patient created successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const updatePatient = async (req, res, next) => {
  try {
    const { _id, updatedAt, createdAt, __v, profile_Url, ...data } = req.body;
    const { error, value } = PatientValidator.validate(data);

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const authRes = await axiosPrivate(req.token).put(
      "/update/email",
      value.email
    );
    if (authRes && authRes.status !== 205)
      return res.status(400).json({
        success: false,
        message: authRes.data?.message || authRes.statusText,
      });

    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      { $set: { ...value } },
      { new: true }
    );

    await Logger(req.email, "Updated Patient", value.email);

    return res.status(205).json({
      success: true,
      patient: updatedPatient,
      message: "Patient updated successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const imageUpload = async (req, res, next) => {
  try {
    const imageFile = req.file;
    const cloudImage = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      { $set: { profile_Url: cloudImage?.secure_url } },
      { new: true }
    );

    await Logger(req.email, "Updated Patient Image", req.email);

    return res.status(205).json({
      success: true,
      patient: updatedPatient,
      message: "Updated successfully with profile image",
    });
  } catch (err) {
    next(err);
  }
};

export const deletePatient = async (req, res, next) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    await Logger(
      req.email,
      "Deleted Patient",
      `${patient.first_Name} ${patient.last_Name} ${patient.middle_Name}`
    );
    return res
      .status(200)
      .json({ success: true, message: "Patient deleted successfully" });
  } catch (err) {
    next(err);
  }
};

export const getLogs = async (req, res, next) => {
  try {
    const logs = await Log.find();
    return res.status(200).json({ success: true, data: logs });
  } catch (err) {
    next(err);
  }
};
