import Doctor from "../models/doctorModel.js";
import Log from "../models/logModel.js";
import { Logger } from "../utils/log.js";
import { v2 as cloudinary } from "cloudinary";
import { ROLES } from "../utils/SD.js";
import { DoctorValidator } from "../validators/validateSchema.js";
import { axiosPrivate } from "../config/axiosConfig.js";
import mail from "../config/emailConfig.js";

export const getDoctors = async (req, res, next) => {
  try {
    const doctors = await Doctor.find()
      .populate("specialty")
      .populate("sub_Specialty")
      .exec();
    return res.status(200).json({ success: true, doctor: doctors });
  } catch (err) {
    next(err);
  }
};

export const getDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id)
      .populate("specialty")
      .populate("sub_Specialty")
      .exec();
    return res.status(200).json({ success: true, doctor });
  } catch (err) {
    next(err);
  }
};

export const postDoctor = async (req, res, next) => {
  try {
    const { password, ...data } = req.body;
    const { error, value } = DoctorValidator.validate(data);

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const newDoctor = new Doctor({ created_By: req.email, ...value });

    await Logger(req.email, "New Doctor", value.email);

    const body = {
      Email: value.email,
      Password: password,
      AccType: ROLES[1],
      Role: ROLES[1],
      User_Profile_Id: newDoctor._id,
    };

    const authRes = await axiosPrivate(req.token).post("/register", body);
    if (authRes && authRes.status !== 201)
      return res.status(400).json({
        success: false,
        message: authRes.data?.message || authRes.statusText,
      });

    await newDoctor.save();
    await mail(
      newDoctor.email,
      `${newDoctor.first_Name} ${newDoctor.last_Name}`,
      "Doctor Registration",
      "Thank you for trusting us"
    );

    return res.status(201).json({
      success: true,
      doctor: newDoctor,
      message: "Doctor created successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const updateDoctor = async (req, res, next) => {
  try {
    const {
      _id,
      updatedAt,
      createdAt,
      __v,
      created_By,
      updated_By,
      profile_Url,
      ...data
    } = req.body;
    const { error, value } = DoctorValidator.validate(data);

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

    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      { $set: { updated_By: req.email, ...value } },
      { new: true }
    );

    await Logger(req.email, "Updated Doctor", value.email);

    return res.status(205).json({
      success: true,
      doctor: updatedDoctor,
      message: "Doctor updated successfully",
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

    const updatedPatient = await Doctor.findByIdAndUpdate(
      req.params.id,
      { $set: { profile_Url: cloudImage?.secure_url } },
      { new: true }
    );

    await Logger(req.email, "Updated Doctor Image", req.email);

    return res.status(205).json({
      success: true,
      patient: updatedPatient,
      message: "Updated successfully with profile image",
    });
  } catch (err) {
    next(err);
  }
};

export const deleteDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    await Logger(
      req.email,
      "Deleted Doctor",
      `${doctor.first_Name} ${doctor.last_Name} ${doctor.middle_Name}`
    );
    return res
      .status(200)
      .json({ success: true, message: "Doctor deleted successfully" });
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
