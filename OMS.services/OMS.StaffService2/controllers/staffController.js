import Staff from "../models/staffModel.js";
import Log from "../models/logModel.js";
import { Logger } from "../utils/log.js";
import { v2 as cloudinary } from "cloudinary";
import { StaffValidator } from "../validators/validateSchema.js";
import { ROLES } from "../utils/SD.js";
import { axiosPrivate } from "../config/axiosConfig.js";
import mail from "../config/emailConfig.js";

export const getStaffs = async (req, res, next) => {
  try {
    const staffs = await Staff.find();
    return res.status(200).json({ success: true, staff: staffs });
  } catch (err) {
    next(err);
  }
};

export const getStaff = async (req, res, next) => {
  try {
    const staff = await Staff.findById(req.params.id);
    return res.status(200).json({ success: true, staff });
  } catch (err) {
    next(err);
  }
};

export const postStaff = async (req, res, next) => {
  try {
    const { password, ...data } = req.body;
    const { error, value } = StaffValidator.validate(data);

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const newStaff = new Staff({ created_By: req.email, ...value });

    const body = {
      Email: value.email,
      Password: password,
      AccType: ROLES[2],
      Role: ROLES[2],
      User_Profile_Id: newStaff._id,
    };

    const authRes = await axiosPrivate(req.token).post("/register", body);
    if (authRes && authRes.status !== 201)
      return res.status(400).json({
        success: false,
        message: authRes.data?.message || authRes.statusText,
      });
    
    await newStaff.save();
    await Logger(req.email, "New Staff", value.email);
    await mail(
      newStaff.email,
      `${newStaff.first_Name} ${newStaff.last_Name}`,
      "Staff Registration",
      "Thank you for trusting us"
    );

    return res.status(201).json({
      success: true,
      staff: newStaff,
      message: "Staff created successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const updateStaff = async (req, res, next) => {
  try {
    const { _id, updatedAt, createdAt, __v, profile_Url, ...data } = req.body;
    const { error, value } = StaffValidator.validate(data);

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

    const updatedStaff = await Staff.findByIdAndUpdate(
      req.params.id,
      { $set: { updated_By: req.email, ...value } },
      { new: true }
    );

    await Logger(req.email, "Updated Staff", value.email);

    return res.status(205).json({
      success: true,
      staff: updatedStaff,
      message: "Staff updated successfully",
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

    const updatedPatient = await Staff.findByIdAndUpdate(
      req.params.id,
      { $set: { profile_Url: cloudImage?.secure_url } },
      { new: true }
    );

    await Logger(req.email, "Updated Staff Image", req.email);

    return res.status(205).json({
      success: true,
      patient: updatedPatient,
      message: "Updated successfully with profile image",
    });
  } catch (err) {
    next(err);
  }
};

export const deleteStaff = async (req, res, next) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id);
    await Logger(
      req.email,
      "Deleted Staff",
      `${staff.first_Name} ${staff.last_Name} ${staff.middle_Name}`
    );
    return res
      .status(200)
      .json({ success: true, message: "Staff deleted successfully" });
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
